import React from 'react';
import { Coins, TrendingUp, Shield } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, accent }) => (
  <div className="group rounded-3xl border border-white/60 bg-white/60 p-6 backdrop-blur-xl shadow-lg hover:shadow-2xl transition relative overflow-hidden">
    <div className={`pointer-events-none absolute -inset-20 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-20 blur-2xl transition`} />
    <div className="relative z-10 flex items-start gap-4">
      <div className="rounded-2xl bg-white/70 border border-white/60 p-3">
        <Icon className="h-6 w-6 text-gray-900" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-700">{description}</p>
      </div>
    </div>
  </div>
);

export default function APYShowcase() {
  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            High-Yield Staking for $HIGH
          </h2>
          <p className="mt-2 text-gray-700 max-w-2xl">
            Lock in outsized returns with transparent tokenomics and a sleek, NFT-inspired interface.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Coins}
            title="120%+ APY"
            description="Algorithmic target yield with dynamic boosts from game pool inflows."
            accent="from-fuchsia-500/50 to-cyan-500/50"
          />
          <FeatureCard
            icon={TrendingUp}
            title="Compounded Rewards"
            description="Auto-compound mechanics maximize your long-term returns effortlessly."
            accent="from-purple-500/50 to-blue-500/50"
          />
          <FeatureCard
            icon={Shield}
            title="Audited Contracts"
            description="Security-first approach with transparent contract addresses and public audits."
            accent="from-emerald-500/50 to-teal-500/50"
          />
        </div>
      </div>
    </section>
  );
}
