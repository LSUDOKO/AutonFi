export default function BackgroundEffects() {
    return (
        <>
            <div className="fixed inset-0 grid-bg z-0 opacity-20"></div>
            <div className="fixed inset-0 noise-overlay z-5"></div>
            <div className="fixed inset-0 scanlines z-10 opacity-30"></div>
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] glow-radial z-0 opacity-50"></div>
        </>
    );
}
