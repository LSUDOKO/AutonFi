export default function Footer() {
    return (
        <footer className="bg-black py-10 border-t border-primary/10 relative z-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-600 text-xs font-mono">© 2024 AUTONFI PROTOCOL. ALL SYSTEMS OPERATIONAL.</p>
                <div className="flex gap-6 text-slate-500 font-mono text-[10px] uppercase tracking-widest">
                    <a className="hover:text-primary transition-colors" href="#">Twitter</a>
                    <a className="hover:text-primary transition-colors" href="#">Discord</a>
                    <a className="hover:text-primary transition-colors" href="#">Github</a>
                </div>
            </div>
        </footer>
    );
}
