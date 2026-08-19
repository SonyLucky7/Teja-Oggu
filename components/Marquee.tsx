'use client';

export default function Marquee() {
  const text = "SAAS • CRM • AI INTEGRATION • AUTOMATION • APIS • FULL-STACK • SECURITY • DEPLOYMENT • ";
  
  return (
    <div className="w-full py-8 border-y border-[rgba(255,255,255,0.08)] bg-[#101010] overflow-hidden flex whitespace-nowrap group">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-duration: 40s;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation-play-state: paused !important;
          }
        }
      `}} />
      <div className="flex animate-marquee">
        <div className="text-2xl md:text-4xl font-heading font-bold tracking-tight text-[#F5F5F5] opacity-20 mr-4">
          {text}
        </div>
        <div className="text-2xl md:text-4xl font-heading font-bold tracking-tight text-[#F5F5F5] opacity-20 mr-4">
          {text}
        </div>
        <div className="text-2xl md:text-4xl font-heading font-bold tracking-tight text-[#F5F5F5] opacity-20 mr-4">
          {text}
        </div>
        <div className="text-2xl md:text-4xl font-heading font-bold tracking-tight text-[#F5F5F5] opacity-20 mr-4">
          {text}
        </div>
      </div>
    </div>
  );
}
