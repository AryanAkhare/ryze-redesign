import React from "react";

export default function Footer() {
  return (
    <section className="relative bg-[var(--color-text-secondary)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT — SYSTEM CARDS */}
        <div className="relative flex flex-col gap-8">

          <AccountsCard />
          <CreativeOptimizationCard />

          <div className="flex gap-6">
            <MetricCard title="ROAS" value="3.1x" />
            <MetricCard title="CPA" value="$23.4" />
          </div>

          <ImprovementsCard />
        </div>

        {/* RIGHT — HERO CTA */}
        <div className="flex flex-col justify-center">
          <p className="uppercase tracking-widest text-sm text-white/60 mb-4">
            Next gen of marketing
          </p>

          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-10">
            Let AI <br />
            Run Your <br />
            Ads
          </h1>

          <div className="relative max-w-md">
            <input
              type="email"
              placeholder="work@email.com"
              className="
                w-full px-6 py-4 rounded-full
                bg-white text-black font-semibold
                outline-none
                pr-14
              "
            />
            <button
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                h-10 w-10 rounded-full
                bg-[var(--color-text-primary)]
                text-white font-black
                hover:scale-105
                transition
              "
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
function CreativeOptimizationCard() {
  return (
    <div className="rounded-3xl bg-[var(--color-text-primary)] p-6 shadow-xl">
      <p className="font-bold mb-4">Creative optimization</p>

      <div className="bg-white rounded-2xl p-4 text-black">
        <p className="text-sm font-semibold mb-3">Top Creative</p>

        <div className="flex justify-between items-center">
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
            ROAS 3.2x
          </span>

          <button className="text-xs font-bold bg-black text-white px-4 py-2 rounded-full">
            Increase budget
          </button>
        </div>
      </div>
    </div>
  );
}
function AccountsCard() {
  return (
    <div className="rounded-3xl bg-[var(--color-text-primary)] p-6 shadow-xl">
      <p className="font-bold mb-4">Manages all your accounts</p>

      <div className="grid grid-cols-2 gap-4">
        <AccountTile label="Google Ads" />
        <AccountTile label="Meta Ads" />
      </div>
    </div>
  );
}

function AccountTile({ label }) {
  return (
    <div className="bg-white rounded-2xl p-4 text-center text-black font-semibold cursor-pointer hover:shadow-md transition">
      {label}
      <div className="mt-2 text-xs text-[var(--color-text-primary)]">
        Connect
      </div>
    </div>
  );
}

function MetricCard({ title, value }) {
  return (
    <div className="rounded-3xl bg-white p-6 flex-1 text-black">
      <p className="text-xs text-gray-500">{title}</p>
      <div className="mt-2 text-2xl font-black">{value}</div>
    </div>
  );
}

function ImprovementsCard() {
  return (
    <div className="rounded-3xl bg-white p-6 text-black">
      <p className="font-bold mb-4">Improvements</p>
      <ul className="text-sm text-gray-700 list-disc pl-5">
        <li>Prioritized actions to reduce CPA</li>
        <li>Creative refresh suggestions</li>
        <li>Optimized account structure</li>
      </ul>
    </div>
  );
}
