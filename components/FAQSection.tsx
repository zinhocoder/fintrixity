"use client";
import { useState } from "react";

interface FAQSectionProps {
  activeSection: number;
  setActiveSection: (section: number) => void;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

export default function FAQSection({ activeSection, setActiveSection, scrollRef }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Fintrixity and how does it work?",
      answer: "Fintrixity is a comprehensive financial analytics platform that helps you gain deep insights into your financial data. It connects to multiple data sources, analyzes your information in real-time, and provides actionable insights through customizable dashboards and AI-powered predictions.",
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use bank-level encryption to protect your data. All information is encrypted in transit and at rest. We follow industry best practices and comply with major security standards to ensure your financial data remains confidential and secure.",
    },
    {
      question: "Can I integrate Fintrixity with my existing tools?",
      answer: "Yes! Fintrixity supports integration with a wide range of financial tools and platforms. Our Professional and Enterprise plans include custom integrations, and we offer APIs for advanced users who want to build their own connections.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "Support varies by plan. Starter includes email support, Professional includes priority support, and Enterprise includes 24/7 phone support with a dedicated account manager. All plans include access to our knowledge base and community forums.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. When you cancel, you&apos;ll continue to have access to your plan features until the end of your current billing period.",
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 14-day free trial for all plans. No credit card required. You&apos;ll have full access to all features of your chosen plan during the trial period, so you can explore everything Fintrixity has to offer.",
    },
    {
      question: "How often is my data updated?",
      answer: "Data updates depend on your plan and data sources. Real-time analytics are available on all plans, with Professional and Enterprise plans offering more frequent updates and custom sync schedules. Most integrations update within minutes of changes.",
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "If you approach your plan limits, we&apos;ll notify you in advance. You can either upgrade to a higher plan or purchase additional capacity. We&apos;ll work with you to find the best solution that fits your needs without disrupting your workflow.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] h-full flex flex-col">
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-0">
        <img
          src="/6.png"
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

      <div ref={scrollRef} className="relative z-20 px-4 md:px-12 py-6 md:py-12 flex-1 overflow-y-auto scrollbar-hide flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8 md:mb-16">
            <p className="text-white/80 text-xs md:text-sm mb-4 md:mb-6 flex items-center justify-center gap-2 font-medium">
              Frequently Asked Questions → 
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
              Got Questions?
            </h1>
            
            <p className="text-white/70 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about Fintrixity. Can&apos;t find what you&apos;re looking for? Contact our support team.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#FF6B35]/50 hover:bg-white/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-4 md:px-8 py-4 md:py-6 flex items-center justify-between text-left group"
                >
                  <h3 className="text-base md:text-xl font-semibold text-white pr-4 md:pr-8 group-hover:text-[#FF6B35] transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 md:w-6 md:h-6 text-[#FF6B35] transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 md:px-8 pb-4 md:pb-6">
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-white/70 mb-4 md:mb-6 text-sm md:text-base">
              Still have questions? We&apos;re here to help.
            </p>
            <button className="bg-[#FF6B35] text-white px-6 md:px-10 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-[#E55A2B] transition-colors shadow-lg shadow-[#FF6B35]/30">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

