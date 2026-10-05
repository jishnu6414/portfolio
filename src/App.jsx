import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Web3 from './components/Web3';
import MarketIntelligence from './components/MarketIntelligence';
import Communities from './components/Communities';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 selection:bg-[#10b981]/30 selection:text-[#34d399]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <MarketIntelligence />
        <Experience />
        <Projects />
        <Web3 />
        <Communities />
      </main>
      
      {/* Simple Footer */}
      <footer className="py-8 text-center border-t border-white/5 bg-[#050505] text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} JISHNU M. Digital Finance × Web3.</p>
      </footer>
    </div>
  );
}

export default App;