import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X, Check } from "lucide-react";

import livingLuxuryImage from "@/assets/hue-pie-living-luxury.jpg";
import livingRoomImage from "@/assets/hue-pie-living-room.jpg";
import bedroomImage from "@/assets/hue-pie-bedroom.jpg";
import kitchenImage from "@/assets/hue-pie-kitchen.jpg";
import materialsImage from "@/assets/hue-pie-materials.jpg";
import scandinavianImage from "@/assets/hue-pie-scandinavian-warm.jpg";
import wardrobeImage from "@/assets/hue-pie-wardrobe-suite.jpg";
import { SiteFooter } from "@/components/SiteFooter";
import { ConsultationDialog } from "@/components/ConsultationDialog";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hue & Pie | The Practice" },
      {
        name: "description",
        content:
          "Hue & Pie is a full-service residential interior design practice delivering precision-built homes across Bangalore, Hyderabad, and Mumbai.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#FFFDE8] text-[#2B2230] min-h-screen font-sans antialiased">

      {/* ── Header ── */}
      <header className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "site-header-scrolled" : "site-header-transparent"}`}>
        <div className="section-wrap flex items-center justify-between w-full">
          <Link to="/" className="wordmark group" aria-label="Hue & Pie - home">
            <span className="wordmark-name text-[#FFFDE8] tracking-tight block text-center">Hue &amp; Pie</span>
            <span className="wordmark-tagline block text-center">Interiors, Your Way.</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="tel:+919845012345" className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#FFFDE8]/40 bg-transparent text-[#FFFDE8] hover:bg-[#FFFDE8]/15 transition-all text-xs lg:text-sm font-medium">
              <Phone className="w-3.5 h-3.5" /><span>+91 98450 12345</span>
            </a>
            <a href="tel:+919845012345" className="md:hidden w-9 h-9 rounded-full border border-[#FFFDE8]/40 bg-transparent text-[#FFFDE8] flex items-center justify-center" aria-label="Call">
              <Phone className="w-4 h-4" />
            </a>
            <Link to="/" className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#FFFDE8]/40 bg-transparent text-[#FFFDE8] hover:bg-[#FFFDE8]/15 transition-all text-xs font-medium">Home</Link>
            <button type="button" onClick={() => setConsultationOpen(true)} className="inline-flex items-center gap-1.5 px-3 sm:px-5 py-2 rounded-full bg-[#C9A97A] text-[#FFFDE8] hover:bg-[#B8935F] text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer whitespace-nowrap">
              <span>Get Free Quote</span><ArrowUpRight size={14} className="text-[#FFFDE8]" />
            </button>
            <button className="md:hidden w-9 h-9 rounded-full border border-[#FFFDE8]/40 bg-[#FFFDE8]/10 text-[#FFFDE8] flex items-center justify-center cursor-pointer" type="button" onClick={() => setMobileMenuOpen(v => !v)}>
              {mobileMenuOpen ? <X size={18} className="text-[#FFFDE8]" /> : <Menu size={18} className="text-[#FFFDE8]" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="md:hidden absolute top-full left-0 right-0 bg-[#664465]/98 backdrop-blur-xl border-b border-[#C9A97A]/30 py-5 px-6 shadow-2xl flex flex-col gap-3">
              <Link to="/" className="flex items-center justify-center py-2.5 px-4 rounded-xl border border-[#FFFDE8]/25 bg-[#FFFDE8]/10 text-[#FFFDE8] font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Back to Home</Link>
              <button type="button" className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#C9A97A] text-[#FFFDE8] font-bold text-sm cursor-pointer" onClick={() => { setMobileMenuOpen(false); setConsultationOpen(true); }}>
                <span>Get Free Quote</span><ArrowUpRight size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>

        {/* ── HERO  -  compact, text-led ── */}
        <section className="relative overflow-hidden bg-[#664465]" style={{ minHeight: "55vh" }}>
          <img src={livingLuxuryImage} alt="Hue & Pie interior" className="absolute inset-0 w-full h-full object-cover object-center opacity-40" style={{ transform: "translateZ(0)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(102,68,101,0.6) 0%, rgba(102,68,101,0.95) 100%)" }} />
          <div className="relative section-wrap flex flex-col justify-end py-20 pt-36" style={{ zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A97A] block mb-4">Est. 2018 &middot; Bangalore &middot; Hyderabad &middot; Mumbai</span>
              <h1 className="font-serif font-normal text-[#FFFDE8] leading-[1.1] tracking-tight mb-5" style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}>
                About Hue &amp; Pie
              </h1>
              <p className="text-base sm:text-xl text-[#FFFDE8]/80 leading-relaxed max-w-xl">
                A full-service residential interior design practice. We plan, design, build, and hand over  -  in 45 days.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── WHO WE ARE ── */}
        <section className="section-wrap py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="eyebrow block mb-3">Who We Are</span>
              <h2 className="section-title text-[#2B2230] mb-5">We are not a furniture store. We are a design practice.</h2>
              <p className="text-base sm:text-lg text-[#6B5F6B] leading-relaxed mb-5">
                Hue &amp; Pie was founded in 2018 with a single intent  -  to bring factory-grade precision to residential interiors in India. Before us, homeowners dealt with unpredictable carpenters, escalating costs, and timelines that stretched for months.
              </p>
              <p className="text-base sm:text-lg text-[#6B5F6B] leading-relaxed">
                We changed that by building a fully integrated practice: in-house design, a CNC production facility, and a site delivery team. Every project runs under one roof, one quote, and one written guarantee.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-[24px] overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
              <img src={livingRoomImage} alt="Hue & Pie living room project" className="w-full h-full object-cover" style={{ transform: "translateZ(0)" }} />
            </motion.div>
          </div>
        </section>

        {/* ── NUMBERS ── */}
        <section className="bg-[#664465] py-14 sm:py-16">
          <div className="section-wrap">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#FFFDE8]/15 rounded-[20px] overflow-hidden border border-[#FFFDE8]/15">
              {[
                { n: "500+", label: "Homes Delivered" },
                { n: "45", label: "Day Move-In Guarantee" },
                { n: "10yr", label: "Structural Warranty" },
                { n: "140+", label: "Quality Checks Per Project" },
              ].map((s) => (
                <div key={s.label} className="bg-[#664465] px-6 py-10 text-center">
                  <span className="font-serif text-[40px] sm:text-[52px] font-bold text-[#C9A97A] block leading-none mb-3">{s.n}</span>
                  <span className="text-sm text-[#FFFDE8]/70 font-medium block leading-snug">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE BELIEVE ── */}
        <section className="section-wrap py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-[24px] overflow-hidden shadow-xl order-2 lg:order-1" style={{ aspectRatio: "4/3" }}>
              <img src={bedroomImage} alt="Hue & Pie bedroom design" className="w-full h-full object-cover" style={{ transform: "translateZ(0)" }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="order-1 lg:order-2">
              <span className="eyebrow block mb-3">What We Believe</span>
              <h2 className="section-title text-[#2B2230] mb-5">Your home should cost exactly what we quoted.</h2>
              <p className="text-base sm:text-lg text-[#6B5F6B] leading-relaxed mb-5">
                The Indian home interiors industry has a trust problem. Budgets balloon. Timelines drift. Carpenters vanish mid-project. We built Hue &amp; Pie specifically to solve these failures.
              </p>
              <p className="text-base sm:text-lg text-[#6B5F6B] leading-relaxed">
                We work on a fixed, itemised quote that is locked before production begins. We do not renegotiate mid-project. What you sign is what you pay  -  with every rupee accounted for in writing before a single panel is cut.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="bg-[#F3ECDD]/50 border-y border-[#E3D9C6] py-16 sm:py-20">
          <div className="section-wrap">
            <div className="max-w-xl mb-12">
              <span className="eyebrow block mb-3">How We Work</span>
              <h2 className="section-title text-[#2B2230] mb-4">From first call to final handover.</h2>
              <p className="text-base sm:text-lg text-[#6B5F6B] leading-relaxed">
                Every Hue &amp; Pie project follows the same four-stage process  -  no shortcuts, no skipped steps.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { n: "01", title: "Design Consultation", days: "Days 1  -  5", body: "Lifestyle audit, 2D floor plan review, and a transparent preliminary budget. No obligation, no pressure." },
                { n: "02", title: "3D Design & Sign-Off", days: "Days 6  -  18", body: "Photorealistic 3D renders, physical material samples, and a final itemised quote  -  locked before production." },
                { n: "03", title: "Factory Fabrication", days: "Days 19  -  38", body: "CNC precision-cut panels in our production facility, PUR edge sealing, and a 140-point pre-dispatch audit." },
                { n: "04", title: "On-Site Installation", days: "Days 39  -  45", body: "10-day clean assembly at site, acoustic and load checks, deep cleaning, and 10-year warranty handover." },
              ].map((step) => (
                <motion.div key={step.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-6 rounded-[20px] bg-[#FFFDE8] border border-[#E3D9C6] shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#664465] text-[#FFFDE8] font-serif font-bold text-base flex items-center justify-center shrink-0">{step.n}</span>
                    <span className="text-xs text-[#664465] font-semibold">{step.days}</span>
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#2B2230] mb-2">{step.title}</h3>
                  <p className="text-base text-[#6B5F6B] leading-relaxed">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT MAKES US DIFFERENT ── */}
        <section className="section-wrap py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="eyebrow block mb-3">What Makes Us Different</span>
              <h2 className="section-title text-[#2B2230] mb-5">Built differently, delivered differently.</h2>
              <p className="text-base sm:text-lg text-[#6B5F6B] leading-relaxed mb-8">
                Most interior companies outsource fabrication to local carpenters. We do not. We own the production, control the quality, and take responsibility for every millimetre of your home.
              </p>
              <ul className="space-y-4">
                {[
                  "In-house CNC factory  -  no third-party fabricators",
                  "100% BWR Marine Ply core with IS:710 certification",
                  "Häfele & Hettich German hardware on every project",
                  "Dedicated project coordinator from day one to handover",
                  "Written 10-year warranty on all structural joinery",
                  "Zero price escalation  -  fixed quotes before production",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#664465]/10 text-[#664465] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-base text-[#2B2230]">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-[24px] overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
              <img src={kitchenImage} alt="Hue & Pie kitchen craftsmanship" className="w-full h-full object-cover" style={{ transform: "translateZ(0)" }} />
            </motion.div>
          </div>
        </section>

        {/* ── MATERIALS ── */}
        <section className="bg-[#F3ECDD]/50 border-y border-[#E3D9C6] py-16 sm:py-20">
          <div className="section-wrap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-[24px] overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
                <img src={materialsImage} alt="Premium material palette" className="w-full h-full object-cover" style={{ transform: "translateZ(0)" }} />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <span className="eyebrow block mb-3">Materials</span>
                <h2 className="section-title text-[#2B2230] mb-5">We only use what we'd put in our own homes.</h2>
                <p className="text-base sm:text-lg text-[#6B5F6B] leading-relaxed mb-5">
                  Every material we specify has been tested for durability, finish, and safety. We do not use MDF cores or low-grade hinges regardless of budget tier  -  the structural materials stay the same across all our packages.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {[
                    { brand: "Häfele / Hettich", role: "German Hardware" },
                    { brand: "Century Ply", role: "BWR Marine Ply Core" },
                    { brand: "Blum", role: "Motion & Lift Systems" },
                    { brand: "Merino / Greenlam", role: "Designer Laminates" },
                    { brand: "Asian Paints", role: "Low-VOC Finishes" },
                    { brand: "Saint-Gobain", role: "Glass & Mirrors" },
                  ].map((m) => (
                    <div key={m.brand} className="p-4 rounded-[14px] bg-[#FFFDE8] border border-[#E3D9C6]">
                      <span className="font-serif text-base font-medium text-[#2B2230] block">{m.brand}</span>
                      <span className="text-xs text-[#664465] font-semibold block mt-0.5">{m.role}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WHERE WE WORK ── */}
        <section className="section-wrap py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="eyebrow block mb-3">Where We Work</span>
              <h2 className="section-title text-[#2B2230] mb-5">Three cities. One standard of quality.</h2>
              <p className="text-base sm:text-lg text-[#6B5F6B] leading-relaxed mb-8">
                We have dedicated design studios and site supervision teams in each city. When we take on a project in Hyderabad, the same design rigour, the same materials, and the same quality audit process applies  -  no outsourcing to local contractors.
              </p>
              <div className="space-y-4">
                {[
                  { city: "Bangalore", addr: "100 Feet Road, Indiranagar" },
                  { city: "Hyderabad", addr: "Road No. 36, Jubilee Hills" },
                  { city: "Mumbai", addr: "Linking Road, Bandra West" },
                ].map((s) => (
                  <div key={s.city} className="flex items-center justify-between py-4 border-b border-[#E3D9C6]">
                    <span className="font-serif text-2xl text-[#2B2230] font-normal">{s.city}</span>
                    <span className="text-sm text-[#6B5F6B]">{s.addr}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-[24px] overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
              <img src={scandinavianImage} alt="Hue & Pie scandinavian style interior" className="w-full h-full object-cover" style={{ transform: "translateZ(0)" }} />
            </motion.div>
          </div>
        </section>

        {/* ── CTA CARD ── */}
        <section className="section-wrap pb-20 sm:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] overflow-hidden relative"
            style={{ minHeight: "360px" }}
          >
            <img src={wardrobeImage} alt="Hue & Pie wardrobe" className="absolute inset-0 w-full h-full object-cover" style={{ transform: "translateZ(0)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(43,34,48,0.95) 0%, rgba(43,34,48,0.80) 50%, rgba(43,34,48,0.30) 100%)" }} />
            <div className="relative p-10 sm:p-16 flex flex-col justify-center max-w-lg" style={{ zIndex: 2, minHeight: "360px" }}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A97A] block mb-4">Ready to Start?</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#FFFDE8] leading-tight mb-5">
                Let's design your home together.
              </h2>
              <p className="text-base text-[#FFFDE8]/75 leading-relaxed mb-8">
                Book a free consultation with one of our senior designers. No commitment needed  -  just a conversation about your space and what you want from it.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setConsultationOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#C9A97A] text-[#FFFDE8] font-semibold text-xs hover:bg-[#B8935F] transition-all cursor-pointer shadow-md"
                >
                  Book Free Consultation
                  <ArrowUpRight size={16} />
                </button>
                <a
                  href="tel:+919845012345"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#FFFDE8]/30 text-[#FFFDE8] font-semibold text-xs hover:bg-[#FFFDE8]/10 transition-all"
                >
                  <Phone size={15} />
                  Call +91 98450 12345
                </a>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      <SiteFooter />

      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} defaultService="" defaultStyle="" />

    </div>
  );
}
