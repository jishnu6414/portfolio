export default function MarketIntelligence() {
    return (
        <section id="research" className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Market Intelligence</h2>
                    <p className="text-slate-400 max-w-2xl">A terminal-inspired overview of my analytical focus areas across traditional and decentralized markets.</p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Forex Panel */}
                    <div className="bg-[#050505] border border-[#10b981]/20 rounded-sm p-6 shadow-[0_0_30px_rgba(16,185,129,0.03)]">
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                            <h3 className="text-[#34d399] font-mono text-sm tracking-wider">FX_MARKETS</h3>
                            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                        </div>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li className="flex justify-between"><span>Technical Analysis</span> <span className="text-slate-500">Active</span></li>
                            <li className="flex justify-between"><span>Fundamental Analysis</span> <span className="text-slate-500">Active</span></li>
                            <li className="flex justify-between"><span>Market Structure</span> <span className="text-slate-500">Active</span></li>
                            <li className="flex justify-between"><span>Risk Management</span> <span className="text-slate-500">Active</span></li>
                        </ul>
                    </div>

                    {/* Crypto Panel */}
                    <div className="bg-[#050505] border border-[#10b981]/20 rounded-sm p-6 shadow-[0_0_30px_rgba(16,185,129,0.03)]">
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                            <h3 className="text-[#34d399] font-mono text-sm tracking-wider">DIGITAL_ASSETS</h3>
                            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                        </div>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li className="flex justify-between"><span>Market Structure</span> <span className="text-slate-500">Active</span></li>
                            <li className="flex justify-between"><span>On-chain Research</span> <span className="text-slate-500">Active</span></li>
                            <li className="flex justify-between"><span>Tokenomics</span> <span className="text-slate-500">Active</span></li>
                            <li className="flex justify-between"><span>Risk Management</span> <span className="text-slate-500">Active</span></li>
                        </ul>
                    </div>

                    {/* Web3 Panel */}
                    <div className="bg-[#050505] border border-[#10b981]/20 rounded-sm p-6 shadow-[0_0_30px_rgba(16,185,129,0.03)]">
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                            <h3 className="text-[#34d399] font-mono text-sm tracking-wider">WEB3_INFRA</h3>
                            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                        </div>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li className="flex justify-between"><span>DeFi Protocols</span> <span className="text-slate-500">Active</span></li>
                            <li className="flex justify-between"><span>Smart Contracts</span> <span className="text-slate-500">Active</span></li>
                            <li className="flex justify-between"><span>Builders & Hackathons</span> <span className="text-slate-500">Active</span></li>
                            <li className="flex justify-between"><span>Infrastructure</span> <span className="text-slate-500">Active</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}