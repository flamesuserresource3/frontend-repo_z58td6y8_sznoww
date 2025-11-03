import React from 'react';
import Hero3D from './components/Hero3D';
import APYShowcase from './components/APYShowcase';
import StakingCalculator from './components/StakingCalculator';
import PonzziGameTeaser from './components/PonzziGameTeaser';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero3D />
      <APYShowcase />
      <StakingCalculator />
      <PonzziGameTeaser />
      <footer className="border-t border-gray-200/80 py-10">
        <div className="mx-auto w-full max-w-6xl px-6 flex flex-col items-center gap-3 text-center">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} HIGH Protocol. All rights reserved.
          </div>
          <div className="text-xs text-gray-500">
            This interface is for demonstration only. Staking and game actions require on-chain contracts and wallet connection.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
