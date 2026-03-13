import Sidebar from "@/components/Sidebar";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Agents() {
    return (
        <div className="flex h-screen w-full bg-background-dark text-slate-100 overflow-hidden font-sans">
            <BackgroundEffects />
            <Sidebar />

            <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar relative z-10 bg-black/50">
                <header className="h-16 border-b border-border-mute flex items-center justify-between px-8 bg-black/50 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-primary/60 tracking-widest uppercase">Agent Profile & Identity</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center bg-surface/80 rounded-xl px-3 py-1.5 border border-primary/20">
                            <span className="material-symbols-outlined text-primary text-sm mr-2">account_balance_wallet</span>
                            <span className="font-mono text-xs text-primary uppercase">0x71C...3a4f</span>
                        </div>
                        <div className="size-8 rounded-full border border-primary/40 overflow-hidden ring-2 ring-primary/20">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnMGDw9hdtsd5fqTA4yPhxlxTVg63Hqd3HCrj9HPmk3z4pxmb-A3zG0MGQK6NyYwUaO35ElvpFq2mIJyYcblLP6pNsVjUGue7uumi6pxw7wJyCKDsl3VGgqLkld1yHqD-X_r2a3ib9JIagxSoMzKJJwf9MKY47eOiKyYYm_YORFfC4elYe6H7YV0S6c0VjvO4yzOwc3JIbMk-0nX0TC3_aMsc1RdjaU59n6M8SusAqMHWOcYrny9RghTIB9gEHvl0tD3_5h7IWX5vg" alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </header>

                <div className="p-8 space-y-6">
                    <section className="bg-surface/40 border border-primary/20 rounded-xl p-6 relative overflow-hidden neon-border">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 rounded-full"></div>
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    <div className="size-24 rounded-2xl bg-black border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdWu9-FuqiLV6aKcpPGIV3UBHFEoWDHKqBkJQZloMWAALwJp98exqyyNN1vygOVKg7SNdJ0EXoo7Tc8MYFu6S8p9AsXjMZ9FVABOwKlUvzBBM3V3Ytomwe4dvHIF4pSZboxRyxbeez11CXIkxdPEFjiUlW-N0wZINnWy-nIp4vBBHcYHuLMTaPCLoLJSARbtLo77nAR6Byuu_PhLEE59gRUZBV0PEf-ERLnpg9_j5QlCPPUbZcP9GdojDTRrrIggoL-CI1d1Wqenes" alt="Large Avatar" className="size-20" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 size-5 bg-primary rounded-full border-4 border-black pulse-green"></div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h1 className="text-4xl font-heading font-bold tracking-wide text-white glow-text uppercase">AGENT #A7F3D2</h1>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary border border-primary/30 uppercase tracking-widest font-mono">ERC-8004 Registry</span>
                                    </div>
                                    <p className="text-slate-400 mt-1 flex items-center gap-2 font-mono text-sm uppercase">
                                        <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                                        Status: <span className="text-primary">Active & Synced</span> • Last Heartbeat: 2m ago
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary font-bold text-sm transition-all flex items-center justify-center gap-2 font-mono uppercase">
                                    <span className="material-symbols-outlined text-lg">open_in_new</span>
                                    View on Explorer
                                </button>
                                <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-primary text-black font-black text-sm transition-all hover:brightness-110 flex items-center justify-center gap-2 font-mono uppercase">
                                    <span className="material-symbols-outlined text-lg">description</span>
                                    Export Manifest
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: 'Reputation Score', val: '847', sub: '/1000', detail: '+12 pts (30d)', isBar: true, progress: '84.7%' },
                            { label: 'Tasks Completed', val: '47', detail: 'Success Rate: 98.2%' },
                            { label: 'Date Registered', val: 'Oct 12, 2023', detail: 'Age: 142 days', isDate: true },
                            { label: 'Operator Wallet', val: '0x71C...3a4f', detail: 'MULTISIG', isTag: true },
                        ].map((stat, i) => (
                            <div key={i} className="bg-surface/40 border border-primary/10 p-5 rounded-xl neon-border">
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2 font-mono">{stat.label}</p>
                                <div className="flex items-end justify-between">
                                    <h3 className={`${stat.isDate ? 'text-xl' : stat.isTag ? 'text-lg' : 'text-3xl'} font-bold font-stats text-white uppercase`}>
                                        {stat.val}<span className="text-sm text-slate-600 ml-1">{stat.sub}</span>
                                    </h3>
                                    {!stat.isBar && <span className={`text-primary text-xs font-bold font-mono uppercase ${stat.isTag ? 'px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20' : ''}`}>{stat.detail}</span>}
                                </div>
                                {stat.isBar && (
                                    <>
                                        <span className="text-primary text-xs font-bold font-mono uppercase float-right">{stat.detail}</span>
                                        <div className="w-full bg-black h-1.5 mt-4 rounded-full overflow-hidden border border-primary/5">
                                            <div className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(57,255,20,0.5)]" style={{ width: stat.progress }}></div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-surface/40 border border-primary/10 rounded-xl overflow-hidden neon-border">
                                <div className="px-5 py-4 border-b border-primary/10 flex items-center justify-between bg-black/30">
                                    <h4 className="font-bold text-sm font-mono uppercase tracking-widest text-primary">Identity Registry</h4>
                                    <span className="material-symbols-outlined text-primary text-sm">database</span>
                                </div>
                                <div className="p-5 space-y-4">
                                    {[
                                        { l: 'DID Method', v: 'did:ethr:erc8004' },
                                        { l: 'Schema Version', v: 'v1.2.0' },
                                        { l: 'Auth Mechanism', v: 'Ed25519-Sig' },
                                        { l: 'Privacy Mode', v: 'ZKP-Enabled', highlighted: true },
                                    ].map((row, i) => (
                                        <div key={i} className={`flex justify-between items-center py-2 ${i !== 3 ? 'border-b border-primary/5' : ''}`}>
                                            <span className="text-xs text-slate-500 font-mono uppercase">{row.l}</span>
                                            <span className={`font-mono text-xs font-bold uppercase ${row.highlighted ? 'text-primary' : 'text-white'}`}>{row.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="bg-black border border-primary/20 rounded-xl overflow-hidden h-full flex flex-col neon-border">
                                <div className="px-5 py-4 border-b border-primary/20 flex items-center justify-between bg-surface-dark">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5 mr-4">
                                            <div className="size-2.5 rounded-full bg-red-500/30"></div>
                                            <div className="size-2.5 rounded-full bg-yellow-500/30"></div>
                                            <div className="size-2.5 rounded-full bg-primary/30"></div>
                                        </div>
                                        <span className="font-mono text-xs text-slate-500 tracking-wider uppercase">agent.json</span>
                                    </div>
                                    <button className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors text-lg">content_copy</button>
                                </div>
                                <div className="p-6 font-mono text-xs leading-relaxed overflow-y-auto uppercase">
                                    <pre className="text-primary/70"><code>{`{
  "id": "did:ethr:0x4f...a7f3d2",
  "version": "ERC-8004",
  "capabilities": [
    {
      "type": "liquidity-provisioning",
      "permissions": ["swap", "add_liquidity"],
      "network": "ethereum-mainnet"
    },
    {
      "type": "cross-chain-arbitrage",
      "bridge": "layerzero"
    }
  ],
  "trust_anchor": {
    "world_id": "orb_verified_1102",
    "storage": "filecoin-deal-882"
  },
  "governance": {
    "autonomous_threshold": 0.85
  }
}`}</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
