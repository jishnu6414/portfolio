import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const links = ["About", "Expertise", "Experience", "Projects", "Web3"];

    return (
        <nav className="fixed w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-4">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-xl font-bold tracking-tighter text-white">
                    {personalInfo.shortName}<span className="text-[#10b981]">.</span>
                </a>
                
                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                    {links.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#34d399] transition-colors">{link}</a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 py-4 px-6 flex flex-col gap-4">
                    {links.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-[#34d399] text-lg">{link}</a>
                    ))}
                </div>
            )}
        </nav>
    );
}