export function SiteFooter() {
  return (
    <footer className="bg-[#664465] text-[#FFFDE8] py-14 border-t border-[#FFFDE8]/10">
      <div className="section-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="wordmark mb-3">
            <span className="wordmark-name text-[#FFFDE8] tracking-tight">Hue &amp; Pie</span>
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
          <p className="text-sm text-[#FFFDE8]/80">
            <span className="block font-semibold text-[#FFFDE8]">Bangalore:</span> 100 Feet Rd, Indiranagar
            <span className="block font-semibold text-[#FFFDE8] mt-2">Hyderabad:</span> Road No. 36, Jubilee Hills
            <span className="block font-semibold text-[#FFFDE8] mt-2">Mumbai:</span> Linking Road, Bandra West
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#C9A97A] mb-3">
            Quick Links
          </h4>
          <ul className="text-sm text-[#FFFDE8]/80 space-y-1.5">
            <li>
              <a href="/about" className="hover:text-[#C9A97A] font-semibold text-[#C9A97A] transition-colors">
                About Hue &amp; Pie
              </a>
            </li>
            <li><a href="/#why-us" className="hover:text-[#C9A97A] transition-colors">Why Choose Us</a></li>
            <li><a href="/#budgets" className="hover:text-[#C9A97A] transition-colors">Homes by Budget</a></li>
            <li><a href="/#offerings" className="hover:text-[#C9A97A] transition-colors">Interiors Offering</a></li>
            <li><a href="/#projects" className="hover:text-[#C9A97A] transition-colors">Recent Projects</a></li>
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
        <span>&copy; {new Date().getFullYear()} Hue &amp; Pie Interiors Private Limited. All rights reserved.</span>
        <span>Interiors, Your Way.</span>
      </div>
    </footer>
  );
}
