import React, { useMemo, useState } from 'react';
import { Wallet, Lock } from 'lucide-react';

export default function StakingCalculator() {
  const [amount, setAmount] = useState(1000);
  const [apy, setApy] = useState(120);
  const [days, setDays] = useState(90);

  const results = useMemo(() => {
    const principal = Number(amount) || 0;
    const apyPct = Number(apy) || 0;
    const d = Number(days) || 0;
    const dailyRate = apyPct / 100 / 365;
    const future = principal * Math.pow(1 + dailyRate, d);
    const profit = future - principal;
    return { future, profit };
  }, [amount, apy, days]);

  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Staking Calculator</h2>
            <p className="text-gray-700">Estimate your yield with daily compounding.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 backdrop-blur">
            <Lock className="h-4 w-4 text-emerald-600" />
            <span className="text-sm text-gray-800">Non-custodial</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/60 bg-white/70 p-6 backdrop-blur-xl shadow-lg">
            <div className="space-y-5">
              <label className="block">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-800">Amount ($HIGH)</span>
                  <span className="text-xs text-gray-600">Balance: 0.00</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3">
                  <Wallet className="h-5 w-5 text-gray-700" />
                  <input
                    type="number"
                    min="0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-500"
                    placeholder="0.0"
                  />
                  <button
                    onClick={() => setAmount(10000)}
                    className="rounded-xl bg-gray-900 px-3 py-1 text-xs font-semibold text-white hover:opacity-90"
                  >
                    MAX
                  </button>
                </div>
              </label>

              <label className="block">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-800">APY %</span>
                  <span className="text-xs text-gray-600">Default 120%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="400"
                  value={apy}
                  onChange={(e) => setApy(e.target.value)}
                  className="w-full accent-fuchsia-600"
                />
                <div className="mt-1 text-sm text-gray-800">{apy}%</div>
              </label>

              <label className="block">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-800">Days Staked</span>
                  <span className="text-xs text-gray-600">Compounded daily</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="365"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full accent-cyan-600"
                />
                <div className="mt-1 text-sm text-gray-800">{days} days</div>
              </label>

              <button className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-5 py-3 font-semibold text-white shadow-lg hover:brightness-110">
                Connect Wallet
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/60 bg-white/70 p-6 backdrop-blur-xl shadow-lg">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/60 bg-white/80 p-5">
                <div className="text-sm text-gray-600">Future Value</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">
                  {results.future.toLocaleString(undefined, { maximumFractionDigits: 2 })} HIGH
                </div>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/80 p-5">
                <div className="text-sm text-gray-600">Estimated Profit</div>
                <div className="mt-1 text-2xl font-bold text-emerald-600">
                  +{results.profit.toLocaleString(undefined, { maximumFractionDigits: 2 })} HIGH
                </div>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/80 p-5">
                <div className="text-sm text-gray-600">Daily Rate</div>
                <div className="mt-1 text-xl font-semibold text-gray-900">
                  {(apy / 365).toFixed(2)}% / day
                </div>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/80 p-5">
                <div className="text-sm text-gray-600">Assumption</div>
                <div className="mt-1 text-sm text-gray-800">APY stays constant and compounds daily</div>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-600">
              This calculator provides an estimate and is not financial advice. Actual rewards depend on on-chain parameters and game dynamics.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
