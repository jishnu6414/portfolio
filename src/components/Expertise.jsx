import { expertise } from '../data/content';

export default function Expertise() {
    return (
        <section id="expertise" className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Expertise</h2>
                    <p className="text-slate-400 max-w-2xl">Bridging traditional financial markets with Web3 infrastructure and software engineering.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {expertise.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="group p-6 bg-[#121212] border border-white/5 rounded-sm hover:border-[#10b981]/50 hover:bg-[#10b981]/5 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-10 h-10 mb-4 rounded-sm bg-white/5 flex items-center justify-center group-hover:bg-[#10b981]/20 transition-colors">
                                <span className="text-[#34d399] font-mono text-sm">0{idx + 1}</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}