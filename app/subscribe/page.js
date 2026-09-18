"use client";

import Image from "next/image";
import { useState } from "react";

export default function SubscribePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName: name, honeypot }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        if (data.status === "already_subscribed") {
          setMessage(
            "You're already on the list 🎉 — you'll get the next issue Tuesday 2pm WAT",
          );
        } else {
          setMessage(
            "You're in — welcome email is on its way! (Note: It may land in spam. Please click 'Not Spam' so future emails go straight to your inbox).",
          );
        }
        setName("");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(
          data.error || "Something went wrong. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="px-6 pt-16 pb-20 flex items-center justify-center min-h-[75vh]">
      <div className="max-w-xl w-full">
        <h1 className="text-[28px] sm:text-[32px] font-medium text-ink mb-6">
          Subscribe to my weekly newsletter
        </h1>
        <Image
          src="/testimonial-image.jpg"
          alt="Feedback from an early reader asking for a subscribe button"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg border border-ink/10 mb-8"
        />

        <div className="space-y-4 text-[16px] text-ink/90 leading-relaxed mb-8">
          <p>
            I shared a piece early when I started writing and someone told me I
            should add a subscribe button so he wouldn&apos;t have to keep
            searching for my website.
          </p>
          <p>So I thought, why not?</p>
          <p>So here we are.</p>

          <hr className="my-8 border-ink/15" />

          <p>They say, &quot;Pick one niche and go all in on it.&quot;</p>
          <p>But what if you&apos;re interested in several?</p>
          <p>
            That&apos;s me. One day I&apos;m thinking through a Web3 problem;
            the next, I&apos;m questioning a piece of religious rhetoric.
          </p>
          <p>
            This newsletter is where I explore whatever has my attention:
            technology, finance, psychology, blockchain, and the strange
            connections between them.
          </p>
          <p>Here&apos;s what you get every Tuesday:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>A thought</strong> — Could be tech news today, philosophy
              tomorrow. I break it down so you get the value even if it&apos;s
              not your niche.
            </li>
            <li>
              <strong>Posts of the week</strong> — Any posts I made that week
              worth highlighting, whether it&apos;s on my blog, X, or anywhere.
            </li>
            <li>
              <strong>A random fact or quiz</strong> — Or both. Just for fun.
            </li>
          </ol>
          <p>
            If that sounds interesting, subscribe. Expect curiosity, unfinished
            thoughts, and the occasional rabbit hole.
          </p>
          <p>
            And yeah, feel free to reply to any of them. I actually read and
            reply to every email.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-[#F7FAFD] border border-accent/20 p-6 rounded-lg text-center">
            <h2 className="text-[18px] font-medium text-ink mb-2">
              You&apos;re on the list. Let&apos;s see where the rabbit hole
              leads.
            </h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                name="name"
                placeholder="First name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 border border-ink/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-ink placeholder-ink/40 transition-colors"
                required
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 px-4 py-3 border border-ink/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-ink placeholder-ink/40 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-opacity whitespace-nowrap"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-500 text-[14px] mt-3">{errorMessage}</p>
        )}
      </div>
    </section>
  );
}
