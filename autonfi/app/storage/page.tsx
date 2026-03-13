import Sidebar from "@/components/Sidebar";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Storage() {
    return (
        <div className="flex h-screen w-full bg-background-dark text-slate-100 overflow-hidden font-sans uppercase font-mono">
            <BackgroundEffects />
            <Sidebar />

            <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar relative z-10 bg-black/50">
                <header className="h-16 border-b border-border-mute flex items-center justify-between px-8 bg-black/50 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-primary/60 tracking-widest">Autonomous Memory Storage (Filecoin)</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] text-slate-500 tracking-widest uppercase">Network Capacity:</span>
                            <span className="text-xs text-white font-bold">1.2 EB</span>
                        </div>
                        <div className="h-4 w-[1px] bg-border-mute"></div>
                        <button className="flex items-center gap-2 text-xs text-primary hover:text-white transition-colors uppercase">
                            <span className="material-symbols-outlined text-lg">cloud_upload</span>
                            New Storage Deal
                        </button>
                    </div>
                </header>

                <div className="p-8 space-y-6">
                    {/* Storage Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl border border-primary/20 bg-surface/40 neon-border flex items-center gap-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary shadow-[0_0_10px_#39ff14]"></div>
                            <div className="size-16 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary text-3xl font-stats">
                                84<span className="text-xs">%</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Agent Memory Used</p>
                                <div className="flex items-baseline gap-2">
                                    <h3 className="text-2xl font-bold text-white tracking-tight">214.5 GB</h3>
                                    <span className="text-xs text-slate-500 uppercase">/ 256 GB</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl border border-primary/10 bg-surface/40 neon-border relative overflow-hidden group">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Active Storage Deals</p>
                                    <span className="text-xs text-primary font-bold">12 ACTIVE</span>
                                </div>
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="size-10 rounded-full border-2 border-black bg-surface flex items-center justify-center text-[10px] text-slate-400 font-bold uppercase transition-transform group-hover:translate-x-1">FIL</div>
                                    ))}
                                    <div className="size-10 rounded-full border-2 border-black bg-primary/20 flex items-center justify-center text-[10px] text-primary font-bold uppercase">+8</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl border border-primary/10 bg-surface/40 neon-border relative flex flex-col justify-center">
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Deal Replication Factor</p>
                            <div className="flex items-center gap-2">
                                <span className="text-3xl font-stats text-white font-bold">5x</span>
                                <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 uppercase font-bold tracking-widest">ENHANCED SECURITY</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Storage Log Table */}
                        <div className="lg:col-span-2 bg-black/40 border border-primary/10 rounded-2xl overflow-hidden neon-border">
                            <div className="px-6 py-4 border-b border-primary/10 bg-surface-dark flex justify-between items-center">
                                <h3 className="text-sm font-bold text-white tracking-widest uppercase">Autonomous Memory Logs</h3>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
                                    <input type="text" placeholder="SEARCH CID..." className="bg-black border border-primary/20 rounded-lg py-1.5 pl-10 pr-4 text-[10px] text-primary outline-none focus:border-primary w-48 transition-all" />
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-primary/5">
                                            <th className="px-6 py-4 text-[10px] text-slate-500 tracking-widest uppercase font-bold">Deal ID / CID</th>
                                            <th className="px-6 py-4 text-[10px] text-slate-500 tracking-widest uppercase font-bold">Data Type</th>
                                            <th className="px-6 py-4 text-[10px] text-slate-500 tracking-widest uppercase font-bold">Size</th>
                                            <th className="px-6 py-4 text-[10px] text-slate-500 tracking-widest uppercase font-bold">Status</th>
                                            <th className="px-6 py-4 text-[10px] text-slate-500 tracking-widest uppercase font-bold text-right">Expiration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-primary/5">
                                        {[
                                            { id: 'bafy...qlyi', type: 'ZK-PROOFS', size: '1.2 GB', status: 'ACTIVE', color: 'primary', exp: '24D' },
                                            { id: 'bafy...m8f2', type: 'AGENT_STATE', size: '450 KB', status: 'LOCKED', color: 'blue-500', exp: '142D' },
                                            { id: 'bafy...p0x1', type: 'STRATEGY_BLOB', size: '12 MB', status: 'REPLICATING', color: 'amber-500', exp: 'UNDERWAY' },
                                            { id: 'bafy...r8a9', type: 'TX_HISTORY', size: '8.4 GB', status: 'ACTIVE', color: 'primary', exp: '445D' },
                                            { id: 'bafy...z3k0', type: 'Neural_Weights', size: '542 MB', status: 'ACTIVE', color: 'primary', exp: '12D' },
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-primary/5 transition-colors group cursor-pointer">
                                                <td className="px-6 py-4 font-mono text-[11px] text-slate-400 group-hover:text-primary transition-colors">{row.id}</td>
                                                <td className="px-6 py-4 font-bold text-[10px] text-white tracking-widest">{row.type}</td>
                                                <td className="px-6 py-4 text-[10px] text-slate-400">{row.size}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border border-${row.color}/30 bg-${row.color}/10 text-${row.color} uppercase tracking-[0.1em]`}>{row.status}</span>
                                                </td>
                                                <td className="px-6 py-4 text-[10px] text-slate-400 text-right">{row.exp}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Storage Network Visual */}
                        <div className="space-y-6">
                            <div className="bg-surface/40 border border-primary/10 rounded-2xl p-6 neon-border">
                                <h3 className="text-sm font-bold text-white mb-6 tracking-widest uppercase">Network Health</h3>
                                <div className="space-y-6">
                                    {[
                                        { l: 'Miners Active', v: '2,941' },
                                        { l: 'Avg Sealing Time', v: '2.4H' },
                                        { l: 'Deal Success Rate', v: '99.98%' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center">
                                            <span className="text-[10px] text-slate-500 uppercase tracking-widest">{item.l}</span>
                                            <span className="text-xs font-bold text-white uppercase">{item.v}</span>
                                        </div>
                                    ))}
                                    <div className="h-2 w-full bg-black rounded-full overflow-hidden border border-primary/10">
                                        <div className="h-full bg-primary/40 w-full relative">
                                            <div className="absolute top-0 left-0 h-full bg-primary w-2/3 shadow-[0_0_10px_#39ff14]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-black/80 border border-primary/20 rounded-2xl p-6 relative overflow-hidden group neon-border">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="material-symbols-outlined text-primary text-xl">security</span>
                                    <h3 className="text-sm font-bold text-white tracking-widest uppercase">Recursive Proofs</h3>
                                </div>
                                <p className="text-[10px] text-slate-400 leading-relaxed mb-6 uppercase">
                                    All agent memory is verified using zero-knowledge proofs on the Filecoin network, ensuring compute integrity and data availability.
                                </p>
                                <div className="relative h-24 flex items-center justify-center gap-4">
                                    <div className="size-12 border-2 border-primary/30 rounded-full animate-spin border-t-primary"></div>
                                    <div className="size-12 border-2 border-primary/30 rounded-full animate-spin border-b-primary absolute rotate-45"></div>
                                    <div className="size-4 bg-primary rounded-full shadow-[0_0_15px_#39ff14]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
