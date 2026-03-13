import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <div className="bg-background-dark font-display text-slate-100 selection:bg-primary selection:text-black min-h-screen">
      <BackgroundEffects />
      <Navbar />

      <main className="relative z-20">
        {/* Hero Section */}
        <section className="min-h-screen pt-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 items-center">
            <div className="flex flex-col gap-8">
              <h1 className="font-heading text-7xl md:text-[92px] leading-[0.9] tracking-tight uppercase">
                MANAGE DEFI. <br />
                VERIFY HUMAN. <br />
                <span className="text-primary glow-text">EARN</span> FOREVER.
              </h1>
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-display">
                AutonFi deploys an AI agent to manage your DeFi portfolio with privacy and security. Verified identity powered by World ID.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded bg-primary/10 border border-primary/30 text-primary text-[10px] font-mono">WORLD ID</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-400 text-[10px] font-mono">ZAMA FHE</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-400 text-[10px] font-mono">FLOW EVM</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-400 text-[10px] font-mono">FILECOIN</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-400 text-[10px] font-mono">ERC-8004</span>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 rounded-xl bg-primary text-black font-bold flex items-center gap-2 hover:scale-105 transition-transform border-glow-intense">
                  VERIFY WITH WORLD ID
                </button>
                <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                  <span className="material-symbols-outlined">play_circle</span>
                  WATCH DEMO
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
              <div className="relative bg-black/80 border border-primary/40 rounded-xl overflow-hidden backdrop-blur-xl border-glow">
                <div className="bg-black/50 border-b border-primary/20 p-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-primary/50"></div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Autonomous Terminal v2.0</div>
                </div>
                <div className="p-6 font-ibm text-xs text-primary/80 space-y-2 h-[300px] overflow-hidden">
                  <p className="text-white/40">&gt; Initializing neural_strategy_engine...</p>
                  <p className="text-white/40">&gt; Encrypting wallet session (FHE)... [OK]</p>
                  <p className="text-primary">&gt; Scanning Uniswap V3 liquidity pools...</p>
                  <p className="text-primary">&gt; Target found: WETH/USDC (0.05% tier)</p>
                  <p className="text-primary">&gt; Executing rebalance action...</p>
                  <p className="text-white/40">&gt; TX: 0x4f2a...88e1 confirmed.</p>
                  <p className="text-primary animate-pulse">&gt; Monitoring yield differentials... _</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 p-4 rounded-xl bg-black border border-primary/30 shadow-2xl backdrop-blur-md border-glow">
                <p className="text-[10px] text-slate-500 font-mono uppercase">Portfolio Value</p>
                <p className="text-2xl font-stats text-primary">$1,240,932</p>
              </div>
              <div className="absolute top-1/2 -left-10 p-4 rounded-xl bg-black border border-primary/30 shadow-2xl backdrop-blur-md border-glow">
                <p className="text-[10px] text-slate-500 font-mono uppercase">Agent Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                  <p className="text-lg font-stats text-white font-bold tracking-wider">ACTIVE</p>
                </div>
              </div>
              <div className="absolute -bottom-6 right-10 p-4 rounded-xl bg-black border border-primary/30 shadow-2xl backdrop-blur-md border-glow">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">security</span>
                  <div>
                    <p className="text-[10px] text-slate-500 font-mono uppercase">Encryption</p>
                    <p className="text-lg font-stats text-white font-bold tracking-wider">FHE ENABLED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="border-t border-primary/10 bg-black/50 backdrop-blur-sm py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-heading text-6xl text-white mb-16 text-center uppercase tracking-tight">
              DEFI IS BROKEN. <span className="text-primary">WE FIXED IT.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors border-glow">
                  <span className="material-symbols-outlined">memory</span>
                </div>
                <h3 className="text-xl font-mono tracking-wide text-white font-bold">AUTONOMOUS EXECUTION</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-display">
                  Our proprietary AI agents execute high-frequency yield strategies across multiple chains without manual intervention.
                </p>
              </div>
              <div className="flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors border-glow">
                  <span className="material-symbols-outlined">fingerprint</span>
                </div>
                <h3 className="text-xl font-mono tracking-wide text-white font-bold">SYBIL-PROOF IDENTITY</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-display">
                  Integrate World ID to ensure one person, one agent. Fair rewards distribution through biometric verification.
                </p>
              </div>
              <div className="flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors border-glow">
                  <span className="material-symbols-outlined">shield</span>
                </div>
                <h3 className="text-xl font-mono tracking-wide text-white font-bold">FHE PRIVATE STRATEGY</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-display">
                  Leverage Fully Homomorphic Encryption to run complex strategies on-chain without revealing sensitive trade data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-heading text-6xl md:text-[80px] leading-[0.9] text-white mb-6 uppercase tracking-tight">
              FROM HUMAN TO YIELD.<br />
              <span className="text-primary">FOUR STEPS. ZERO EFFORT.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 font-mono text-sm uppercase tracking-widest">
              Autonomous On-Chain Wealth Generation Powered by FHE & AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {[
              { num: '01', icon: 'fingerprint', title: 'VERIFY', desc: 'Secure your identity with World ID Authentication. Prove humanity while maintaining complete on-chain privacy.' },
              { num: '02', icon: 'psychology', title: 'CONFIGURE', desc: 'Define your risk profile and goals. AI architects a personalized liquidity and yield farming strategy.' },
              { num: '03', icon: 'terminal', title: 'DEPLOY', desc: 'ERC-8004 execution leveraging Fully Homomorphic Encryption (FHE) for blind, secure automated trading.' },
              { num: '04', icon: 'trending_up', title: 'EARN', desc: 'Sit back and monitor your portfolio. Watch real-time yield compounding via the AutonFi live dashboard.' },
            ].map((step, i) => (
              <div key={i} className="group relative p-8 bg-primary/5 border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-colors">
                <span className="font-heading text-[120px] absolute -bottom-4 -right-2 text-primary/5 transition-colors pointer-events-none">{step.num}</span>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg mb-6 shadow-[0_0_20px_rgba(57,255,20,0.3)]">
                    <span className="material-symbols-outlined text-black">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-mono text-white">{step.num} {step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Autonomous Loop Diagram */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-stats font-bold mb-4 text-white uppercase tracking-wider">AUTONOMOUS LOOP</h2>
              <p className="text-slate-400 font-mono uppercase tracking-widest text-xs">The continuous intelligence cycle powering your assets</p>
            </div>
            <div className="relative flex justify-center items-center py-20 overflow-hidden md:overflow-visible">
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-dashed border-primary/30 rounded-full"></div>
              <div className="relative z-20 w-24 h-24 bg-black border-4 border-primary rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(57,255,20,0.4)]">
                <span className="material-symbols-outlined text-primary text-4xl">bolt</span>
              </div>

              {/* Nodes */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="bg-primary/10 border border-primary text-primary px-4 py-2 rounded-full font-mono text-xs font-bold mb-2 backdrop-blur-sm shadow-[0_0_10px_rgba(57,255,20,0.2)]">DISCOVER</div>
                <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#39ff14]"></div>
              </div>
              <div className="absolute top-1/4 right-0 translate-x-1/2 flex flex-col items-start hidden md:flex">
                <div className="bg-primary/10 border border-primary text-primary px-4 py-2 rounded-full font-mono text-xs font-bold mb-2 backdrop-blur-sm shadow-[0_0_10px_rgba(57,255,20,0.2)]">PLAN</div>
                <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#39ff14]"></div>
              </div>
              <div className="absolute bottom-1/4 right-0 translate-x-1/2 flex flex-col items-start hidden md:flex">
                <div className="bg-primary/10 border border-primary text-primary px-4 py-2 rounded-full font-mono text-xs font-bold mb-2 backdrop-blur-sm shadow-[0_0_10px_rgba(57,255,20,0.2)]">EXECUTE</div>
                <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#39ff14]"></div>
              </div>
              <div className="absolute bottom-1/4 left-0 -translate-x-1/2 flex flex-col items-end hidden md:flex">
                <div className="bg-primary/10 border border-primary text-primary px-4 py-2 rounded-full font-mono text-xs font-bold mb-2 backdrop-blur-sm shadow-[0_0_10px_rgba(57,255,20,0.2)]">VERIFY</div>
                <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#39ff14]"></div>
              </div>
              <div className="absolute top-1/4 left-0 -translate-x-1/2 flex flex-col items-end hidden md:flex">
                <div className="bg-primary/10 border border-primary text-primary px-4 py-2 rounded-full font-mono text-xs font-bold mb-2 backdrop-blur-sm shadow-[0_0_10px_rgba(57,255,20,0.2)]">SUBMIT</div>
                <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#39ff14]"></div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}
