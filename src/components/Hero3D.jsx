import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Crown } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Light gradient overlays that won't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.0),rgba(0,0,0,0.08))]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="backdrop-blur-xl bg-white/30 border border-white/50 shadow-2xl rounded-3xl p-8 md:p-12">
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/60 bg-white/50 px-3 py-1 text-xs font-medium text-gray-700">
                <Crown className="h-4 w-4 text-yellow-500" />
                Ultra Yield • NFT-like Glass Aesthetics
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
                Stake. Play. Amplify.
                <span className="block bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">The Neon APY Experience</span>
              </h1>

              <p className="max-w-2xl text-base md:text-lg text-gray-700">
                Earn high-yield rewards with our futuristic staking platform and dive into a playful, game-theory powered Ponzzi mini-game. Designed with holographic vibes and glass surfaces.
              </p>

              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-5 py-3 font-semibold text-white shadow-lg shadow-fuchsia-600/20 hover:brightness-110 transition">
                  <Rocket className="h-5 w-5" />
                  Start Staking
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl border border-gray-300/70 bg-white/70 px-5 py-3 font-semibold text-gray-800 backdrop-blur hover:bg-white transition">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  View Protocol
                </button>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-4 text-sm text-gray-700 md:grid-cols-3">
                <div className="rounded-2xl border border-white/60 bg-white/50 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-gray-900">120%+ APY</div>
                  Dynamic compounding model
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/50 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-gray-900">0 Lock</div>
                  Withdraw anytime
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/50 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-gray-900">NFT Vibes</div>
                  Glass, neon, holographic
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
