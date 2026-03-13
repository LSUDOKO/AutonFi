import Sidebar from "@/components/Sidebar";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Dashboard() {
    return (
        <div className="flex h-screen w-full bg-background-dark text-slate-100 overflow-hidden font-sans">
            <BackgroundEffects />
            <Sidebar />

            <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar relative z-10 bg-black/50">
                {/* Header Bar */}
                <header className="h-16 border-b border-border-mute flex items-center justify-between px-8 bg-black/50 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-primary/60 tracking-widest uppercase">System Control Center</span>
                        <div className="h-1 w-24 bg-border-mute rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-2/3 shadow-[0_0_8px_#39ff14]"></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="size-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#39ff14]"></div>
                            <span className="text-xs font-mono text-primary uppercase">Mainnet v2.4 Active</span>
                        </div>
                        <span className="text-xs font-mono text-slate-500">2024-05-24 14:32:01 UTC</span>
                    </div>
                </header>

                <div className="p-8 space-y-6">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: 'Portfolio Value', val: '$12,450.00', sub: '+5.2%', detail: 'ACROSS 8 CHAINS' },
                            { label: 'Agent Status', val: 'RUNNING', sub: 'SYNCING', detail: 'UPTIME: 142H 12M', isImpact: true },
                            { label: 'Active Tasks', val: '47', sub: '/ 500 DAILY', detail: '98.2% SUCCESS RATE' },
                            { label: 'Memory Logs', val: '23', sub: 'GB STORED', detail: 'CID: bafybeig...qlyi' },
                        ].map((card, i) => (
                            <div key={i} className="p-5 rounded-xl border border-border-mute bg-surface/40 terminal-glow flex flex-col gap-1 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">{card.label}</span>
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-2xl font-stats text-primary font-bold ${card.isImpact ? 'tracking-widest' : ''}`}>{card.val}</span>
                                    <span className="text-xs text-primary/70 font-mono">{card.sub}</span>
                                </div>
                                <div className="mt-2 text-[10px] font-mono text-slate-600 uppercase">{card.detail}</div>
                            </div>
                        ))}
                    </div>

                    {/* Chart & Activity */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 p-6 rounded-xl border border-border-mute bg-surface/40 flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h3 className="font-mono text-sm text-white tracking-wide uppercase">Portfolio Performance</h3>
                                    <p className="text-xs font-mono text-slate-500 uppercase">Aggregated real-time metrics</p>
                                </div>
                                <div className="flex gap-2 bg-black p-1 rounded-lg">
                                    <button className="px-3 py-1 text-[10px] font-mono bg-primary/20 text-primary rounded">1H</button>
                                    <button className="px-3 py-1 text-[10px] font-mono text-slate-500 uppercase">1D</button>
                                    <button className="px-3 py-1 text-[10px] font-mono text-slate-500 uppercase">1W</button>
                                </div>
                            </div>
                            <div className="h-64 w-full relative">
                                <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 150">
                                    <defs>
                                        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#39ff14" stopOpacity="0.2"></stop>
                                            <stop offset="100%" stopColor="#39ff14" stopOpacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path d="M0 110 Q50 80 100 90 T200 60 T300 40 T400 70 T500 20 V150 H0 Z" fill="url(#chartGradient)"></path>
                                    <path d="M0 110 Q50 80 100 90 T200 60 T300 40 T400 70 T500 20" stroke="#39ff14" strokeLinecap="round" strokeWidth="2.5"></path>
                                </svg>
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30 text-[10px] font-mono text-slate-400 py-1 uppercase">
                                    <span>15k</span>
                                    <span>10k</span>
                                    <span>5k</span>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-border-mute bg-surface/40 flex flex-col gap-4">
                            <h3 className="font-mono text-sm text-white tracking-wide uppercase">Agent Activity Feed</h3>
                            <div className="space-y-4">
                                {[
                                    { type: 'EXECUTE', time: '2M AGO', title: 'Trade #821: Buy 0.4 ETH', sub: 'TX: 0x82f...a1d3', icon: 'payments', color: 'primary' },
                                    { type: 'VERIFY', time: '12M AGO', title: 'ZK-Proof for Epoch #142', sub: 'PROVER: Groth16', icon: 'security', color: 'blue-500' },
                                    { type: 'PLAN', time: '25M AGO', title: 'Rebalance Liquidity Pool', sub: 'PENDING APPROVAL', icon: 'event_note', color: 'amber-500' },
                                ].map((act, i) => (
                                    <div key={i} className="flex gap-4 p-3 rounded-lg border border-border-mute bg-black/30 hover:bg-primary/5 transition-all cursor-pointer group">
                                        <div className={`size-10 rounded bg-${act.color}/10 flex items-center justify-center text-${act.color} border border-${act.color}/20`}>
                                            <span className="material-symbols-outlined text-xl">{act.icon}</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className={`text-[10px] font-mono text-${act.color} bg-${act.color}/10 px-1.5 py-0.5 rounded uppercase`}>{act.type}</span>
                                                <span className="text-[10px] font-mono text-slate-500 uppercase">{act.time}</span>
                                            </div>
                                            <p className="text-xs font-medium text-slate-200">{act.title}</p>
                                            <p className="text-[10px] font-mono text-slate-500 uppercase">{act.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="mt-auto w-full py-2 border border-border-mute text-[10px] font-mono text-slate-500 hover:text-primary transition-colors uppercase">VIEW ALL HISTORY</button>
                        </div>
                    </div>

                    {/* Logs Terminal */}
                    <div className="rounded-xl border border-border-mute bg-black/80 flex flex-col h-80 relative overflow-hidden group">
                        <div className="flex items-center justify-between px-4 py-3 bg-surface-dark border-b border-border-mute">
                            <div className="flex items-center gap-2">
                                <div className="size-2 bg-red-500 rounded-full"></div>
                                <div className="size-2 bg-amber-500 rounded-full"></div>
                                <div className="size-2 bg-green-500 rounded-full"></div>
                                <span className="ml-3 text-[10px] font-mono text-slate-400 tracking-widest uppercase">Live Execution Logs</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-mono text-primary animate-pulse tracking-widest uppercase">● STREAMING</span>
                                <span className="material-symbols-outlined text-sm text-slate-500 cursor-pointer">download</span>
                            </div>
                        </div>
                        <div className="flex-1 p-4 font-mono text-[11px] leading-relaxed overflow-y-auto space-y-1 text-slate-400 scrollbar-hide uppercase">
                            <p><span className="text-slate-600">[14:31:05]</span> <span className="text-primary">INFO</span> Initializing cryptographic context...</p>
                            <p><span className="text-slate-600">[14:31:06]</span> <span className="text-primary">INFO</span> FHE circuit loaded successfully [depth: 12].</p>
                            <p><span className="text-slate-600">[14:31:12]</span> <span className="text-blue-400">AUTH</span> Session handshake verified via decentralized identity hub.</p>
                            <p><span className="text-slate-600">[14:31:15]</span> <span className="text-primary">INFO</span> Syncing global price feed (Chainlink/Pyth)...</p>
                            <p><span className="text-slate-600">[14:31:22]</span> <span className="text-primary">INFO</span> ETH/USD: 3,421.12 | WBTC/USD: 64,129.50</p>
                            <p><span className="text-slate-600">[14:31:30]</span> <span className="text-amber-400">WARN</span> Liquidity depth below threshold on Uniswap v3 Pool #81.</p>
                            <p><span className="text-slate-600">[14:31:45]</span> <span className="text-primary">INFO</span> Running optimization pass for yield strategy alpha-7.</p>
                            <p><span className="text-slate-600">[14:31:58]</span> <span className="text-green-400">EXEC</span> Rebalance order dispatched to aggregator [ID: 9912].</p>
                            <p><span className="text-slate-600">[14:32:01]</span> <span className="text-slate-300">SYSTEM</span> Heartbeat signal sent to watchdog service.</p>
                            <p className="animate-pulse"><span className="text-slate-600">[14:32:05]</span> <span className="text-primary">INFO</span> Generating recursive SNARK for state transition..._</p>
                        </div>
                        <div className="absolute bottom-2 right-4 text-[10px] font-mono text-primary/30 pointer-events-none uppercase">Terminal UI v0.9.4</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
