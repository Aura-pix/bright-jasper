import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    const res = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': process.env.KIT_API_SECRET,
      },
      body: JSON.stringify({ 
        email_address: email.trim().toLowerCase() 
      }),
    });

    // Check if the response was ok. We don't strictly need to parse the data if it failed 
    // unless we want the error message, but we'll try catching any JSON parse errors too.
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Kit API error response:", res.status, errorText);
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Check your email to confirm' });
  } catch (err) {
    console.error("Subscription error:", err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
