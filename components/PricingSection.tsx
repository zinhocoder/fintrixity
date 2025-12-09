"use client";

interface PricingSectionProps {
  activeSection: number;
  setActiveSection: (section: number) => void;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

export default function PricingSection({ activeSection, setActiveSection, scrollRef }: PricingSectionProps) {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals getting started",
      features: [
        "Real-time analytics",
        "Basic dashboards",
        "5 data sources",
        "Email support",
        "Monthly reports",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Starter",
        "Advanced analytics",
        "Unlimited data sources",
        "Priority support",
        "Custom dashboards",
        "AI predictions",
        "Team collaboration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support",
        "Advanced security",
        "SLA guarantee",
        "Custom training",
      ],
      popular: false,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] h-full flex flex-col">
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-0">
        <img
          src="/13.png"
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

      <div ref={scrollRef} className="relative z-20 px-4 md:px-12 py-6 md:py-12 flex-1 overflow-y-auto scrollbar-hide flex md:items-center md:justify-center">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <p className="text-white/80 text-xs md:text-sm mb-4 md:mb-6 flex items-center justify-center gap-2 font-medium">
              Choose Your Plan → 
            </p>
            
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Simple, Transparent Pricing
            </h1>
            
            <p className="text-white/70 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
              Select the perfect plan for your needs. All plans include our core features with flexible options to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative group bg-white/5 backdrop-blur-sm border rounded-2xl p-4 md:p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'border-[#FF6B35] bg-white/10 shadow-lg shadow-[#FF6B35]/20 md:scale-105'
                    : 'border-white/10 hover:border-[#FF6B35]/50 hover:bg-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FF6B35] text-white text-xs font-semibold px-3 md:px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/70 text-xs md:text-sm mb-4 md:mb-6">{plan.description}</p>

                <div className="mb-6 md:mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-5xl font-bold text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-white/70 text-sm md:text-lg">{plan.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 md:gap-3">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-[#FF6B35] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white/80 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-[#FF6B35] text-white hover:bg-[#E55A2B] shadow-lg shadow-[#FF6B35]/30'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-[#FF6B35]/50'
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B35]/0 to-[#FF6B35]/0 group-hover:from-[#FF6B35]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

