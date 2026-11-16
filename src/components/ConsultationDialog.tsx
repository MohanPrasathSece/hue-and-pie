import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle2, Send, Sparkles, X } from "lucide-react";

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
  defaultStyle?: string;
}

export function ConsultationDialog({
  open,
  onOpenChange,
  defaultService = "",
  defaultStyle = "",
}: ConsultationDialogProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Bangalore",
    spaceType: defaultService || "Complete Home Interiors",
    preferredStyle: defaultStyle || "Warm Minimalism",
    timeline: "Within 1-3 Months",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onOpenChange(false);
  };

  const mailtoLink = `mailto:enquiry@hueandpie.com?subject=Interior%20Design%20Consultation%20Request%20-%20${encodeURIComponent(
    formData.name || "Client",
  )}&body=Name:%20${encodeURIComponent(formData.name)}%0D%0APhone:%20${encodeURIComponent(
    formData.phone,
  )}%0D%0AEmail:%20${encodeURIComponent(formData.email)}%0D%0ACity:%20${encodeURIComponent(
    formData.city,
  )}%0D%0ASpace%20Type:%20${encodeURIComponent(
    formData.spaceType,
  )}%0D%0APreferred%20Style:%20${encodeURIComponent(
    formData.preferredStyle,
  )}%0D%0ATimeline:%20${encodeURIComponent(
    formData.timeline,
  )}%0D%0ANotes:%20${encodeURIComponent(formData.notes)}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto p-0 border border-[#E3D9C6] rounded-[26px] bg-[#FFFDE8] text-[#2B2230] shadow-2xl">
        <div className="relative p-6 sm:p-9 bg-gradient-to-b from-[#EFE6EE]/60 to-[#FFFDE8]">
          <DialogHeader className="space-y-2 text-left pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE6EE] border border-[#664465]/20 text-[#664465] text-xs font-medium w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A97A]" />
              <span>Initial Design Consultation</span>
            </div>
            <DialogTitle className="font-serif text-2xl sm:text-3xl text-[#2B2230] font-normal leading-tight">
              Start Your Project with{" "}
              <span className="text-[#664465] italic font-serif">Hue &amp; Pie</span>
            </DialogTitle>
            <DialogDescription className="text-sm text-[#6B5F6B] leading-relaxed">
              Share details about your space and lifestyle. We will review your brief and reach out
              within 24 business hours to arrange an exploratory design conversation.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#EFE6EE] flex items-center justify-center text-[#664465]">
                <CheckCircle2 className="w-10 h-10 text-[#664465]" />
              </div>
              <h3 className="text-2xl font-serif text-[#2B2230]">Thank you, {formData.name}!</h3>
              <p className="text-sm text-[#6B5F6B] max-w-md mx-auto leading-relaxed">
                Your project consultation brief has been recorded. Our design team will connect with
                you at <strong className="text-[#2B2230]">{formData.email}</strong> to schedule an
                introductory session.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={mailtoLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#664465] text-[#FFFDE8] text-xs font-medium hover:bg-[#4F3150] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" /> Open Email Client Backup
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-full border border-[#E3D9C6] text-xs font-medium text-[#2B2230] hover:bg-[#F3ECDD] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider text-[#6B5F6B]">
                    Full Name <span className="text-[#A9745B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[16px] border border-[#E3D9C6] bg-white text-sm text-[#2B2230] placeholder:text-[#6B5F6B]/50 focus:outline-none focus:ring-2 focus:ring-[#664465]/40"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider text-[#6B5F6B]">
                    Phone Number <span className="text-[#A9745B]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[16px] border border-[#E3D9C6] bg-white text-sm text-[#2B2230] placeholder:text-[#6B5F6B]/50 focus:outline-none focus:ring-2 focus:ring-[#664465]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider text-[#6B5F6B]">
                    Email Address <span className="text-[#A9745B]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. radhika@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[16px] border border-[#E3D9C6] bg-white text-sm text-[#2B2230] placeholder:text-[#6B5F6B]/50 focus:outline-none focus:ring-2 focus:ring-[#664465]/40"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider text-[#6B5F6B]">
                    City / Project Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bangalore, Mumbai, Hyderabad"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[16px] border border-[#E3D9C6] bg-white text-sm text-[#2B2230] placeholder:text-[#6B5F6B]/50 focus:outline-none focus:ring-2 focus:ring-[#664465]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider text-[#6B5F6B]">
                    Space / Service Type
                  </label>
                  <select
                    value={formData.spaceType}
                    onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[16px] border border-[#E3D9C6] bg-white text-sm text-[#2B2230] focus:outline-none focus:ring-2 focus:ring-[#664465]/40"
                  >
                    <option value="Complete Home Interiors">Complete Home Interiors</option>
                    <option value="Modular Kitchens">Modular Kitchens</option>
                    <option value="Living Room Design">Living Room Design</option>
                    <option value="Bedroom Interiors">Bedroom Interiors</option>
                    <option value="Wardrobes and Storage">Wardrobes and Storage</option>
                    <option value="Commercial & Office Interiors">
                      Commercial & Office Interiors
                    </option>
                    <option value="Turnkey Interior Solutions">Turnkey Interior Solutions</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider text-[#6B5F6B]">
                    Preferred Aesthetic Direction
                  </label>
                  <select
                    value={formData.preferredStyle}
                    onChange={(e) => setFormData({ ...formData, preferredStyle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[16px] border border-[#E3D9C6] bg-white text-sm text-[#2B2230] focus:outline-none focus:ring-2 focus:ring-[#664465]/40"
                  >
                    <option value="Warm Minimalism">Warm Minimalism</option>
                    <option value="Modern Luxury">Modern Luxury</option>
                    <option value="Contemporary Interiors">Contemporary Interiors</option>
                    <option value="Scandinavian Design">Scandinavian Design</option>
                    <option value="Modern Classic">Modern Classic</option>
                    <option value="Open to Recommendations">Open to Recommendations</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-[#6B5F6B]">
                  Project Possession / Timeline
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Immediate / Ready", "Within 1-3 Months", "Planning Stage (3+ Mos)"].map(
                    (t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: t })}
                        className={`tab-pill py-2 px-3 text-xs rounded-[14px] text-center justify-center ${
                          formData.timeline === t ? "tab-pill-active" : ""
                        }`}
                      >
                        {t}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-[#6B5F6B]">
                  About Your Space &amp; Key Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details like apartment size (e.g. 3BHK, 1800 sq.ft), family routines, storage priorities, or specific material preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-[16px] border border-[#E3D9C6] bg-white text-sm text-[#2B2230] placeholder:text-[#6B5F6B]/50 focus:outline-none focus:ring-2 focus:ring-[#664465]/40"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E3D9C6]/80 pt-4">
                <span className="text-[11px] text-[#6B5F6B]">
                  No spam. Your privacy and project brief are kept completely confidential.
                </span>
                <button type="submit" className="btn-primary w-full sm:w-auto text-xs py-3 px-8">
                  <span>Submit Consultation Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
