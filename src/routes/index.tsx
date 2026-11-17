import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Building2,
  Calculator,
  Check,
  Compass,
  Headphones,
  Home,
  KeyRound,
  Layers,
  Layout,
  Menu,
  MessageSquare,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

import bedroomImage from "@/assets/hue-pie-bedroom.jpg";
import kitchenImage from "@/assets/hue-pie-kitchen.jpg";
import livingLuxuryImage from "@/assets/hue-pie-living-luxury.jpg";
import livingRoomImage from "@/assets/hue-pie-living-room.jpg";
import materialsImage from "@/assets/hue-pie-materials.jpg";
import scandinavianImage from "@/assets/hue-pie-scandinavian-warm.jpg";
import wardrobeImage from "@/assets/hue-pie-wardrobe-suite.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { ProjectDetailsModal, type ProjectDetail } from "@/components/ProjectDetailsModal";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hue & Pie | Beautiful Homes, Designed for You" },
      {
        name: "description",
        content:
          "End-to-end home interiors tailored to your lifestyle and budget. 45-day move-in guarantee, 10-year warranty, and factory precision.",
      },
      { property: "og:title", content: "Hue & Pie | Interiors, Your Way" },
      {
        property: "og:description",
        content:
          "End-to-end home interiors tailored to your lifestyle and budget. 45-day move-in guarantee, 10-year warranty, and factory precision.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

// Streamlined for laptop and desktop so links never wrap
const desktopNavLinks = [
  { label: "Why Us", href: "#why-us" },
  { label: "Budgets", href: "#budgets" },
  { label: "Offerings", href: "#offerings" },
  { label: "Projects", href: "#projects" },
  { label: "Styles", href: "#styles" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
];

// Full links for mobile drawer
const allNavLinks = [
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Homes by Budget", href: "#budgets" },
  { label: "Our Offerings", href: "#offerings" },
  { label: "Recent Projects", href: "#projects" },
  { label: "Interior Styles", href: "#styles" },
  { label: "Material Partners", href: "#partners" },
  { label: "Get Free Estimate", href: "#estimate" },
  { label: "Our Process", href: "#process" },
  { label: "Customer Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
];

const featuredProjects: ProjectDetail[] = [
  {
    id: "clay-linen",
    number: "01",
    name: "The Clay & Linen Residence",
    category: "Living & Entertaining",
    scope: "Complete Living, Dining, Bar Cabinetry & Acoustic Ceilings",
    locationNote: "Indiranagar, Bangalore • 1,850 Sq.Ft Apartment",
    description:
      "A serene, tactile living pavilion shaped around morning light, natural linen textures, fluted wall accents, and warm walnut joinery.",
    designStory:
      "Crafted for an active family who host frequently, this space features continuous fluted paneling that conceals storage and wiring while establishing an acoustic, gallery-grade atmosphere.",
    spatialFeatures: [
      "Concealed acoustic wall panels in natural walnut",
      "Curved low-credenza with integrated warm ambient LED channels",
      "Bespoke travertine dry-bar with brass handle detailing",
      "Seamless flush-to-wall utility access doors",
    ],
    materialsUsed: [
      "Century BWR Marine Grade Plywood (IS:710)",
      "Natural American Walnut Fluted Veneer",
      "Häfele Soft-Close Blum Hinges & Concealed Slides",
      "Brushed Champagne Brass Trim Elements",
    ],
    image: livingRoomImage,
    alt: "The Clay & Linen Residence living room",
  },
  {
    id: "nordic-walnut",
    number: "02",
    name: "The Nordic Walnut Suite",
    category: "Master Bedrooms",
    scope: "Master Suite, Upholstered Headboard, Dresser & Study Nook",
    locationNote: "Jubilee Hills, Hyderabad • 420 Sq.Ft Suite",
    description:
      "A calm sanctuary defined by low-profile platform bedding, integrated brass wall sconces, fluted oak wardrobes, and tactile woven finishes.",
    designStory:
      "Designed to feel like a high-end boutique resort, the bedroom balances soft ambient cove lighting with functional, dust-free floor-to-ceiling wardrobe joinery.",
    spatialFeatures: [
      "Floor-to-ceiling wardrobe with sensor-activated interior lighting",
      "Floating nightstands with integrated wireless charging bays",
      "Acoustically padded woven linen feature headboard",
      "Concealed vanity dresser with anti-fog lighted mirror",
    ],
    materialsUsed: [
      "Marine Grade BWR Plywood with Zero-Formaldehyde Emissions",
      "Matte Charcoal & Warm Oak Synchronized Laminates",
      "Hettich Sensys Soft-Close Concealed Hardware",
      "Natural Linen and Bouclé Textured Wall Finish",
    ],
    image: bedroomImage,
    alt: "The Nordic Walnut Suite master bedroom",
  },
  {
    id: "muted-sage",
    number: "03",
    name: "The Muted Sage Modular Kitchen",
    category: "Modular Kitchens",
    scope: "Island Kitchen, Quartz Counters, Pantry Pull-Outs & Breakfast Bar",
    locationNote: "Whitefield, Bangalore • 160 Sq.Ft Kitchen",
    description:
      "An ergonomic culinary workspace balancing matte sage-toned cabinetry, fluted glass upper units, durable quartz counters, and German hardware.",
    designStory:
      "Built for passionate home chefs, this modular kitchen follows the golden work triangle strictly while concealing dishwashers and waste disposal systems behind seamless fronts.",
    spatialFeatures: [
      "Tandem drawer organizers with 50kg load capacity each",
      "Corner carousel pull-out eliminating blind dead zones",
      "Under-cabinet high-CRI task lighting with touch sensor",
      "Integrated tall pantry unit with tiered wire baskets",
    ],
    materialsUsed: [
      "100% Calibrated BWR Marine Ply with Edge Seal Tech",
      "Matte Anti-Fingerprint Acrylic Shutters",
      "Blum Legrabox Soft-Close Drawer Systems",
      "Composite Quartz Countertop with Seamless Drain Grooves",
    ],
    image: kitchenImage,
    alt: "The Muted Sage modular kitchen",
  },
  {
    id: "japandi-wardrobe",
    number: "04",
    name: "The Minimalist Japandi Wardrobe Suite",
    category: "Wardrobes & Storage",
    scope: "Walk-in Wardrobe, Accessory Island & Full-Length Vanity",
    locationNote: "Bandra, Mumbai • 210 Sq.Ft Dressing Area",
    description:
      "Architectural wardrobe architecture uniting fluted bronze glass, warm ash joinery, bespoke drawer inserts, and motion-activated illumination.",
    designStory:
      "Every partition was customized for client attire, jewelry collections, and luggage storage, ensuring clean sightlines and zero clutter throughout the suite.",
    spatialFeatures: [
      "Tinted glass sliding shutters with ultra-slim aluminum profiles",
      "Velvet-lined jewelry and watch storage trays",
      "Dedicated long-hanging coats and sari organizers",
      "Soft pneumatic closing dampers on every door and drawer",
    ],
    materialsUsed: [
      "BWR Marine Grade Core Ply with Melamine Backing",
      "Anodized Champagne Bronze Aluminum Profiles",
      "Toughened 4mm Ultra-Clear Glass with Bronze Tint",
      "Häfele Wardrobe Motion Lift Systems",
    ],
    image: wardrobeImage,
    alt: "Minimalist Japandi wardrobe suite",
  },
];

const homeBudgets = [
  {
    config: "2 BHK Interiors",
    tag: "Essential & Compact",
    scope: "Living, Dining, Modular Kitchen & 2 Bedrooms",
    desc: "Optimized layouts, smart storage, factory-finished modular joinery, and durable BWR marine ply core.",
    image: scandinavianImage,
  },
  {
    config: "3 BHK Interiors",
    tag: "Most Popular",
    scope: "Living, Dining, Master Suite, Guest & Kids Room",
    desc: "Complete custom cabinetry, architectural false ceilings, layered lighting, premium laminates, and German hardware.",
    image: livingLuxuryImage,
  },
  {
    config: "4 BHK & Duplex",
    tag: "Spacious Luxury",
    scope: "Grand Living, Dining, Lounge, 4 Luxury Bedrooms",
    desc: "Architectural fluted paneling, walk-in closets, bespoke quartz island, and gallery-grade acoustic accents.",
    image: livingRoomImage,
  },
  {
    config: "Luxury Villas",
    tag: "Turnkey Bespoke",
    scope: "End-to-End Architectural Joinery & Styling",
    desc: "Imported hardware, natural veneers, custom entertainment pavilions, and complete turnkey civil execution.",
    image: wardrobeImage,
  },
];

const interiorStyles = [
  {
    name: "Modern Luxury",
    desc: "Rich veneers, ambient cove lighting, warm brass accents, and subtle marble textures.",
    image: livingLuxuryImage,
  },
  {
    name: "Contemporary",
    desc: "Clean geometric profiles, neutral undertones, textured fabrics, and purposeful ergonomics.",
    image: livingRoomImage,
  },
  {
    name: "Minimalist",
    desc: "Uncluttered surfaces, hidden touch-to-open storage, muted palettes, and tranquil spatial flow.",
    image: scandinavianImage,
  },
  {
    name: "Scandinavian",
    desc: "Light natural oak, abundant sunlight, tactile boucle fabrics, and relaxed residential warmth.",
    image: materialsImage,
  },
  {
    name: "Classic Elegance",
    desc: "Refined wall moldings, rich deep tones, soft brass detailing, and timeless architectural grace.",
    image: bedroomImage,
  },
  {
    name: "Indian Contemporary",
    desc: "Warm teak finishes, artisanal textures, brass trims, and modern clean-lined silhouettes.",
    image: kitchenImage,
  },
];

const trustedPartners = [
  {
    name: "Hettich",
    category: "German Hardware & Drawer Systems",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hettich_logo.svg/320px-Hettich_logo.svg.png",
  },
  {
    name: "Hafele",
    category: "Architectural Fittings & Hinges",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/H%C3%A4fele_logo.svg/320px-H%C3%A4fele_logo.svg.png",
  },
  {
    name: "Saint-Gobain",
    category: "High-Clarity Glass & Mirrors",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Saint-Gobain_logo.svg/320px-Saint-Gobain_logo.svg.png",
  },
  {
    name: "Merino",
    category: "High-Pressure Premium Laminates",
    logo: "https://www.merinogroup.com/images/merino-logo.png",
  },
  {
    name: "Blum",
    category: "Precision Motion & Lift Systems",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Julius_Blum_GmbH_logo.svg/320px-Julius_Blum_GmbH_logo.svg.png",
  },
  {
    name: "Asian Paints",
    category: "Royale Luxury Low-VOC Finishes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Asian_paints_logo.svg/320px-Asian_paints_logo.svg.png",
  },
  {
    name: "CenturyPly",
    category: "BWR Marine Grade Structural Ply",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/CenturyPly_Logo.svg/320px-CenturyPly_Logo.svg.png",
  },
  {
    name: "Greenlam",
    category: "Antibacterial Designer Surfaces",
    logo: "https://www.greenlam.com/images/logo.png",
  },
];

const customerTestimonials = [
  {
    quote:
      "The 45-day move-in guarantee was strictly honoured. From 3D design to the final walk-in wardrobe handover, the finish on our walnut joinery is showroom quality.",
    author: "Arvind & Priya N.",
    property: "Prestige Lakeside, Bangalore",
    rating: 5,
  },
  {
    quote:
      "Zero hidden fees, zero price escalation midway. The 3D render matched our actual apartment 100%. Our modular kitchen is an absolute dream to cook in.",
    author: "Dr. Rohit & Shweta K.",
    property: "My Home Bhooja, Hyderabad",
    rating: 5,
  },
  {
    quote:
      "Hue & Pie transformed our builder shell into a refined home. Every millimeter of storage was optimized, and their project coordinator handled all site checks.",
    author: "Meera & Sameer V.",
    property: "Oberoi Exquisite, Mumbai",
    rating: 5,
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Consultation & Discovery",
    phase: "Days 1-5 • Spatial Discovery",
    desc: "Detailed lifestyle audit, 2D floor-plan review, site measurements, and preliminary transparent budget outline.",
    icon: Phone,
  },
  {
    number: "02",
    title: "3D Design & Planning",
    phase: "Days 6-18 • Concept & Renders",
    desc: "Photorealistic 3D room renders, physical material sampling (veneers, acrylics, quartz), and finalized locked quotes.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Factory CNC Fabrication",
    phase: "Days 19-38 • Precision Build",
    desc: "Automated computer-controlled panel cutting, PUR edge sealing, and 140-point quality audit in our factory.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Clean Handover & Move-In",
    phase: "Days 39-45 • Handover",
    desc: "Rapid 10-day clean modular assembly on site, acoustic checks, post-install deep cleaning, and 10-year warranty certificate.",
    icon: KeyRound,
  },
];

const faqs = [
  {
    question: "What is covered under Hue & Pie’s 10-year warranty?",
    answer:
      "Our 10-year genuine warranty covers our Boiling Water Resistant (BWR) marine plywood core against bubbling, termite damage, and delamination, along with certified German hinges and drawer runners against manufacturing defects.",
  },
  {
    question: "How do you guarantee the 45-day move-in timeline?",
    answer:
      "We pre-fabricate all modular components with precision computer-controlled CNC machinery in our factory while civil work happens on site. On-site installation takes only 10-14 days, completely eliminating traditional carpenter delays.",
  },
  {
    question: "Can we customize dimensions, colors, and materials?",
    answer:
      "Yes, 100%. We do not force rigid catalog dimensions. Every wardrobe, kitchen module, and living console is built down to the exact millimeter of your floor plan with your choice of laminates, acrylics, or veneers.",
  },
  {
    question: "How does the transparent payment schedule work?",
    answer:
      "We operate on clear milestone-based payments tied to verified project stages: Initial Booking (10%), 3D Design Approval & Production Initiation (40%), Factory Ready Dispatch (40%), and Final Handover Audit (10%). No surprise escalations.",
  },
  {
    question: "Which cities do you currently execute projects in?",
    answer:
      "We currently design and deliver complete home interiors across Bangalore, Hyderabad, and Mumbai, with dedicated local design studios and site supervision teams in each city.",
  },
];

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState("");
  const [consultationStyle, setConsultationStyle] = useState("");

  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const [activeProjectFilter, setActiveProjectFilter] = useState("All");
  const [activeTransformationTab, setActiveTransformationTab] = useState(0);

  // Quick Hero Form State
  const [heroForm, setHeroForm] = useState({
    name: "",
    phone: "",
    city: "Bangalore",
    bhk: "3 BHK",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 40);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when full-screen mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenConsultation = (service = "", style = "") => {
    setConsultationService(service);
    setConsultationStyle(style);
    setConsultationOpen(true);
    setMobileMenuOpen(false);
  };

  const handleOpenProjectDetails = (proj: ProjectDetail) => {
    setSelectedProject(proj);
    setProjectModalOpen(true);
  };

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroForm.name || !heroForm.phone) return;
    handleOpenConsultation(`Complete Interiors (${heroForm.bhk})`, `Location: ${heroForm.city}`);
  };

  const filteredProjects =
    activeProjectFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) =>
        p.category.toLowerCase().includes(activeProjectFilter.toLowerCase()),
      );

  return (
    <main className="bg-[#FFFDE8] text-[#2B2230] min-h-screen selection:bg-[#664465] selection:text-[#FFFDE8] font-sans antialiased text-base">
      {/* Unified Site Header - 100% White-Cream Text Guaranteed */}
      <header
        className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledPastHero ? "site-header-scrolled" : "site-header-transparent"
          }`}
        role="banner"
      >
        <div className="section-wrap flex items-center justify-between w-full">
          {/* Brand Logo - Exact Typographic Title Case with Tagline */}
          <a
            className="wordmark group"
            href="#home"
            aria-label="Hue & Pie - home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="wordmark-name text-[#FFFDE8] tracking-tight block text-center">
              Hue &amp; Pie
            </span>
            <span className="wordmark-tagline block text-center">Interiors, Your Way.</span>
          </a>

          {/* Right Header Action Buttons - Direct Phone, Price Calculator, and Free Quote */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Phone Number as Button (Desktop/Tablet) */}
            <a
              href="tel:+919845012345"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#FFFDE8]/40 bg-transparent text-[#FFFDE8] hover:bg-[#FFFDE8]/15 hover:border-[#FFFDE8]/70 transition-all text-xs lg:text-sm font-medium tracking-wide"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 98450 12345</span>
            </a>

            {/* Mobile Call Icon Button */}
            <a
              href="tel:+919845012345"
              className="md:hidden w-9 h-9 rounded-full border border-[#FFFDE8]/40 bg-transparent text-[#FFFDE8] flex items-center justify-center hover:bg-[#FFFDE8]/15 transition-colors"
              aria-label="Call +91 98450 12345"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Price Calculator Button */}
            <a
              href="#estimate"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#FFFDE8]/40 bg-transparent text-[#FFFDE8] hover:bg-[#FFFDE8]/15 hover:border-[#FFFDE8]/70 transition-all text-xs lg:text-sm font-medium tracking-wide cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Price Calculator</span>
            </a>

            {/* 1. Header Gold CTA Button */}
            <button
              type="button"
              style={{ backgroundColor: "#C9A97A", color: "#FFFFFF" }}
              className="btn-gold-cta px-3.5 sm:px-5 py-2 text-xs sm:text-sm whitespace-nowrap"
              onClick={() => handleOpenConsultation()}
            >
              <span style={{ color: "#FFFFFF" }}>Get Free Quote</span>
              <ArrowUpRight size={15} color="#FFFFFF" className="shrink-0" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden w-9 h-9 rounded-full border border-[#FFFDE8]/40 bg-[#FFFDE8]/10 text-[#FFFDE8] flex items-center justify-center cursor-pointer hover:bg-[#FFFDE8]/20 transition-colors"
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <X size={18} aria-hidden="true" className="text-[#FFFDE8]" />
              ) : (
                <Menu size={18} aria-hidden="true" className="text-[#FFFDE8]" />
              )}
            </button>
          </div>
        </div>

        {/* Full Screen Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="md:hidden fixed inset-0 z-[100] bg-[#664465] text-[#FFFDE8] flex flex-col justify-between overflow-y-auto px-6 py-6 shadow-2xl"
              style={{ minHeight: "100svh" }}
            >
              {/* Header inside overlay: Logo on left, Close button on right */}
              <div className="flex items-center justify-between pb-5 border-b border-[#FFFDE8]/15">
                <a
                  className="wordmark group"
                  href="#home"
                  aria-label="Hue & Pie - home"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="wordmark-name text-[#FFFDE8] tracking-tight block text-left">
                    Hue &amp; Pie
                  </span>
                  <span className="wordmark-tagline block text-left">Interiors, Your Way.</span>
                </a>

                {/* Prominent Close Icon Button */}
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-11 h-11 rounded-full border border-[#FFFDE8]/30 bg-[#FFFDE8]/10 text-[#FFFDE8] hover:bg-[#FFFDE8]/20 flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow-md"
                >
                  <X size={22} className="text-[#FFFDE8]" />
                </button>
              </div>

              {/* Main Navigation Links */}
              <div className="py-6 flex flex-col gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A97A]">
                  Navigation
                </span>
                <nav className="flex flex-col gap-3">
                  {[
                    { label: "Home", href: "#home" },
                    { label: "Recent Work", href: "#projects" },
                    { label: "Spaces for Every Budget", href: "#pricing" },
                    { label: "Why We're Different", href: "#benefits" },
                    { label: "Price Calculator", href: "#estimate" },
                    { label: "Client Stories", href: "#reviews" },
                    { label: "FAQ", href: "#faq" },
                  ].map((link, idx) => (
                    <motion.a
                      key={link.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.22, delay: 0.04 + idx * 0.03 }}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-serif text-2xl text-[#FFFDE8] hover:text-[#C9A97A] transition-colors flex items-center justify-between group py-1 border-b border-[#FFFDE8]/5"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={18} className="text-[#C9A97A] opacity-60 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Footer CTA & Contact section */}
              <div className="pt-5 border-t border-[#FFFDE8]/15 flex flex-col gap-3">
                {/* Free Quote Button */}
                <button
                  type="button"
                  style={{ backgroundColor: "#C9A97A", color: "#FFFFFF" }}
                  className="btn-gold-cta w-full py-3.5 text-sm font-bold shadow-lg"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleOpenConsultation();
                  }}
                >
                  <span style={{ color: "#FFFFFF" }}>Get Free Quote</span>
                  <ArrowUpRight size={16} color="#FFFFFF" className="shrink-0" />
                </button>

                {/* Call & WhatsApp actions */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+919845012345"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-full border border-[#FFFDE8]/25 bg-[#FFFDE8]/10 text-[#FFFDE8] text-xs font-medium hover:bg-[#FFFDE8]/20 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4 text-[#C9A97A]" />
                    <span>Call Us</span>
                  </a>

                  <a
                    href="https://wa.me/919845012345?text=Hi%20Hue%20%26%20Pie%20team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20interior%20design%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-full border border-[#25D366]/40 bg-[#25D366]/15 text-[#FFFDE8] text-xs font-medium hover:bg-[#25D366]/25 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="text-center pt-1 text-[11px] text-[#FFFDE8]/60">
                  Bangalore &bull; Hyderabad &bull; Mumbai &bull; Pune
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* =========================================================================
          SECTION 01 - HERO
          ========================================================================= */}
      <section
        className="relative min-h-screen lg:min-h-svh flex items-center overflow-hidden bg-[#664465]"
        id="home"
      >
        {/* Background image */}
        <img
          src={livingLuxuryImage}
          alt="Sunlit luxury living room designed by Hue & Pie"
          width={1808}
          height={1200}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: 0, transform: "translateZ(0)" }}
        />
        {/* Overlay — strong left shade on desktop, full dark backdrop on mobile */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#2B2230]/75 sm:bg-transparent"
          style={{
            zIndex: 1,
            background: [
              "linear-gradient(90deg, rgba(43,34,48,0.97) 0%, rgba(43,34,48,0.90) 40%, rgba(43,34,48,0.60) 65%, rgba(43,34,48,0.10) 100%)",
              "linear-gradient(0deg, rgba(43,34,48,0.70) 0%, transparent 50%)",
            ].join(", "),
          }}
        />

          {/* Content wrapper */}
          <div className="relative w-full section-wrap" style={{ zIndex: 2 }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-28 lg:py-24">

              {/* ── Left: headline + sub + CTA ── */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="lg:col-span-7 flex flex-col"
              >
                {/* Eyebrow */}
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A97A] mb-5">
                  <span className="w-6 h-px bg-[#C9A97A]" />
                  India's Premium Home Interiors
                </span>

                {/* Main headline */}
                <h1 className="font-serif font-normal text-[#FFFDE8] leading-[1.12] tracking-tight mb-5"
                    style={{ fontSize: "clamp(36px, 5.5vw, 68px)" }}>
                  Beautiful Homes,<br />
                  <em className="text-[#C9A97A] italic">Designed for You.</em>
                </h1>

                {/* Subline */}
                <p className="text-[#FFFDE8]/85 leading-relaxed mb-8 max-w-[520px]"
                   style={{ fontSize: "clamp(15px, 1.2vw, 18px)" }}>
                  End-to-end home interiors tailored to your lifestyle, space, and budget —
                  factory precision, 45-day move-in guarantee, and genuine craftsmanship.
                </p>

                {/* CTA buttons */}
                <div className="hero-actions flex flex-wrap items-center gap-3">
                  {/* 2. Hero Primary Gold CTA Button */}
                  <button
                    type="button"
                    onClick={() => handleOpenConsultation()}
                    style={{ backgroundColor: "#C9A97A", color: "#FFFFFF" }}
                    className="btn-gold-cta px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-bold shadow-lg hover:shadow-xl w-auto"
                  >
                    <span style={{ color: "#FFFFFF" }}>Get Free Quote</span>
                    <ArrowUpRight size={16} color="#FFFFFF" className="shrink-0" />
                  </button>
                  <a
                    href="#projects"
                    style={{ color: "#FFFFFF" }}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm !text-white font-semibold text-sm hover:bg-white/20 transition-all cursor-pointer shadow-sm hover:shadow-md w-auto"
                  >
                    <span style={{ color: "#FFFFFF" }}>See Our Work</span>
                    <ArrowUpRight size={16} color="#FFFFFF" className="shrink-0" />
                  </a>
                </div>
              </motion.div>

              {/* ── Right: form card — visible on mobile and desktop ── */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.18 }}
                id="hero-consultation-card"
                className="block lg:col-span-5 w-full mt-8 lg:mt-0"
              >
              <div className="rounded-[28px] overflow-hidden shadow-2xl border border-[#FFFDE8]/15"
                   style={{ background: "rgba(255,253,232,0.96)", backdropFilter: "blur(24px)" }}>

                {/* Card header */}
                <div className="px-6 sm:px-8 pt-6 pb-5 border-b border-[#E3D9C6]" style={{ background: "rgba(243,236,221,0.5)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#664465]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#664465]">
                      Free 3D Consultation
                    </span>
                  </div>
                  <h2 className="font-serif text-[22px] sm:text-[26px] font-normal text-[#2B2230] leading-tight">
                    Talk to a Senior Designer
                  </h2>
                  <p className="text-sm text-[#6B5F6B] mt-1">
                    Get an itemised 3D plan &amp; accurate quote — zero obligation.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleHeroFormSubmit} className="px-6 sm:px-8 py-6 space-y-4">
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      required
                      id="hero-name"
                      placeholder=" "
                      value={heroForm.name}
                      onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                      className="peer w-full px-4 pt-5 pb-2.5 rounded-2xl bg-white border border-[#E3D9C6] text-[#2B2230] text-sm placeholder-transparent focus:outline-none focus:border-[#664465] focus:ring-1 focus:ring-[#664465]/20 transition-all"
                    />
                    <label
                      htmlFor="hero-name"
                      className="absolute left-4 top-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#664465] peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[#6B5F6B]/55 peer-placeholder-shown:font-normal transition-all pointer-events-none"
                    >
                      Your Full Name
                    </label>
                  </div>

                  {/* Phone */}
                  <div className="flex rounded-2xl border border-[#E3D9C6] bg-white overflow-hidden focus-within:border-[#664465] focus-within:ring-1 focus-within:ring-[#664465]/20 transition-all">
                    <span className="px-4 flex items-center text-[#664465] font-bold text-sm border-r border-[#E3D9C6] bg-[#F3ECDD] shrink-0">+91</span>
                    <input
                      type="tel"
                      required
                      placeholder="Phone number"
                      value={heroForm.phone}
                      onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                      className="w-full px-4 py-3.5 text-sm text-[#2B2230] placeholder:text-[#6B5F6B]/50 bg-transparent focus:outline-none"
                    />
                  </div>

                  {/* City + BHK */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        id: "hero-city", label: "City", value: heroForm.city,
                        onChange: (v: string) => setHeroForm({ ...heroForm, city: v }),
                        options: ["Bangalore", "Hyderabad", "Mumbai", "Pune"],
                      },
                      {
                        id: "hero-bhk", label: "Property", value: heroForm.bhk,
                        onChange: (v: string) => setHeroForm({ ...heroForm, bhk: v }),
                        options: ["1 BHK", "2 BHK", "3 BHK", "4+ BHK / Villa"],
                      },
                    ].map((f) => (
                      <div key={f.id} className="relative">
                        <select
                          id={f.id}
                          value={f.value}
                          onChange={(e) => f.onChange(e.target.value)}
                          className="w-full px-4 pt-5 pb-2.5 rounded-2xl bg-white border border-[#E3D9C6] text-[#2B2230] text-sm focus:outline-none focus:border-[#664465] appearance-none cursor-pointer"
                        >
                          {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                        <span className="absolute left-4 top-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#664465] pointer-events-none">
                          {f.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 3. Hero Form Submit Gold CTA Button */}
                  <button
                    type="submit"
                    style={{ backgroundColor: "#C9A97A", color: "#FFFFFF" }}
                    className="btn-gold-cta w-full py-3.5 text-sm font-bold shadow-lg hover:shadow-xl"
                  >
                    <span style={{ color: "#FFFFFF" }}>Get Free Quote</span>
                    <ArrowUpRight size={16} color="#FFFFFF" className="shrink-0" />
                  </button>

                  <p className="text-[11px] text-center text-[#6B5F6B] flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#664465]" />
                    <span>100% Free &bull; Zero Spam &bull; Direct Designer Callback</span>
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 - WHY CHOOSE HUE & PIE? (4 TRUST INDICATORS ROW)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F3ECDD]/50 border-b border-[#E3D9C6]" id="why-us">
        <div className="section-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          >
            <h2 className="section-title text-[#2B2230] mb-2">Why We're Different</h2>
            <p className="text-base sm:text-lg text-[#6B5F6B]">
              Engineered precision, fixed transparent pricing, and commitments backed by guarantee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: "45 Days",
                title: "Handover Guarantee",
                desc: "Precision factory pre-fabrication ensures timely move-in with penalty-backed commitment.",
              },
              {
                stat: "10 Years",
                title: "Genuine Warranty",
                desc: "Boiling Water Resistant (BWR) marine ply and certified soft-close German hardware.",
              },
              {
                stat: "140+",
                title: "Quality Checks",
                desc: "Multi-stage factory audits for edge-banding, joint alignment, moisture, and load tolerance.",
              },
              {
                stat: "0%",
                title: "Hidden Costs",
                desc: "Itemized quotes locked before manufacturing. What you sign is what you pay.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-[24px] bg-[#FFFDE8] border border-[#E3D9C6] shadow-xs hover:border-[#664465] hover:shadow-md transition-all"
              >
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#664465] block mb-2">
                  {item.stat}
                </span>
                <h3 className="font-sans text-base sm:text-lg font-medium text-[#2B2230] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#2B2230] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 - HOMES FOR EVERY BUDGET (2 IMAGES PER ROW, NO BADGES)
          ========================================================================= */}
      <section className="py-14 sm:py-24 section-wrap" id="budgets">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="section-title text-[#2B2230] mb-2">Spaces for Every Budget</h2>
          <p className="text-base sm:text-lg text-[#6B5F6B]">
            Explore beautiful interiors designed around your needs and budget.
          </p>
        </motion.div>

        {/* Exactly 2 cards per row on tablet and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {homeBudgets.map((item, idx) => (
            <motion.div
              key={item.config}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              onClick={() => handleOpenConsultation(item.config)}
              className="rounded-[28px] overflow-hidden bg-[#FFFDE8] border border-[#E3D9C6] shadow-sm hover:shadow-2xl hover:border-[#664465] transition-all duration-300 group cursor-pointer"
            >
              {/* Image with title overlay at bottom */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.config}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2B2230]/80 to-transparent pt-10 pb-5 px-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#FFFDE8]">
                    {item.config}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 - OUR INTERIORS OFFERING (3 COMPACT CARDS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F3ECDD]/40 border-y border-[#E3D9C6]" id="offerings">
        <div className="section-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          >
            <h2 className="section-title text-[#2B2230] mb-2">What We Do</h2>
            <p className="text-base sm:text-lg text-[#6B5F6B]">
              Comprehensive interior solutions crafted with thoughtful design and premium materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="p-7 sm:p-8 rounded-[26px] bg-[#FFFDE8] border border-[#E3D9C6] shadow-xs"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#664465]/10 text-[#664465] flex items-center justify-center mb-5">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#2B2230] mb-4">Services</h3>
              <ul className="space-y-3.5 text-sm sm:text-base text-[#2B2230]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>Modular Kitchens &amp; Breakfast Counters</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>Custom Wardrobes &amp; Walk-in Closets</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>False Ceiling &amp; Layered Ambient Lighting</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>Living Consoles, TV Units &amp; Fluted Paneling</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>Complete Turnkey Civil &amp; Move-in Execution</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2: Design Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="p-7 sm:p-8 rounded-[26px] bg-[#FFFDE8] border border-[#E3D9C6] shadow-xs"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#664465]/10 text-[#664465] flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#2B2230] mb-4">Benefits</h3>
              <ul className="space-y-3.5 text-sm sm:text-base text-[#2B2230]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>Dedicated Senior Architect for Your Home</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>Photorealistic 3D Renders Before Production</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>Custom Space Planning &amp; Storage Ergonomics</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>Unrestricted Dimensions (Zero Catalog Constraints)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>Dedicated Single-Point Project Coordinator</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 3: Quality & Materials */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="p-7 sm:p-8 rounded-[26px] bg-[#FFFDE8] border border-[#E3D9C6] shadow-xs"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#664465]/10 text-[#664465] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#2B2230] mb-4">
                Materials
              </h3>
              <ul className="space-y-3.5 text-sm sm:text-base text-[#2B2230]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>100% Calibrated BWR Marine Ply Core (IS:710)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>Certified Soft-Close German Hardware (Häfele/Hettich)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>Anti-Bubble Hot-Pressed European Laminates</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>Zero-Formaldehyde &amp; Low-VOC Healthy Finishes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4.5 h-4.5 text-[#664465] shrink-0" />
                  <span>140-Point Pre-Dispatch Factory Audit Check</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 - OUR RECENT PROJECTS (CLEAN VISUAL PORTFOLIO GRID)
          ========================================================================= */}
      <section className="py-16 sm:py-24 section-wrap" id="projects">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <h2 className="section-title text-[#2B2230] mb-2">Recent Work</h2>
            <p className="text-base sm:text-lg text-[#6B5F6B]">
              Real homes designed and delivered across Bangalore, Hyderabad, and Mumbai.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {["All", "Living", "Bedrooms", "Kitchens", "Wardrobes"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveProjectFilter(cat)}
                className={`tab-pill ${activeProjectFilter === cat ? "tab-pill-active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              onClick={() => handleOpenProjectDetails(proj)}
              className="group cursor-pointer rounded-[26px] overflow-hidden border border-[#E3D9C6] shadow-xs hover:border-[#664465] hover:shadow-xl transition-all"
            >
              {/* Image with title overlay */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2B2230]/80 to-transparent pt-10 pb-5 px-5">
                  <span className="font-serif text-lg font-medium text-[#FFFDE8]">{proj.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 - FIND YOUR HOME INTERIOR STYLE (SPACIOUS 3-COLUMN LUXURY GRID)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F3ECDD]/40 border-y border-[#E3D9C6]" id="styles">
        <div className="section-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          >
            <h2 className="section-title text-[#2B2230] mb-2">Choose Your Style</h2>
            <p className="text-base sm:text-lg text-[#6B5F6B]">
              Discover designs that match your taste and lifestyle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {interiorStyles.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => handleOpenConsultation("", item.name)}
                className="group cursor-pointer rounded-[24px] overflow-hidden border border-[#E3D9C6] shadow-xs hover:shadow-xl hover:border-[#664465] transition-all"
              >
                {/* Image with title overlay */}
                <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2B2230]/75 to-transparent pt-10 pb-5 px-5">
                    <h3 className="font-serif text-xl font-medium text-[#FFFDE8]">{item.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 - OUR TRUSTED PARTNERS (HARDWARE & MATERIALS STRIP)
          ========================================================================= */}
      <section className="py-14 sm:py-18 section-wrap" id="partners">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-9"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#2B2230] mb-1.5">
            Trusted Brands We Use
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5F6B]">
            Collaborations that bring enduring quality and engineering to every space.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {trustedPartners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              className="p-3.5 rounded-xl bg-[#FFFDE8] border border-[#E3D9C6] text-center shadow-xs hover:border-[#664465] transition-colors flex flex-col items-center justify-center gap-2 min-h-[80px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 w-auto max-w-[88px] object-contain mx-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const next = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (next) next.style.display = "block";
                }}
              />
              <span className="font-serif text-sm font-medium text-[#2B2230] hidden">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 - GET A FREE ESTIMATE FOR YOUR HOME INTERIORS
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#664465] text-[#FFFDE8]" id="estimate">
        <div className="section-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#FFFDE8] mb-2">
              Estimate Your Home Cost
            </h2>
            <p className="text-sm sm:text-base text-[#FFFDE8]/85">
              Calculate the approximate cost of your interiors with verified itemized rates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Home,
                title: "Full Home",
                desc: "Complete living, dining, modular kitchen, and bedrooms tailored to your floor plan.",
                action: "Calculate Full Home",
              },
              {
                icon: Layout,
                title: "Kitchen",
                desc: "L-shaped, Parallel, or Island layouts with German tandem boxes and anti-fingerprint finishes.",
                action: "Calculate Kitchen",
              },
              {
                icon: Layers,
                title: "Wardrobes",
                desc: "Floor-to-ceiling sliding or swing wardrobes with custom drawer inserts and sensor lighting.",
                action: "Calculate Wardrobe",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                className="p-7 sm:p-8 rounded-[26px] bg-[#664465]/80 border border-[#C9A97A]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#C9A97A]/20 text-[#C9A97A] flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#FFFDE8] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#FFFDE8]/85 mb-6 leading-relaxed">{item.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenConsultation(item.title)}
                  className="btn-cream w-full justify-center text-sm py-3 cursor-pointer"
                >
                  <span>{item.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09 - YOUR HOME INTERIOR JOURNEY (ANIMATED CONNECTED TIMELINE)
          ========================================================================= */}
      <section className="py-14 sm:py-24 section-wrap" id="process">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20"
        >
          <span className="eyebrow block mb-2">Simple &amp; Clear</span>
          <h2 className="section-title text-[#2B2230] mb-2">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-[#6B5F6B]">
            From initial design consultation to final handover in four structured stages.
          </p>
        </motion.div>

        {/* Connected Animated Journey Grid */}
        <div className="relative">
          {/* Subtle connecting track line on desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-[#664465]/15 via-[#C9A97A] to-[#664465]/15 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {journeySteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-[26px] bg-[#FFFDE8] border border-[#E3D9C6] shadow-xs hover:border-[#664465] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Glowing Milestone Step Node */}
                    <div className="w-12 h-12 rounded-2xl bg-[#664465] text-[#FFFDE8] flex items-center justify-center font-serif text-xl font-bold shadow-md border-2 border-[#C9A97A]">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#2B2230] mb-2.5">
                    {step.title}
                  </h3>
                  <span className="text-sm text-[#664465] font-medium block mb-2">{step.phase}</span>
                  <p className="text-sm text-[#2B2230] leading-relaxed font-normal">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 - REAL TRANSFORMATIONS (BEFORE & AFTER SLIDER)
          ========================================================================= */}
      <section
        className="py-16 sm:py-24 bg-[#F3ECDD]/40 border-y border-[#E3D9C6]"
        id="transformations"
      >
        <div className="section-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-9"
          >
            <div>
              <span className="eyebrow block mb-1">See the Difference</span>
              <h2 className="section-title text-[#2B2230] mb-2">Before &amp; After</h2>
              <p className="text-base sm:text-lg text-[#6B5F6B]">
                Drag the slider to see how bare rooms transform into curated living spaces.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: 0, label: "Living Room" },
                { id: 1, label: "Modular Kitchen" },
                { id: 2, label: "Wardrobe Suite" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTransformationTab(tab.id)}
                  className={`tab-pill ${activeTransformationTab === tab.id ? "tab-pill-active" : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="p-4 sm:p-6 rounded-[26px] bg-[#FFFDE8] border border-[#E3D9C6] shadow-sm">
            {activeTransformationTab === 0 && (
              <BeforeAfterSlider
                beforeImage={livingRoomImage}
                afterImage={livingLuxuryImage}
                title="Living & Dining Pavilion • 380 Sq.Ft"
                description="Builder bare-shell transformed with acoustic walnut fluting, concealed LED cove lighting, and curved credenza."
                beforeLabel="Before • Builder Bare Shell"
                afterLabel="After • Hue & Pie Curated"
              />
            )}
            {activeTransformationTab === 1 && (
              <BeforeAfterSlider
                beforeImage={kitchenImage}
                afterImage={materialsImage}
                title="Modular Kitchen • 140 Sq.Ft"
                description="Cold granite kitchen upgraded with ergonomic BWR cabinetry, quartz backsplash, and Blum lift-up systems."
                beforeLabel="Before • Builder Slab"
                afterLabel="After • Modular Architecture"
              />
            )}
            {activeTransformationTab === 2 && (
              <BeforeAfterSlider
                beforeImage={bedroomImage}
                afterImage={wardrobeImage}
                title="Master Suite Wardrobes • 200 Sq.Ft"
                description="Standard niche transformed into floor-to-ceiling tinted glass wardrobes with motion sensor lighting."
                beforeLabel="Before • Empty Wall Niche"
                afterLabel="After • Walk-in Wardrobe Suite"
              />
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 - HAPPY CUSTOMERS (AUTO-SCROLLING REVIEWS MARQUEE)
          ========================================================================= */}
      <section className="py-16 sm:py-24 overflow-hidden" id="reviews">
        <div className="section-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          >
            <h2 className="section-title text-[#2B2230] mb-2">What Clients Say</h2>
            <p className="text-base sm:text-lg text-[#6B5F6B]">
              Authentic experiences from homeowners who trusted us with their dream interiors.
            </p>
          </motion.div>
        </div>

        {/* Infinite auto-scroll marquee */}
        <div className="relative w-full">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#FFFDE8] to-transparent" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#FFFDE8] to-transparent" />

          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...customerTestimonials, ...customerTestimonials, ...customerTestimonials].map((review, idx) => (
              <div
                key={idx}
                className="w-[300px] sm:w-[360px] shrink-0 p-5 sm:p-7 rounded-[24px] bg-[#FFFDE8] border border-[#E3D9C6] shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Google-style verified badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" aria-label="Google">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-xs font-semibold text-[#5F6368]">Google Review</span>
                    <span className="ml-auto text-xs text-[#FBBC05] font-bold tracking-tight">★★★★★</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#2B2230] leading-relaxed mb-5">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#E3D9C6]">
                  <span className="font-sans text-sm font-semibold text-[#2B2230] block">
                    {review.author}
                  </span>
                  <span className="text-xs text-[#664465] font-medium block mt-0.5">
                    {review.property}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12 - FAQS (TWO-COLUMN EDITORIAL LAYOUT)
          ========================================================================= */}
      <section className="py-12 sm:py-24 bg-[#F3ECDD]/40 border-t border-[#E3D9C6]" id="faq">
        <div className="section-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-start">
            {/* Left: heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <span className="eyebrow block mb-2">Got Questions?</span>
              <h2 className="font-serif text-2xl sm:text-[36px] font-normal text-[#2B2230] mb-3 leading-tight">
                Common Questions
              </h2>
              <p className="text-sm sm:text-base text-[#6B5F6B] leading-relaxed">
                Everything you need to know before starting your project.
              </p>
            </motion.div>

            {/* Right: Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="divide-y divide-[#E3D9C6] border-y border-[#E3D9C6]">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="border-b-0 group">
                    <AccordionTrigger className="text-base sm:text-xl font-medium text-[#2B2230] hover:text-[#664465] hover:no-underline py-4 sm:py-6 cursor-pointer text-left transition-colors leading-snug">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-[17px] text-[#6B5F6B] leading-relaxed pb-4 sm:pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Card Section - cream background with centered plum card */}
      <section className="py-16 sm:py-20 bg-[#F3ECDD]/50 border-t border-[#E3D9C6]" id="contact">
        <div className="section-wrap max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#664465] text-[#FFFDE8] rounded-[32px] px-8 py-12 sm:px-14 sm:py-16 text-center shadow-2xl"
          >
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#FFFDE8] mb-3">
              Start Your Home Journey
            </h2>
            <p className="text-sm sm:text-base text-[#FFFDE8]/85 mb-8 max-w-md mx-auto">
              Book a free design session with our senior architects in Bangalore, Hyderabad, or Mumbai.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenConsultation()}
                className="btn-cream w-full sm:w-auto text-sm py-3 px-8 cursor-pointer shadow-lg"
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight size={16} />
              </button>
              <a
                href="tel:+919845012345"
                className="btn-outline-light w-full sm:w-auto text-sm py-3 px-6"
              >
                <Phone size={15} />
                <span>Call +91 98450 12345</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - plum background */}
      <footer className="bg-[#664465] text-[#FFFDE8] py-14 border-t border-[#FFFDE8]/10">
        <div className="section-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="wordmark mb-3">
              <span className="wordmark-name text-[#FFFDE8] tracking-tight">
                Hue &amp; Pie
              </span>
              <span className="wordmark-tagline">Interiors, Your Way.</span>
            </div>
            <p className="text-sm text-[#FFFDE8]/75 leading-relaxed">
              Bespoke residential home interiors delivered with 45-day move-in assurance, 10-year
              marine ply warranty, and genuine craftsmanship.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C9A97A] mb-3">
              Design Studios
            </h4>
            <p className="text-sm text-[#FFFDE8]/80 space-y-1">
              <span className="block font-semibold text-[#FFFDE8]">Bangalore:</span> 100 Feet Rd,
              Indiranagar
              <span className="block font-semibold text-[#FFFDE8] mt-2">Hyderabad:</span> Road No.
              36, Jubilee Hills
              <span className="block font-semibold text-[#FFFDE8] mt-2">Mumbai:</span> Linking
              Road, Bandra West
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C9A97A] mb-3">
              Quick Links
            </h4>
            <ul className="text-sm text-[#FFFDE8]/80 space-y-1.5">
              <li>
                <a href="#why-us" className="hover:text-[#C9A97A] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#budgets" className="hover:text-[#C9A97A] transition-colors">
                  Homes by Budget
                </a>
              </li>
              <li>
                <a href="#offerings" className="hover:text-[#C9A97A] transition-colors">
                  Interiors Offering
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#C9A97A] transition-colors">
                  Recent Projects
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#C9A97A] transition-colors">
                  Before &amp; After Proof
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C9A97A] mb-3">
              Direct Contact
            </h4>
            <p className="text-sm text-[#FFFDE8]/80 space-y-2">
              <span className="block">Phone: +91 98450 12345</span>
              <span className="block">Email: enquiry@hueandpie.com</span>
              <span className="block text-[#C9A97A]">Mon - Sun: 10:00 AM - 8:00 PM</span>
            </p>
          </div>
        </div>

        <div className="section-wrap pt-6 border-t border-[#FFFDE8]/10 flex flex-col sm:flex-row items-center justify-between text-sm text-[#FFFDE8]/70 gap-2">
          <span>
            &copy; {new Date().getFullYear()} Hue &amp; Pie Interiors Private Limited. All rights
            reserved.
          </span>
          <span>Interiors, Your Way.</span>
        </div>
      </footer>

      {/* Global Modals */}
      <ConsultationDialog
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
        defaultService={consultationService}
        defaultStyle={consultationStyle}
      />

      <ProjectDetailsModal
        project={selectedProject}
        open={projectModalOpen}
        onOpenChange={setProjectModalOpen}
        onEnquire={(projName) => handleOpenConsultation(projName)}
      />

      {/* Floating Right Side - WhatsApp, Call, and Scroll to Top stacked */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2.5 sm:gap-3 items-end">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919845012345?text=Hi%20Hue%20%26%20Pie%2C%20I%20would%20like%20to%20know%20more%20about%20your%20interior%20design%20services"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-[#25D366]/20 hover:ring-[#25D366]/40 cursor-pointer"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 fill-white"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#2B2230] text-[#FFFDE8] text-xs font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden sm:inline-block">
            Chat on WhatsApp
          </span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+919845012345"
          aria-label="Call +91 98450 12345"
          className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#664465] text-[#FFFDE8] border border-[#C9A97A]/40 shadow-xl hover:bg-[#4F3150] hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-[#664465]/20 hover:ring-[#664465]/40 cursor-pointer"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A97A]" />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#2B2230] text-[#FFFDE8] text-xs font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden sm:inline-block">
            Call +91 98450 12345
          </span>
        </a>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              type="button"
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.7, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 15 }}
              transition={{ duration: 0.25 }}
              aria-label="Scroll to top"
              className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFFDE8] text-[#2B2230] border border-[#E3D9C6] shadow-xl hover:bg-[#664465] hover:text-[#FFFDE8] hover:border-[#664465] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-1" />
              <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#2B2230] text-[#FFFDE8] text-xs font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden sm:inline-block">
                Back to Top
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
