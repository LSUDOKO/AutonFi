import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="w-[240px] flex-shrink-0 border-r border-border-mute bg-background-dark flex flex-col z-20">
            <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="size-8 bg-primary rounded flex items-center justify-center">
                            <span className="material-symbols-outlined text-black font-bold">bolt</span>
                        </div>
                        <h1 className="font-heading text-primary tracking-wide text-2xl">AUTONFI</h1>
                    </Link>
                </div>

                <div className="mb-8 p-3 bg-primary/5 border border-primary/20 rounded-lg flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-sm">verified_user</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-primary">Identity</span>
                        <span className="text-xs font-mono">HUMAN_VERIFIED</span>
                    </div>
                </div>

                <nav className="flex-1 space-y-1">
                    <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/5 text-slate-400 hover:text-primary transition-all group">
                        <span className="material-symbols-outlined text-xl">grid_view</span>
                        <span className="text-sm font-medium">Overview</span>
                    </Link>
                    <Link href="/agents" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/5 text-slate-400 hover:text-primary transition-all group">
                        <span className="material-symbols-outlined text-xl">smart_toy</span>
                        <span className="text-sm font-medium">My Agent</span>
                    </Link>
                    <Link href="/strategy" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/5 text-slate-400 hover:text-primary transition-all group">
                        <span className="material-symbols-outlined text-xl">ads_click</span>
                        <span className="text-sm font-medium">Strategy</span>
                    </Link>
                    <Link href="/storage" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/5 text-slate-400 hover:text-primary transition-all group">
                        <span className="material-symbols-outlined text-xl">database</span>
                        <span className="text-sm font-medium">Filecoin Storage</span>
                    </Link>
                    <Link href="/governance" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/5 text-slate-400 hover:text-primary transition-all group">
                        <span className="material-symbols-outlined text-xl">gavel</span>
                        <span className="text-sm font-medium">Governance</span>
                    </Link>
                </nav>

                <div className="mt-auto space-y-4 pt-4 border-t border-border-mute">
                    <button className="w-full flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 py-2.5 rounded-lg transition-all">
                        <span className="material-symbols-outlined text-xl">cancel</span>
                        <span className="text-xs font-bold uppercase tracking-wider">Emergency Stop</span>
                    </button>
                    <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-sm font-medium">Settings</span>
                    </Link>
                </div>
            </div>
        </aside>
    );
}
