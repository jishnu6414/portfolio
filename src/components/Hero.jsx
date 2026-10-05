import { personalInfo } from '../data/content';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
            {/* Dark minimal background effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#10b981]/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="max-w-4xl">
                    <p className="font-mono text-[#34d399] mb-4 tracking-wide text-sm md:text-base">
                        {personalInfo.positioning.toUpperCase()}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        {personalInfo.headline}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                        {personalInfo.supportingText}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 items-center">
                        <a href="#projects" className="px-8 py-3 bg-[#10b981] hover:bg-[#34d399] text-black font-semibold rounded-sm transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            Explore My Work
                        </a>
                        <div className="flex gap-4 ml-0 md:ml-4 mt-4 md:mt-0">
                            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 bg-white/5 border border-white/10 hover:text-[#34d399] hover:border-[#10b981]/30 transition-all rounded-sm text-white">LinkedIn</a>
                            <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer" className="px-4 py-2 bg-white/5 border border-white/10 hover:text-[#34d399] hover:border-[#10b981]/30 transition-all rounded-sm text-white">Twitter</a>
                            <a href={personalInfo.socials.telegram} target="_blank" rel="noreferrer" className="px-4 py-2 bg-white/5 border border-white/10 hover:text-[#34d399] hover:border-[#10b981]/30 transition-all rounded-sm text-white">Telegram</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}