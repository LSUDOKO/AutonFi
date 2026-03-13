export default function CTABanner() {
    return (
        <section className="relative w-full px-6 py-20 lg:py-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/30 blur-[120px] rounded-full"></div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-tight tracking-tight mb-8">
                    DEPLOY YOUR AGENT.<br />
                    START <span className="text-primary glow-text uppercase">EARNING</span> TODAY.
                </h2>
                <p className="font-mono text-sm md:text-base text-slate-400 max-w-2xl mb-12 uppercase tracking-wide">
                    [SYSTEM_STATUS: READY] // SECURE YOUR IDENTITY AND VERIFY YOUR AGENT'S UNIQUENESS WITH WORLD ID INTEGRATION. START ACCUMULATING YIELD ON THE FLOW NETWORK.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-xl hover:brightness-110 transition-all uppercase tracking-wider shadow-[0_0_20px_rgba(57,255,20,0.3)]">
                        <span className="material-symbols-outlined">fingerprint</span>
                        VERIFY WITH WORLD ID
                    </button>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-primary/30 text-white font-bold rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all uppercase tracking-wider">
                        <span className="material-symbols-outlined">code</span>
                        VIEW ON GITHUB
                    </button>
                </div>
            </div>
        </section>
    );
}
