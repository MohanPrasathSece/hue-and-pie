import { useState } from "react";
import { ArrowRight, Calculator, Check, Sparkles, ShieldCheck, Clock } from "lucide-react";

interface InteriorCostEstimatorProps {
  onGetQuote: (estimateDetails: string) => void;
}

export function InteriorCostEstimator({ onGetQuote }: InteriorCostEstimatorProps) {
  const [bhk, setBhk] = useState<"2BHK" | "3BHK" | "4BHK" | "Villa">("3BHK");
  const [tier, setTier] = useState<"Essential" | "Premium" | "Luxe">("Premium");
  const [includedRooms, setIncludedRooms] = useState<string[]>([
    "Modular Kitchen",
    "Living & Dining",
    "Master Bedroom",
    "Guest Bedroom",
    "Wardrobes & Joinery",
  ]);

  const pricingData: Record<string, Record<string, { min: number; max: number; days: string }>> = {
    "2BHK": {
      Essential: { min: 4.8, max: 6.5, days: "35–40 Days" },
      Premium: { min: 6.8, max: 9.5, days: "40–45 Days" },
      Luxe: { min: 10.5, max: 14.0, days: "45–55 Days" },
    },
    "3BHK": {
      Essential: { min: 7.2, max: 9.8, days: "40–45 Days" },
      Premium: { min: 10.5, max: 14.5, days: "45–50 Days" },
      Luxe: { min: 15.5, max: 22.0, days: "50–60 Days" },
    },
    "4BHK": {
      Essential: { min: 11.0, max: 14.5, days: "45–50 Days" },
      Premium: { min: 15.5, max: 21.0, days: "50–60 Days" },
      Luxe: { min: 23.0, max: 32.0, days: "60–75 Days" },
    },
    Villa: {
      Essential: { min: 16.0, max: 22.0, days: "50–60 Days" },
      Premium: { min: 24.0, max: 34.0, days: "60–75 Days" },
      Luxe: { min: 36.0, max: 55.0, days: "75–90 Days" },
    },
  };

  const currentPrice = pricingData[bhk][tier];

  const toggleRoom = (room: string) => {
    setIncludedRooms((prev) =>
      prev.includes(room) ? prev.filter((r) => r !== room) : [...prev, room],
    );
  };

  const handleEstimateAction = () => {
    const summary = `${bhk} (${tier} Curation) - Estimated ₹${currentPrice.min}L–₹${currentPrice.max}L with ${includedRooms.join(", ")}`;
    onGetQuote(summary);
  };

  return (
    <div className="p-6 sm:p-10 rounded-[32px] bg-[#FFFDE8] border border-[#E3D9C6] shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E3D9C6]">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6EE] border border-[#664465]/20 text-[#664465] text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#C9A97A]" />
            <span>Interactive Interior Price Estimator</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2230] font-normal mb-3">
            Estimate Your Dream Home Investment
          </h3>
          <p className="text-sm sm:text-base text-[#3B2E3D] font-sans leading-relaxed">
            Transparent pricing based on actual square footage, BWR marine ply standards, and
            branded hardware.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-[#6B5F6B]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#664465]" /> Price-Lock Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#C9A97A]" /> 45-Day Handover
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Config Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: BHK Select */}
          <div className="space-y-2.5">
            <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2B2230]">
              1. Select Home Configuration
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(["2BHK", "3BHK", "4BHK", "Villa"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setBhk(item)}
                  className={`tab-pill py-3 px-4 rounded-[16px] text-sm font-semibold justify-center text-center ${
                    bhk === item ? "tab-pill-active" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Curation Tier */}
          <div className="space-y-2.5">
            <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2B2230]">
              2. Select Material &amp; Finish Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  id: "Essential",
                  title: "Essential Curated",
                  desc: "Matte laminates, BWR marine ply, soft-close hardware.",
                },
                {
                  id: "Premium",
                  title: "Premium Luxury",
                  desc: "Anti-fingerprint PU, quartz counters, fluted timber accents.",
                },
                {
                  id: "Luxe",
                  title: "Signature Bespoke",
                  desc: "Italian marble, smoked veneers, lacquered bronze glass.",
                },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTier(t.id as "Essential" | "Premium" | "Luxe")}
                  className={`toggle-card p-4 rounded-[18px] text-left transition-all justify-between ${
                    tier === t.id ? "toggle-card-active" : ""
                  }`}
                >
                  <span className="font-serif text-base font-semibold block">{t.title}</span>
                  <span className="text-xs mt-1 leading-relaxed opacity-90">{t.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Room Selection */}
          <div className="space-y-2.5">
            <label className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2B2230]">
              3. Rooms to Include in Scope
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                "Modular Kitchen",
                "Living & Dining",
                "Master Bedroom",
                "Guest Bedroom",
                "Wardrobes & Joinery",
                "Foyer & Shoe Console",
                "False Ceiling & Lighting",
              ].map((room) => {
                const active = includedRooms.includes(room);
                return (
                  <button
                    key={room}
                    type="button"
                    onClick={() => toggleRoom(room)}
                    className={`tab-pill px-3.5 py-2 text-xs sm:text-sm font-medium gap-1.5 ${
                      active ? "tab-pill-active" : ""
                    }`}
                  >
                    <Check
                      className={`w-3.5 h-3.5 ${active ? "text-[#C9A97A]" : "text-[#6B5F6B]/40"}`}
                    />
                    <span>{room}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-[26px] bg-[#2E1F2E] text-[#FFFDE8] border border-[#C9A97A]/30 shadow-2xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#C9A97A] font-semibold">
                Estimated Investment
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FFFDE8]/10 text-[#FFFDE8]/90 font-medium">
                {bhk} • {tier} Tier
              </span>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl text-[#FFFDE8] font-normal">
                ₹{currentPrice.min}L – ₹{currentPrice.max}L*
              </div>
              <p className="text-xs text-[#FFFDE8]/70">
                *Approximate cost based on standard {bhk} carpet area. Exact pricing finalized after
                floor plan audit.
              </p>
            </div>

            <div className="p-4 rounded-[18px] bg-[#4F3150]/50 border border-[#FFFDE8]/15 space-y-2 text-xs sm:text-sm text-[#FFFDE8]/90">
              <div className="flex items-center justify-between">
                <span>Handover Guarantee:</span>
                <strong className="text-[#C9A97A] font-serif">{currentPrice.days}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Warranty on Modular Units:</span>
                <strong className="text-[#C9A97A] font-serif">10 Years Genuine</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Material Standard:</span>
                <strong className="text-[#FFFDE8] font-serif">BWR Marine Ply + Blum/Hettich</strong>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <button type="button" onClick={handleEstimateAction} className="btn-cream w-full">
              <span>Get Detailed BOQ Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-[#FFFDE8]/60">
              Includes complimentary 2D layout planning and designer consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
