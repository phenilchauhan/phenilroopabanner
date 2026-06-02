/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, MapPin, CheckCircle, Lock, Rocket, MessageSquare, IndianRupee, MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <>
      <div className="bg-mesh"></div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto pb-10">
        
        {/* HERO SECTION */}
        <section className="px-4 py-8 md:px-10 md:py-16 mx-auto w-full max-w-6xl text-center flex flex-col items-center">
          
          {/* Logo Row - Responsive fixes applied here */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8 sm:mb-12 w-full justify-between sm:justify-start lg:justify-between max-w-4xl bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10 backdrop-blur-sm relative">
            
            <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
              {/* Logo Badge */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-brand-purple to-gold-dark flex items-center justify-center shrink-0 shadow-[0_0_24px_rgba(124,58,237,0.45)]">
                <span className="font-display text-[9px] md:text-[10px] font-extrabold text-white text-center leading-[1.2] tracking-wide">
                  PHENIL<br/>ROOPA<br/>AI
                </span>
              </div>
              
              {/* Logo Text */}
              <div className="text-left flex-1">
                <h1 className="font-display text-2xl md:text-[28px] lg:text-3xl font-extrabold bg-gradient-to-r from-white via-white to-gold bg-clip-text text-transparent leading-tight whitespace-nowrap">
                  PhenilRoopa AI
                </h1>
                <p className="text-[11px] md:text-xs lg:text-sm text-white/60 tracking-wider mt-0.5 whitespace-nowrap">
                  Refined. Radiant. Remarkable.
                </p>
              </div>
            </div>

            {/* Location Badge (floats top right on mobile, inline on desktop) */}
            <div className="absolute top-[-10px] right-2 sm:relative sm:top-0 sm:right-0 bg-gold/10 border border-gold/30 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-gold font-medium text-[10px] sm:text-xs whitespace-nowrap shadow-sm shadow-gold/10 bg-[#0A0A1A] sm:bg-transparent">
              <MapPin className="w-3 h-3" />
              Mumbai, IN
            </div>
            
          </div>

          <div className="text-[10px] sm:text-xs tracking-[3.5px] text-gold font-semibold uppercase mb-3 sm:mb-4">
            AI-Powered Digital Agency
          </div>
          
          <h2 className="font-display text-5xl sm:text-7xl lg:text-[90px] font-extrabold leading-[0.95] tracking-tight bg-gradient-to-br from-white via-purple-200 to-gold bg-clip-text text-transparent mb-3">
            WEBSITES
          </h2>
          
          <p className="text-[15px] sm:text-base md:text-lg lg:text-[19px] text-white/60 leading-relaxed max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-10">
            We build fast, modern, AI-powered websites that convert visitors into paying customers — delivered in just <span className="text-white">7 days</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 max-w-2xl px-2">
            <Pill accent>⚡ 7-Day Delivery</Pill>
            <Pill>Mobile Ready</Pill>
            <Pill>SEO Optimized</Pill>
            <Pill accent>🤖 AI Chatbot</Pill>
            <Pill>Admin Panel</Pill>
            <Pill>6 Months Support</Pill>
          </div>
        </section>

        {/* SECTION METRICS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 px-5 md:px-10 max-w-5xl mx-auto mb-16">
          <StatCard num="50+" label="Happy Clients" />
          <StatCard num="98%" label="Satisfaction" />
          <StatCard num="7" suffix="Days" label="Fast Delivery" />
        </section>

        {/* SHOWCASE */}
        <SectionLabel>Our Live Work</SectionLabel>
        <section className="px-4 md:px-10 mb-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <SiteCard 
              url="https://canoeatl.netlify.app/" 
              title="Canoe Restaurant & Events" 
              desc="Elegant restaurant website with event booking, stunning visuals, and seamless mobile experience — built for Atlanta's finest dining."
              tags={["Restaurant", "Events", "Booking"]}
            />
            <SiteCard 
              url="https://capable-cobbler-51e16b.netlify.app/" 
              title="AI-Powered Web App" 
              desc="Modern AI-integrated web application with smart automation features — demonstrating our cutting-edge AI-first development approach."
              tags={["AI App", "Web App", "Automation"]}
            />
            <SiteCard 
              url="https://madhushomemadetiffine.netlify.app/" 
              title="Madhu's Homemade Tiffin" 
              desc="Beautiful food delivery website with online ordering, WhatsApp integration, and local SEO — helping a home kitchen scale its business."
              tags={["Food Business", "Delivery", "WhatsApp"]}
            />
            <SiteCard 
              url="https://sudhirmeenaadvertising.netlify.app/" 
              title="Sudhir Meena Advertising" 
              desc="Professional advertising agency website with portfolio showcase, service listings, and lead capture — converting visitors to clients from day one."
              tags={["Advertising", "Portfolio", "Lead Gen"]}
            />
          </div>
        </section>

        {/* INCLUDED */}
        <SectionLabel>What You Get</SectionLabel>
        <section className="px-4 md:px-10 mb-10 max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-black/20">
            <div className="bg-gradient-to-r from-brand-purple/60 to-brand-green/20 px-5 py-4 font-display text-sm font-bold tracking-[1.5px] uppercase text-white border-b border-white/10">
              ✦ Website Package — All Included
            </div>
            <div className="py-2">
              <IncludeItem text={<>Dynamic Website — <span className="text-gold font-bold">10+ Pages</span></>} />
              <IncludeItem text="Mobile Responsive Design" />
              <IncludeItem text="WhatsApp + Contact Form" />
              <IncludeItem text="SEO + Google Analytics Setup" />
              <IncludeItem text={<><span className="text-gold font-bold">AI Chatbot</span> Integration (Exclusive)</>} />
              <IncludeItem text="Admin Panel — Easy to Manage" />
              <IncludeItem text={<><span className="text-gold font-bold">6 Months</span> Free Technical Support</>} />
              <IncludeItem text={<>Delivery in <span className="text-gold font-bold">Just 7 Days</span></>} />
            </div>
          </div>
        </section>

        {/* URGENCY STRIP */}
        <section className="px-4 md:px-10 mb-10 max-w-4xl mx-auto">
           <div className="bg-gradient-to-r from-gold/15 to-gold/5 border border-gold/40 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left shadow-[0_4px_24px_rgba(255,202,40,0.12)]">
              <span className="text-3xl sm:text-4xl shrink-0 drop-shadow-md">🔥</span>
               <div>
                  <strong className="block text-base sm:text-lg text-gold font-bold mb-1.5 tracking-wide">Limited Slots Available This Month!</strong>
                  <span className="text-[13px] sm:text-sm text-white/70 leading-relaxed font-medium">We take only a few clients at a time to ensure top quality and dedicated attention to your project.</span>
               </div>
           </div>
        </section>

        {/* TRUST STRIP */}
        <section className="px-4 md:px-10 mb-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <TrustItem icon={<Lock className="w-5 h-5 lg:w-6 lg:h-6 text-white/75" />} label="100% Secure & Reliable" />
            <TrustItem icon={<Rocket className="w-5 h-5 lg:w-6 lg:h-6 text-brand-green" />} label="On-Time Delivery" />
            <TrustItem icon={<MessageSquare className="w-5 h-5 lg:w-6 lg:h-6 text-brand-purple" />} label="Dedicated Support" />
            <TrustItem icon={<IndianRupee className="w-5 h-5 lg:w-6 lg:h-6 text-gold" />} label="Affordable Pricing" />
          </div>
        </section>

        {/* CTA */}
        <SectionLabel>Get Started Today</SectionLabel>
        <section className="px-4 md:px-10 mb-10 max-w-3xl mx-auto">
           <div className="relative bg-gradient-to-br from-brand-purple to-brand-green rounded-[24px] lg:rounded-[32px] p-8 sm:p-12 text-center overflow-hidden shadow-[0_20px_60px_rgba(124,58,237,0.35)]">
              {/* Internal abstract glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none"></div>

              <div className="relative z-10 w-full flex flex-col items-center">
                  <h2 className="font-display text-[28px] sm:text-4xl md:text-5xl font-extrabold leading-[1.15] mb-4 drop-shadow-sm">
                    Get Your Website<br/>Ready in 7 Days! 🚀
                  </h2>
                  <p className="text-[15px] sm:text-[17px] text-white/95 mb-8 md:mb-10 font-medium">
                    Message us now — slots fill up fast!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch justify-center gap-4">
                    <a className="flex items-center justify-center gap-2.5 px-6 lg:px-8 py-4 rounded-[14px] bg-[#25D366] hover:bg-[#20bd5a] hover:-translate-y-0.5 text-white font-display font-bold text-[15px] sm:text-base shadow-[0_8px_24px_rgba(37,211,102,0.40)] transition-all whitespace-nowrap" href="https://wa.me/918108789081?text=Hi%20PhenilRoopa%20AI!%20I%20want%20a%20website%20for%20my%20business." target="_blank" rel="noreferrer">
                      <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" /> Chat on WhatsApp
                    </a>
                    <a className="flex items-center justify-center gap-2.5 px-6 lg:px-8 py-4 rounded-[14px] bg-white/15 border border-white/20 hover:bg-white/25 hover:border-white/40 text-white font-semibold text-[15px] sm:text-base transition-colors whitespace-nowrap backdrop-blur-sm" href="mailto:chauhanphenil@gmail.com?subject=Website%20Enquiry%20-%20PhenilRoopa%20AI">
                      <Mail className="w-5 h-5" /> Email Us
                    </a>
                  </div>
              </div>
           </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center px-5 pt-10 pb-6 border-t border-white/5 mx-5 md:mx-10 mt-12">
          <div className="font-display text-[15px] font-bold text-gold tracking-wide mb-1.5 opacity-90">
            PhenilRoopa AI
          </div>
          <div className="text-[11px] md:text-xs text-white/50 tracking-wider leading-relaxed">
             Every business deserves marketing that delivers real results.<br className="hidden sm:block"/>
             Your Digital Growth Partner
          </div>
        </footer>

      </div>
    </>
  );
}

/* --- Helper Components --- */

function Pill({ children, accent }: { children: React.ReactNode, accent?: boolean }) {
  return (
    <div className={`px-4 py-2 rounded-full border text-[11px] sm:text-[13px] font-semibold whitespace-nowrap shadow-sm backdrop-blur-sm transition-colors ${
      accent 
        ? 'bg-gold/15 border-gold/40 text-gold hover:bg-gold/20' 
        : 'bg-white/10 border-white/20 text-white/90 hover:bg-white/15'
    }`}>
      {children}
    </div>
  );
}

function StatCard({ num, suffix, label }: { num: string, suffix?: string, label: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl py-6 sm:py-8 px-5 text-center flex flex-col justify-center items-center shadow-lg shadow-black/10 hover:border-white/20 transition-colors backdrop-blur-[2px]">
      <div className="font-display text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-gold leading-none drop-shadow-sm mb-3">
        {num}{suffix && <span className="text-xl sm:text-2xl lg:text-3xl ml-1 font-bold text-gold/80">{suffix}</span>}
      </div>
      <div className="text-[11px] sm:text-xs lg:text-[13px] text-white/60 uppercase tracking-[2px] font-bold">
        {label}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 px-4 md:px-10 mb-8 max-w-6xl mx-auto w-full">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <span className="text-[11px] sm:text-xs lg:text-[13px] tracking-[3px] uppercase font-bold text-gold whitespace-nowrap drop-shadow-sm">
        {children}
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
}

function SiteCard({ url, title, desc, tags }: { url: string, title: string, desc: string, tags: string[] }) {
  return (
    <div className="bg-[#12122b]/60 border border-white/10 hover:border-gold/40 rounded-[28px] overflow-hidden transition-all duration-300 flex flex-col h-full group shadow-lg hover:shadow-gold/10">
      
      {/* Portfolio Card Iframe scaling container */}
      <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[360px] overflow-hidden bg-black cursor-pointer border-b border-white/10">
        <div className="absolute top-4 right-4 z-10 bg-brand-green/20 border border-brand-green/50 rounded-full px-3 py-1.5 text-[10px] sm:text-[11px] text-[#22c55e] font-extrabold flex items-center gap-2 backdrop-blur-md shadow-lg">
          <div className="w-2 h-2 rounded-full bg-[#22c55e] relative live-dot"></div>
          LIVE
        </div>
        
        {/* Iframe wrapper for fixed preview scale */}
        <div className="absolute top-[50%] left-[50%] w-[1280px] h-[1000px] lg:w-[1440px] lg:h-[1200px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 scale-[0.35] sm:scale-[0.4] lg:scale-[0.45]">
           <iframe src={url} className="w-full h-full border-none rounded-xl" loading="lazy" scrolling="no" tabIndex={-1}></iframe>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a1a] opacity-90 pointer-events-none"></div>
      </div>

      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <h4 className="font-display text-xl md:text-2xl font-bold mb-3 text-white/95 group-hover:text-gold transition-colors">{title}</h4>
        <p className="text-[13px] md:text-[15px] text-white/60 leading-relaxed mb-6 flex-1">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((t, idx) => (
            <span key={idx} className="text-[10px] md:text-[11px] px-3 py-1.5 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-[#d8b4fe] font-bold tracking-wide">
              {t}
            </span>
          ))}
        </div>
        <a href={url} target="_blank" rel="noreferrer" className="block text-center w-full py-4 bg-white/5 border border-white/10 group-hover:border-gold/50 group-hover:text-gold group-hover:bg-gold/10 rounded-2xl text-[13px] md:text-[14px] text-white/80 font-bold transition-all duration-300 pointer-events-auto">
          🔗 View Live Site →
        </a>
      </div>
    </div>
  );
}

function IncludeItem({ text }: { text: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 px-5 py-4 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors">
       <div className="w-7 h-7 md:w-8 md:h-8 rounded-[10px] shrink-0 bg-gradient-to-br from-brand-purple to-brand-green flex items-center justify-center text-white/90 shadow-md">
         <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
       </div>
       <div className="text-[14px] md:text-[16px] text-white/85 leading-snug font-medium">
         {text}
       </div>
    </div>
  );
}

function TrustItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
     <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6 text-center flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-all hover:-translate-y-1 shadow-lg shadow-black/10">
        <div className="mb-1">{icon}</div>
        <div className="text-[11px] lg:text-[13px] text-white/70 leading-tight font-bold tracking-wide">
          {label}
        </div>
     </div>
  );
}

