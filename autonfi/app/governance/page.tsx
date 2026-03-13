import Sidebar from "@/components/Sidebar";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Governance() {
    return (
        <div className="flex h-screen w-full bg-background-dark text-slate-100 overflow-hidden font-sans uppercase font-mono">
            <BackgroundEffects />
            <Sidebar />

            <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar relative z-10 bg-black/50">
                <header className="h-16 border-b border-border-mute flex items-center justify-between px-8 bg-black/50 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-primary/60 tracking-widest uppercase">Protocol Governance & Proposals</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-bold tracking-widest">
                            GVRN TOKEN: $4.21
                        </div>
                        <button className="px-6 py-2 rounded-xl bg-primary text-black text-xs font-black hover:brightness-110 transition-all border-glow uppercase">
                            Submit Proposal
                        </button>
                    </div>
                </header>

                <div className="p-8 space-y-8">
                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl border border-primary/10 bg-surface/40 neon-border">
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Total Value Locked</p>
                            <h3 className="text-3xl font-stats text-white font-bold">$124.5M</h3>
                            <p className="text-[10px] text-primary mt-2">+12.4% THIS MONTH</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-primary/10 bg-surface/40 neon-border">
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Active Voters</p>
                            <h3 className="text-3xl font-stats text-white font-bold">12,402</h3>
                            <p className="text-[10px] text-slate-500 mt-2">QUORUM: 15%</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-primary/10 bg-surface/40 neon-border grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Treasury</p>
                                <p className="text-lg font-stats text-white font-bold">$12.1M</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Staked</p>
                                <p className="text-lg font-stats text-primary font-bold">84.2%</p>
                            </div>
                        </div>
                    </div>

                    {/* Active Proposals */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-heading text-white tracking-widest uppercase">Active Proposals</h2>
                        {[
                            { id: 'AFP-042', title: 'UPGRADE FHE CIRCUIT TO V2.4', votes: '12.4M', status: 'VOTING', progress: '85%', color: 'primary' },
                            { id: 'AFP-041', title: 'ADOPT ARBITRUM AS CANONICAL CHAIN', votes: '8.2M', status: 'PENDING', progress: '62%', color: 'amber-500' },
                            { id: 'AFP-040', title: 'ADJUST TREASURY ALLOCATION (YIELD BOOST)', votes: '45.1M', status: 'EXECUTED', progress: '100%', color: 'blue-500' },
                        ].map((prop, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-surface/40 border border-primary/10 hover:border-primary/30 transition-all group cursor-pointer neon-border relative overflow-hidden">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                                    <div className="flex items-start gap-4">
                                        <span className="text-primary font-mono font-bold">{prop.id}</span>
                                        <div>
                                            <h4 className="text-white font-bold tracking-tight mb-1">{prop.title}</h4>
                                            <p className="text-[10px] text-slate-500 uppercase">Proposer: 0x4f...a7f3 | Ends in 2D 14H</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <p className="text-[10px] text-slate-500 uppercase mb-1">Total Votes</p>
                                            <p className="font-stats font-bold text-white uppercase">{prop.votes} GVRN</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full border border-${prop.color}/30 text-${prop.color} text-[10px] font-black uppercase tracking-widest bg-${prop.color}/10`}>
                                            {prop.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-black rounded-full overflow-hidden border border-primary/5">
                                    <div className={`h-full bg-${prop.color} shadow-[0_0_10px_#39ff14]`} style={{ width: prop.progress }}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Voted History Placeholder */}
                    <div className="p-6 rounded-2xl border border-primary/10 bg-black/40 flex items-center justify-center opacity-50 border-dashed">
                        <p className="text-xs text-slate-500 tracking-widest uppercase">Connect wallet to see your voting history</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
