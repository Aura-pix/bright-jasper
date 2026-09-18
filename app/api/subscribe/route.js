import { NextResponse } from "next/server";

// Simple in-memory rate limit
const recentRequests = new Map();

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();

  // 1. Rate limit: 3 requests per minute per IP
  const last = recentRequests.get(ip) || 0;
  if (now - last < 20_000) {
    return NextResponse.json(
      { error: "Slow down — try again in 20s" },
      { status: 429 },
    );
  }
  recentRequests.set(ip, now);

  const { email, firstName, honeypot } = await req.json();

  // 2. Bot check - hidden field should be empty
  if (honeypot) {
    return NextResponse.json({ success: true }); // fake success for bots
  }

  // 3. Validate & normalize
  const normalized = email?.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!normalized || !emailRegex.test(normalized)) {
    return NextResponse.json(
      { error: "Please enter a valid email" },
      { status: 400 },
    );
  }

  const normalizedName = firstName?.trim().split(" ")[0] || "";
  const first_name =
    normalizedName.charAt(0).toUpperCase() +
    normalizedName.slice(1).toLowerCase();

  try {
    // 4. Check if already exists first
    const checkRes = await fetch(
      `https://api.kit.com/v4/subscribers?email_address=${encodeURIComponent(normalized)}`,
      {
        headers: { "X-Kit-Api-Key": process.env.KIT_API_SECRET },
      },
    );

    if (checkRes.ok) {
      const existing = await checkRes.json();
      const sub = existing.subscribers?.[0];

      if (sub) {
        if (sub.state === "active") {
          return NextResponse.json({
            success: true,
            status: "already_subscribed",
            message:
              "You are already subscribed — check your inbox on Tuesdays!",
          });
        }
        if (sub.state === "cancelled" || sub.state === "bounced") {
          // Kit won't let you re-add bounced emails via API, needs manual
          return NextResponse.json(
            {
              error:
                "This email had issues before. Email hello@brightjasper.com and I will add you manually.",
            },
            { status: 400 },
          );
        }
        // If inactive/unconfirmed - we'll try to re-subscribe below which re-sends confirmation
      }
    }

    // 5. Create / re-send confirmation
    const res = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": process.env.KIT_API_SECRET,
      },
      body: JSON.stringify({
        email_address: normalized,
        first_name,
        tags: [53595],
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      // Kit returns 400 when already exists - treat as success
      if (JSON.stringify(data).toLowerCase().includes("already")) {
        return NextResponse.json({
          success: true,
          status: "already_subscribed",
        });
      }
      console.error("Kit error:", data);
      return NextResponse.json(
        { error: "Could not subscribe, try again" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      status: "subscribed",
      message: "You're in — welcome email is on its way!",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
