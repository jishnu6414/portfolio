import { projects } from '../data/content';

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Things I've Built & Worked On</h2>
                <p className="text-slate-400 mb-16 max-w-2xl">A selection of financial technology, Web3, and software engineering projects.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <div key={idx} className="p-8 bg-[#121212] border border-white/5 rounded-sm hover:border-[#10b981]/30 transition-all">
                            <span className="text-xs font-mono text-[#34d399] px-2 py-1 bg-[#10b981]/10 rounded-sm mb-4 inline-block">
                                {project.category.toUpperCase()}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed min-h-[48px]">
                                {project.description}
                            </p>
                            
                            <div className="mb-6">
                                <h4 className="text-white text-sm font-semibold mb-2">My Contribution:</h4>
                                <p className="text-slate-400 text-sm">{project.contribution}</p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="text-xs text-slate-300 bg-white/5 px-2 py-1 rounded-sm">{tech}</span>
                                ))}
                            </div>
                            
                            <div className="flex gap-4">
                                <a href={project.liveLink} className="text-sm text-white hover:text-[#34d399] transition-colors border-b border-transparent hover:border-[#34d399]">View Project →</a>
                                <a href={project.githubLink} className="text-sm text-slate-500 hover:text-white transition-colors">GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}