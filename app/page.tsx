"use client";
import { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import DashboardSection from "@/components/DashboardSection";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const featureSectionRef = useRef<HTMLDivElement>(null);
  const pricingSectionRef = useRef<HTMLDivElement>(null);
  const faqSectionRef = useRef<HTMLDivElement>(null);
  const isScrollingHorizontal = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollingHorizontal.current) return;

      const delta = e.deltaY;
      const homeSection = homeSectionRef.current;

      if (activeSection === 0 && homeSection) {
        const { scrollTop, scrollHeight, clientHeight } = homeSection;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
        const isAtTop = scrollTop <= 10;

        if (delta > 0) {
          if (isAtBottom) {
            e.preventDefault();
            isScrollingHorizontal.current = true;
            setActiveSection(1);
            setTimeout(() => {
              isScrollingHorizontal.current = false;
            }, 800);
          }
        }
        else if (delta < 0) {
          if (isAtTop) {
          }
        }
      } else if (activeSection === 1) {
        const featureSection = featureSectionRef.current;
        if (featureSection) {
          const { scrollTop, scrollHeight, clientHeight } = featureSection;
          const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
          const isAtTop = scrollTop <= 10;

          if (delta > 0) {
            if (isAtBottom) {
              e.preventDefault();
              isScrollingHorizontal.current = true;
              setActiveSection(2);
              setTimeout(() => {
                isScrollingHorizontal.current = false;
              }, 800);
            }
          } else if (delta < 0) {
            if (isAtTop) {
              e.preventDefault();
              isScrollingHorizontal.current = true;
              setActiveSection(0);
              setTimeout(() => {
                isScrollingHorizontal.current = false;
                if (homeSectionRef.current) {
                  homeSectionRef.current.scrollTop = homeSectionRef.current.scrollHeight;
                }
              }, 800);
            }
          }
        }
      } else if (activeSection === 2) {
        const pricingSection = pricingSectionRef.current;
        if (pricingSection) {
          const { scrollTop, scrollHeight, clientHeight } = pricingSection;
          const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
          const isAtTop = scrollTop <= 10;

          if (delta > 0) {
            if (isAtBottom) {
              e.preventDefault();
              isScrollingHorizontal.current = true;
              setActiveSection(3);
              setTimeout(() => {
                isScrollingHorizontal.current = false;
              }, 800);
            }
          } else if (delta < 0) {
            if (isAtTop) {
              e.preventDefault();
              isScrollingHorizontal.current = true;
              setActiveSection(1);
              setTimeout(() => {
                isScrollingHorizontal.current = false;
                if (featureSectionRef.current) {
                  featureSectionRef.current.scrollTop = featureSectionRef.current.scrollHeight;
                }
              }, 800);
            }
          }
        }
      } else if (activeSection === 3) {
        const faqSection = faqSectionRef.current;
        if (faqSection) {
          const { scrollTop, scrollHeight, clientHeight } = faqSection;
          const isAtTop = scrollTop <= 10;

          if (delta < 0) {
            if (isAtTop) {
              e.preventDefault();
              isScrollingHorizontal.current = true;
              setActiveSection(2);
              setTimeout(() => {
                isScrollingHorizontal.current = false;
                if (pricingSectionRef.current) {
                  pricingSectionRef.current.scrollTop = pricingSectionRef.current.scrollHeight;
                }
              }, 800);
            }
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeSection]);

  return (
    <main className="relative h-screen bg-[#0A0A0A] overflow-hidden">
      <div 
        className="relative z-10 flex transition-transform duration-700 ease-in-out h-full"
        style={{ 
          transform: `translateX(-${activeSection * 100}vw)`,
          width: '400vw'
        }}
      >
        <div 
          ref={homeSectionRef}
          className="w-screen flex-shrink-0 overflow-y-auto scrollbar-hide"
          style={{ height: '100vh' }}
        >
          <div style={{ display: 'block', margin: '0', padding: '0', overflow: 'clip', position: 'relative' }}>
            <HeroSection activeSection={activeSection} setActiveSection={setActiveSection} />
            <DashboardSection />
          </div>
        </div>

        <div className="w-screen h-screen flex-shrink-0">
          <FeatureSection activeSection={activeSection} setActiveSection={setActiveSection} scrollRef={featureSectionRef} />
        </div>

        <div className="w-screen h-screen flex-shrink-0">
          <PricingSection activeSection={activeSection} setActiveSection={setActiveSection} scrollRef={pricingSectionRef} />
        </div>

        <div className="w-screen h-screen flex-shrink-0">
          <FAQSection activeSection={activeSection} setActiveSection={setActiveSection} scrollRef={faqSectionRef} />
        </div>
      </div>
    </main>
  );
}

