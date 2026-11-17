import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

import livingLuxuryImage from "@/assets/hue-pie-living-luxury.jpg";
import livingRoomImage from "@/assets/hue-pie-living-room.jpg";
import bedroomImage from "@/assets/hue-pie-bedroom.jpg";
import kitchenImage from "@/assets/hue-pie-kitchen.jpg";
import materialsImage from "@/assets/hue-pie-materials.jpg";
import scandinavianImage from "@/assets/hue-pie-scandinavian-warm.jpg";
import wardrobeImage from "@/assets/hue-pie-wardrobe-suite.jpg";

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
  return (
    <main className="bg-[#FFFDE8] text-[#2B2230] min-h-screen font-sans antialiased">

      {/* ── Minimal nav bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDE8]/95 backdrop-blur-md border-b border-[#E3D9C6]">
        <div className="section-wrap flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-[#664465] hover:text-[#4F3150] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-semibold">Back to Home</span>
          </Link>
          <span className="font-serif text-lg font-bold text-[#664465] tracking-tight">Hue &amp; Pie</span>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#664465] text-[#FFFDE8] text-xs font-bold hover:bg-[#4F3150] transition-all"
          >
            Get Free Quote
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* ── Hero — full bleed image with statement ── */}
      <section className="relative h-[92vh] min-h-[560px] overflow-hidden">
        <img
          src={livingLuxuryImage}
          alt="Hue & Pie flagship living interior"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ transform: "translateZ(0)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(43,34,48,0.08) 0%, rgba(43,34,48,0.65) 70%, rgba(43,34,48,0.90) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 section-wrap pb-14 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A97A] mb-4">
              Est. 2018 &nbsp;·&nbsp; Bangalore, Hyderabad, Mumbai
            </p>
            <h1
              className="font-serif font-normal text-[#FFFDE8] leading-[1.1] tracking-tight max-w-3xl"
              style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
            >
              We build homes that feel like you.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Mission statement ── */}
      <section className="section-wrap py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#664465] mb-5">The Practice</p>
            <h2
              className="font-serif font-normal text-[#2B2230] leading-[1.15] mb-6"
              style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
            >
              Interior design built on precision, not compromise.
            </h2>
            <p className="text-[#6B5F6B] leading-relaxed text-base sm:text-lg max-w-lg">
              Hue &amp; Pie is a full-service residential interior design practice. We handle
              everything — concept, 3D design, factory fabrication, and clean on-site installation —
              so you get a finished home without the delays, escalations, or chaos that come with
              traditional carpentry.
            </p>
          </motion.div>

          {/* Three stat columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-3 gap-px bg-[#E3D9C6] rounded-[24px] overflow-hidden border border-[#E3D9C6]"
          >
            {[
              { n: "500+", label: "Homes Delivered" },
              { n: "45", label: "Day Guarantee" },
              { n: "10yr", label: "Warranty" },
            ].map((s) => (
              <div key={s.label} className="bg-[#FFFDE8] px-5 py-8 text-center">
                <span className="font-serif text-[32px] sm:text-[40px] font-bold text-[#664465] block leading-none mb-2">
                  {s.n}
                </span>
                <span className="text-xs text-[#6B5F6B] font-medium leading-tight block">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Full-bleed image pair ── */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {[
          { src: livingRoomImage, alt: "Clay & Linen living pavilion" },
          { src: bedroomImage, alt: "Nordic Walnut master suite" },
        ].map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="relative overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              style={{ transform: "translateZ(0)" }}
            />
          </motion.div>
        ))}
      </section>

      {/* ── Values — text + right image ── */}
      <section className="section-wrap py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#664465]">How We Work</p>
            {[
              {
                n: "01",
                title: "Factory Precision",
                body: "Every panel is CNC-cut in our factory before site work begins. Zero dependency on carpenter availability.",
              },
              {
                n: "02",
                title: "Transparent Pricing",
                body: "Itemised quotes locked before production. The price you sign is the price you pay — no escalations.",
              },
              {
                n: "03",
                title: "German Hardware",
                body: "Häfele and Hettich fittings across all joinery. Soft-close, 10-year warranty, certified quality.",
              },
            ].map((v) => (
              <div key={v.n} className="flex gap-5">
                <span className="font-serif text-[#C9A97A] font-bold text-lg shrink-0 w-7 mt-0.5">{v.n}</span>
                <div>
                  <h3 className="font-serif text-lg font-normal text-[#2B2230] mb-1">{v.title}</h3>
                  <p className="text-sm text-[#6B5F6B] leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[28px] overflow-hidden shadow-xl"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src={kitchenImage}
              alt="Muted Sage modular kitchen"
              className="w-full h-full object-cover"
              style={{ transform: "translateZ(0)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── 3-image mosaic ── */}
      <section className="section-wrap pb-20 sm:pb-28">
        <div className="grid grid-cols-12 grid-rows-2 gap-3" style={{ height: "520px" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-7 row-span-2 rounded-[24px] overflow-hidden"
          >
            <img
              src={wardrobeImage}
              alt="Japandi wardrobe suite"
              className="w-full h-full object-cover"
              style={{ transform: "translateZ(0)" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-5 row-span-1 rounded-[24px] overflow-hidden"
          >
            <img
              src={materialsImage}
              alt="Premium material palette"
              className="w-full h-full object-cover"
              style={{ transform: "translateZ(0)" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-5 row-span-1 rounded-[24px] overflow-hidden"
          >
            <img
              src={scandinavianImage}
              alt="Scandinavian warm style"
              className="w-full h-full object-cover"
              style={{ transform: "translateZ(0)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Cities strip ── */}
      <section className="bg-[#664465] py-14">
        <div className="section-wrap">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A97A] mb-3">Our Studios</p>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {["Bangalore", "Hyderabad", "Mumbai"].map((city) => (
                  <span key={city} className="font-serif text-2xl sm:text-3xl text-[#FFFDE8] font-normal">{city}</span>
                ))}
              </div>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C9A97A] text-[#FFFDE8] font-bold text-sm hover:bg-[#B8935F] transition-all shrink-0"
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer micro ── */}
      <footer className="bg-[#2B2230] py-8">
        <div className="section-wrap flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFFDE8]/50">
          <span>© {new Date().getFullYear()} Hue &amp; Pie Interiors Private Limited</span>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-[#C9A97A] transition-colors">Home</Link>
            <a href="mailto:enquiry@hueandpie.com" className="hover:text-[#C9A97A] transition-colors">enquiry@hueandpie.com</a>
            <a href="tel:+919845012345" className="hover:text-[#C9A97A] transition-colors">+91 98450 12345</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
