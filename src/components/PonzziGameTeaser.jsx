import React from 'react';
import { Crown, Rocket } from 'lucide-react';

export default function PonzziGameTeaser() {
  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-white/60 bg-white/60 p-8 backdrop-blur-xl shadow-xl overflow-hidden relative">
          <div className="pointer-events-none absolute -inset-32 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.25),rgba(34,211,238,0.15),transparent_70%)]" />
          <div className="relative z-10 grid gap-8 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700">
                <Crown className="h-4 w-4 text-yellow-500" />
                Ponzzi Mini-Game
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
                The Game of Last-In Wins
              </h3>
              <p className="mt-2 text-gray-700">
                A playful, time-extended pool where each new entry resets the timer and boosts the jackpot. Last deposit before timer ends takes the crown, while a share flows back to stakers.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-800">
                <li>• Join by depositing a small game ticket in $HIGH</li>
                <li>• Each entry extends the countdown</li>
                <li>• Jackpot to the last player; fee goes to stakers as boost</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white hover:opacity-90">
                  <Rocket className="h-5 w-5" />
                  Enter Game Lobby
                </button>
                <button className="rounded-xl border border-gray-300/80 bg-white/80 px-5 py-3 font-semibold text-gray-800 hover:bg-white">
                  Read Game Rules
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/60 bg-white/80 p-5">
                <div className="text-sm text-gray-600">Current Jackpot</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">12,420 HIGH</div>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/80 p-5">
                <div className="text-sm text-gray-600">Time Left</div>
                <div className="mt-1 text-2xl font-bold text-fuchsia-600">00:27:39</div>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/80 p-5">
                <div className="text-sm text-gray-600">Entries</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">128</div>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/80 p-5">
                <div className="text-sm text-gray-600">Staker Boost</div>
                <div className="mt-1 text-2xl font-bold text-emerald-600">+8.5%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
