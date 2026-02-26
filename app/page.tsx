"use client";

import { FormEvent, useState } from "react";

type Interest = "release" | "beta";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState<Interest>("beta");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:py-24">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-200">
            CVE Risk Copilot is launching soon
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Turn raw CVE data into clear risk memos your teams can act on.
          </h1>
          <p className="max-w-2xl text-base text-slate-300 md:text-lg">
            cveriskcopilot is an AWS-native copilot for security teams. Track
            exposure, generate executive-ready memos, and reduce response time
            from hours to minutes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-lg font-semibold text-white">
              Join the waitlist
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Be first to know when we launch and get priority access to open
              beta.
            </p>

            {submitted ? (
              <div className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                You are on the waitlist for {interest === "beta" ? "open beta" : "general release"} updates.
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <label className="block text-sm">
                  <span className="mb-1 block text-slate-300">Work email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-cyan-300/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </label>

                <label className="block text-sm">
                  <span className="mb-1 block text-slate-300">Name</span>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none ring-cyan-300/40 placeholder:text-slate-500 focus:ring-2"
                  />
                </label>

                <fieldset className="space-y-2 text-sm">
                  <legend className="text-slate-300">Notify me about</legend>
                  <label className="flex items-center gap-2 text-slate-200">
                    <input
                      checked={interest === "beta"}
                      onChange={() => setInterest("beta")}
                      type="radio"
                      name="interest"
                      value="beta"
                    />
                    Open beta
                  </label>
                  <label className="flex items-center gap-2 text-slate-200">
                    <input
                      checked={interest === "release"}
                      onChange={() => setInterest("release")}
                      type="radio"
                      name="interest"
                      value="release"
                    />
                    General release
                  </label>
                </fieldset>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-cyan-400 px-4 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Join waitlist
                </button>
              </form>
            )}
          </div>

          <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
            <h2 className="text-lg font-semibold text-white">What you get</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Prioritized alerts with CVE + KEV context</li>
              <li>Auto-generated remediation memos for stakeholders</li>
              <li>Export-ready summaries for compliance workflows</li>
              <li>Secure, AWS-native architecture for enterprise adoption</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
