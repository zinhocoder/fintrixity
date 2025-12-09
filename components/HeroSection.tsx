"use client";

interface HeroSectionProps {
  activeSection: number;
  setActiveSection: (section: number) => void;
}

export default function HeroSection({ activeSection, setActiveSection }: HeroSectionProps) {
  return (
    <section className="relative overflow-visible bg-[#0A0A0A]" style={{ marginBottom: '0', paddingBottom: '0', display: 'block', position: 'relative' }}>
      <div className="absolute top-0 left-0 md:left-20 right-0 pointer-events-none z-0">
        <img
          src="/Group 1.png"
          alt="Orange glow effect"
          className="w-full h-auto"
          style={{ display: 'block', objectFit: 'none', objectPosition: 'top center', width: '100%', height: 'auto' }}
        />
      </div>

      <header className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-12 py-4 md:py-8 gap-4 md:gap-0">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="/icon.png" alt="Fintrixity" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-white text-lg md:text-xl font-semibold">Fintrixity</span>
        </div>

        <nav className="flex flex-wrap items-center gap-1 md:gap-2 bg-white/10 backdrop-blur-sm px-2 md:px-4 py-2 rounded-full w-full md:w-auto justify-center md:justify-start order-3 md:order-none">
          <button 
            onClick={() => setActiveSection(0)}
            className={`px-2 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
              activeSection === 0 
                ? 'text-white bg-[#FF6B35]' 
                : 'text-white hover:text-[#FF6B35]'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => setActiveSection(1)}
            className={`px-2 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
              activeSection === 1 
                ? 'text-white bg-[#FF6B35]' 
                : 'text-white hover:text-[#FF6B35]'
            }`}
          >
            Feature
          </button>
          <button 
            onClick={() => setActiveSection(2)}
            className={`px-2 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
              activeSection === 2 
                ? 'text-white bg-[#FF6B35]' 
                : 'text-white hover:text-[#FF6B35]'
            }`}
          >
            Pricing
          </button>
          <button 
            onClick={() => setActiveSection(3)}
            className={`px-2 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
              activeSection === 3 
                ? 'text-white bg-[#FF6B35]' 
                : 'text-white hover:text-[#FF6B35]'
            }`}
          >
            FAQ
          </button>
        </nav>

        <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-start order-2 md:order-none">
          <a href="#" className="text-white hover:text-[#FF6B35] transition-colors text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2">
            <img src="/discico.png" alt="Discord" className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Join in Discord</span>
          </a>
          <button className="relative bg-[#FF6B35] text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium hover:bg-[#E55A2B] transition-colors overflow-hidden group shadow-lg shadow-[#FF6B35]/50">
            <span className="relative z-10">Sign up</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <div className="absolute -inset-1 bg-[#FF6B35] opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
        </div>
      </header>

      <div className="relative z-20 px-4 md:px-12 pt-8 md:pt-20" style={{ paddingBottom: '0', marginBottom: '0' }}>
        <p className="text-white/80 text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2 font-medium">
          Finance Solution in One Platform →
        </p>
        
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[1.1] max-w-5xl tracking-tight"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Unlock The Power <br/>
          Of Finance Analytics
        </h1>
        
        <p className="text-white/70 text-base md:text-xl mb-6 md:mb-10 max-w-3xl leading-relaxed">
          Gain deep insights into your financial data and make smarter decisions. <br/>
          Turn numbers into strategies that drive growth and efficiency.
        </p>
        
        <button className="bg-[#FF6B35] text-white px-6 md:px-10 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-[#E55A2B] transition-colors shadow-lg shadow-[#FF6B35]/30 mb-0" style={{ marginBottom: '0' }}>
          Let&apos;s Get Started
        </button>
      </div>
    </section>
  );
}

