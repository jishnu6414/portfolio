import { experience } from '../data/content';

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 border-t border-white/5 bg-[#050505]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 flex items-center gap-4">
                    <span className="w-12 h-[2px] bg-[#10b981]"></span>
                    Experience
                </h2>
                
                <div className="space-y-12 border-l border-white/10 ml-4 md:ml-6 pl-8 relative">
                    {experience.map((job, idx) => (
                        <div key={idx} className="relative group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#10b981] group-hover:bg-[#10b981] transition-colors shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
                            
                            <span className="text-[#34d399] font-mono text-sm block mb-2">{job.period}</span>
                            <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                            <h4 className="text-lg text-slate-400 mb-4">{job.company}</h4>
                            <p className="text-slate-400 leading-relaxed max-w-2xl">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}