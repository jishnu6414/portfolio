import { personalInfo } from '../data/content';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 border-t border-white/5 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="w-12 h-[2px] bg-[#10b981]"></span>
                    About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                        {personalInfo.about.slice(0, 3).map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                        {personalInfo.about.slice(3).map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}