import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 backdrop-blur-xl bg-black/40">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-primary text-3xl font-heading tracking-wider flex items-center gap-2">
                        <span className="material-symbols-outlined">bolt</span>
                        AUTONFI
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-tight">
                    <Link href="/#why-us" className="hover:text-primary transition-colors uppercase">Why Us</Link>
                    <Link href="/#how-it-works" className="hover:text-primary transition-colors uppercase">How it Works</Link>
                    <Link href="/dashboard" className="hover:text-primary transition-colors uppercase">Dashboard</Link>
                    <Link href="/governance" className="hover:text-primary transition-colors uppercase">Governance</Link>
                    <Link href="/docs" className="hover:text-primary transition-colors uppercase">Docs</Link>
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-mono hover:bg-white/10 transition-all">
                        Wallet
                    </button>
                    <Link href="/dashboard" className="px-6 py-2 rounded-xl bg-primary text-black text-sm font-bold tracking-tight hover:brightness-110 transition-all border-glow">
                        LAUNCH APP
                    </Link>
                </div>
            </div>
        </nav>
    );
}
