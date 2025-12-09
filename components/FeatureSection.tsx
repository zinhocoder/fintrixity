"use client";

interface FeatureSectionProps {
  activeSection: number;
  setActiveSection: (section: number) => void;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

export default function FeatureSection({ activeSection, setActiveSection, scrollRef }: FeatureSectionProps) {
  const features = [
    {
      title: "Real-Time Analytics",
      description: "Monitor your financial data in real-time with advanced analytics and insights.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Smart Predictions",
      description: "AI-powered forecasting helps you make informed decisions about your finances.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Secure & Private",
      description: "Bank-level encryption ensures your financial data stays safe and confidential.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your specific financial needs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: "Automated Reports",
      description: "Generate comprehensive reports automatically and share them with your team.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Multi-Platform Sync",
      description: "Access your data from anywhere with seamless synchronization across devices.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] h-full flex flex-col">
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-0">
        <img
          src="/7.png"
          alt="Background"
          className="w-full h-full object-cover"
          style={{ display: 'block' }}
        />
      </div>

      <header className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-12 py-4 md:py-8 gap-4 md:gap-0">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="/icon.png" alt="Fintrixity" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-white text-lg md:text-xl font-semibold">Fintrixity</span>
        </div>

        <nav className="flex flex-wrap items-center gap-1 md:gap-2 bg-white/10 backdrop-blur-sm px-2 md:px-4 py-2 rounded-full w-full md:w-auto justify-center md:justify-start">
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

        <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-start">
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

      <div ref={scrollRef} className="relative z-20 px-4 md:px-12 py-6 md:py-12 flex-1 overflow-y-auto scrollbar-hide">
        <div className="mb-8 md:mb-16">
          <p className="text-white/80 text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2 font-medium">
            Powerful Features → 
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
            Everything You Need To Succeed
          </h1>
          
          <p className="text-white/70 text-base md:text-xl max-w-3xl leading-relaxed">
            Discover powerful tools and features designed to transform how you manage and analyze your financial data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-8 hover:bg-white/10 transition-all duration-300 hover:border-[#FF6B35]/50 hover:shadow-lg hover:shadow-[#FF6B35]/20"
            >
              <div className="mb-4 md:mb-6 text-[#FF6B35] group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#FF6B35] transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B35]/0 to-[#FF6B35]/0 group-hover:from-[#FF6B35]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
}

