import { web3Data } from '../data/content';

export default function Web3() {
    return (
        <section id="web3" className="py-24 px-6 border-t border-white/5 bg-[#050505]">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-block mb-6 p-4 rounded-full bg-[#10b981]/5 border border-[#10b981]/20">
                    <div className="w-16 h-16 rounded-full bg-[#10b981]/10 flex items-center justify-center">
                        <span className="text-2xl">🌐</span>
                    </div>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    {web3Data.title}
                </h2>
                <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed">
                    {web3Data.description}
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                    {web3Data.areas.map((area, idx) => (
                        <span 
                            key={idx} 
                            className="px-4 py-2 bg-[#121212] border border-white/5 text-slate-300 rounded-sm hover:bg-[#10b981]/10 hover:border-[#10b981]/30 hover:text-[#34d399] transition-all cursor-default"
                        >
                            {area}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}