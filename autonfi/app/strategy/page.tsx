import Sidebar from "@/components/Sidebar";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Strategy() {
    return (
        <div className="flex h-screen w-full bg-background-dark text-slate-100 overflow-hidden font-sans">
            <BackgroundEffects />
            <Sidebar />

            <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar relative z-10 bg-black/50 uppercase font-mono">
                <header className="h-16 border-b border-border-mute flex items-center justify-between px-8 bg-black/50 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-primary/60 tracking-widest uppercase">Strategy Architect v1.0</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="px-3 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase font-bold tracking-widest animate-pulse">
                            ● Editing Mode
                        </div>
                        <button className="px-6 py-2 rounded-xl bg-primary text-black text-xs font-black hover:brightness-110 transition-all border-glow uppercase">
                            Deploy Changes
                        </button>
                    </div>
                </header>

                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-64px)] overflow-hidden">
                    {/* Node Editor Placeholder */}
                    <div className="lg:col-span-2 bg-black border border-primary/20 rounded-2xl relative overflow-hidden group neon-border">
                        <div className="absolute inset-0 grid-bg opacity-30"></div>
                        <div className="absolute top-4 left-4 flex gap-2">
                            <button className="px-3 py-2 bg-surface/80 border border-primary/20 rounded-lg text-[10px] text-white hover:bg-primary/5 transition-all">Add Node</button>
                            <button className="px-3 py-2 bg-surface/80 border border-primary/20 rounded-lg text-[10px] text-white hover:bg-primary/5 transition-all">Templates</button>
                        </div>

                        {/* Visual Nodes */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-full p-20 flex flex-col items-center justify-center gap-12">
                                <div className="p-4 bg-surface border border-primary/40 rounded-xl w-60 terminal-glow relative">
                                    <div className="absolute -top-3 left-4 px-2 bg-black text-primary text-[10px] font-bold border border-primary/30 rounded lowercase">trigger.on_yield_drop</div>
                                    <p className="text-[10px] text-slate-500 mb-2">THRESHOLD: 12% APR</p>
                                    <p className="text-[10px] text-slate-500">ASSET: WETH/USDC</p>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-black"></div>
                                </div>

                                <div className="w-1 h-12 bg-primary/20"></div>

                                <div className="p-4 bg-primary/10 border-2 border-primary rounded-xl w-60 shadow-[0_0_20px_rgba(57,255,20,0.1)] relative">
                                    <div className="absolute -top-3 left-4 px-2 bg-primary text-black text-[10px] font-bold border border-primary/30 rounded lowercase">action.rebalance</div>
                                    <p className="text-[10px] text-white mb-2">TARGET: UNISWAP_V3</p>
                                    <p className="text-[10px] text-white">MODE: LOW_SLIPPAGE</p>
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-black"></div>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-black"></div>
                                </div>

                                <div className="w-1 h-12 bg-primary/20"></div>

                                <div className="p-4 bg-surface border border-primary/40 rounded-xl w-60 terminal-glow relative">
                                    <div className="absolute -top-3 left-4 px-2 bg-black text-primary text-[10px] font-bold border border-primary/30 rounded lowercase">output.verify_state</div>
                                    <p className="text-[10px] text-slate-500 mb-2">METHOD: ERC-8004</p>
                                    <p className="text-[10px] text-slate-500">ENCRYPTION: FHE</p>
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Configuration Panel */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-surface/40 border border-primary/10 rounded-2xl p-6 neon-border">
                            <h3 className="text-sm font-bold text-white mb-6 tracking-widest flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">tune</span>
                                NODE PARAMETERS
                            </h3>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-slate-500 uppercase tracking-widest">Execution Engine</label>
                                    <select className="w-full bg-black border border-primary/10 rounded-lg p-3 text-xs text-white focus:border-primary outline-none uppercase font-mono">
                                        <option>AUTONFI_V1 (FHE)</option>
                                        <option>DIRECT_CONTRACT</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-slate-500 uppercase tracking-widest">Slippage Tolerance</label>
                                    <div className="flex items-center gap-4">
                                        <input type="range" className="flex-1 accent-primary" />
                                        <span className="text-primary text-xs font-bold">0.5%</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-primary/5 space-y-3">
                                    <label className="text-[10px] text-slate-500 uppercase tracking-widest">Autonomous Level</label>
                                    <div className="flex gap-2">
                                        {['MANUAL', 'HYBRID', 'FULL'].map(lvl => (
                                            <button key={lvl} className={`flex-1 py-2 rounded-lg border text-[10px] font-black tracking-widest transition-all ${lvl === 'FULL' ? 'bg-primary text-black border-primary' : 'bg-black text-slate-500 border-primary/20'}`}>
                                                {lvl}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/80 border border-primary/10 rounded-2xl p-6 relative overflow-hidden flex-1 neon-border">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-bold text-white tracking-widest uppercase">Logic Preview</h3>
                                <span className="text-[10px] text-green-500 font-bold tracking-widest uppercase">● VALID</span>
                            </div>
                            <div className="font-mono text-[11px] text-slate-400 leading-relaxed uppercase">
                                <p>&gt; if (yield_drop &lt; 0.12) &#123;</p>
                                <p className="pl-4">&gt; const pool = select_optimal_pool();</p>
                                <p className="pl-4">&gt; execute_swap(pool, 0.5);</p>
                                <p className="pl-4">&gt; encrypt_state_recursive(fhe_key);</p>
                                <p>&gt; &#125; else &#123;</p>
                                <p className="pl-4">&gt; maintain_position();</p>
                                <p>&gt; &#125;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
