"use client";

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
          Subscribe to my email list
        </h1>

        <div className="space-y-4 text-[16px] text-ink/90 leading-relaxed mb-8">
          <p>They say, &quot;Pick one skill and go all in on it.&quot;</p>
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
          <p>
            If that sounds interesting, subscribe. Expect curiosity, unfinished
            thoughts, and the occasional rabbit hole.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-[#F7FAFD] border border-accent/20 p-6 rounded-lg text-center">
            <h2 className="text-[18px] font-medium text-ink mb-2">
              Welcome to the chaotic side of life.
            </h2>
            <p className="text-[15px] text-ink/80">{message}</p>
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
