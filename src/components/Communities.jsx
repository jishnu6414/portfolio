import { communities, timeline } from '../data/content';

export default function Communities() {
    return (
        <section id="communities" className="py-24 px-6 border-t border-white/5 bg-[#050505]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                
                {/* Journey Timeline */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-8">The Journey</h2>
                    <div className="relative border-l border-[#10b981]/30 ml-3 space-y-8 py-4">
                        {timeline.map((step, idx) => (
                            <div key={idx} className="relative pl-8 group">
                                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#10b981] group-hover:shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-shadow"></div>
                                <p className="text-lg text-slate-300 font-medium group-hover:text-white transition-colors">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Communities Ecosystem */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-8">Communities & Ecosystems</h2>
                    <p className="text-slate-400 mb-8">Actively participating, learning, and collaborating within these spaces.</p>
                    <div className="flex flex-wrap gap-3">
                        {communities.map((community, idx) => (
                            <span 
                                key={idx} 
                                className="px-4 py-2 bg-[#121212] border border-white/5 rounded-sm text-sm text-slate-300 hover:border-[#10b981]/50 transition-colors"
                            >
                                {community}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}