import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import bedroomImage from "@/assets/hue-pie-bedroom.jpg";
import kitchenImage from "@/assets/hue-pie-kitchen.jpg";
import livingRoomImage from "@/assets/hue-pie-living-room.jpg";
import materialsImage from "@/assets/hue-pie-materials.jpg";

const navigation = [
  { label: "Our approach", href: "#approach" },
  { label: "Spaces", href: "#spaces" },
  { label: "The details", href: "#details" },
  { label: "Questions", href: "#questions" },
];

const designValues = [
  {
    number: "01",
    title: "Made around real life",
    description:
      "A beautiful room should feel right on an ordinary Tuesday, not only in a photograph. Start with the routines, people and small pleasures that make a place yours.",
  },
  {
    number: "02",
    title: "A sense of the whole",
    description:
      "Light, layout, colour and texture work best in conversation. Looking at them together helps a space feel considered rather than collected piece by piece.",
  },
  {
    number: "03",
    title: "Details with a purpose",
    description:
      "From the feel of a finish to the way a room holds its things, thoughtful choices can bring everyday comfort and character into balance.",
  },
];

const spaces = [
  {
    number: "01",
    name: "Living, gathered",
    category: "A softer kind of togetherness",
    description:
      "Layered seating, natural light and tactile finishes come together in a living room that feels welcoming from the first moment.",
    image: livingRoomImage,
    alt: "Illustrative living room with linen seating, walnut details and soft plum accents",
    className: "space-featured",
  },
  {
    number: "02",
    name: "A kitchen in harmony",
    category: "Calm, considered function",
    description:
      "Warm wood, quiet stone and a thoughtful mix of open and closed storage give a hardworking room a gentler rhythm.",
    image: kitchenImage,
    alt: "Illustrative contemporary kitchen with plum cabinetry and pale stone surfaces",
    className: "space-tall",
  },
  {
    number: "03",
    name: "Room to exhale",
    category: "Rest, with a little character",
    description:
      "Soft layers, warm light and a restrained palette make space for a bedroom to feel calm without feeling anonymous.",
    image: bedroomImage,
    alt: "Illustrative bedroom in soft linen with a muted plum upholstered headboard",
    className: "space-wide",
  },
];

const faqs = [
  {
    question: "How do I get started with Hue & Pie?",
    answer:
      "Begin with the space you have in mind and a little about what you want it to feel like. A few photos, rough measurements and references you are drawn to can help make an initial conversation more useful.",
  },
  {
    question: "What should I think about before a design conversation?",
    answer:
      "Consider how the room is used now, what is and is not working, the people who use it, and any practical constraints. Ideas, inspiration images and a comfortable budget range are useful starting points, not prerequisites.",
  },
  {
    question: "Can the design reflect my own preferences?",
    answer:
      "Personal preferences are a natural place to begin. Colours, materials, routines and reference images can all help define a direction that feels more like your own.",
  },
  {
    question: "Which rooms or kinds of project can you take on?",
    answer:
      "The spaces pictured here are illustrative inspiration, not a confirmed project list. Please get in touch with your project details to confirm whether your particular space is a fit.",
  },
  {
    question: "Can I choose the materials and finishes?",
    answer:
      "Materials and finishes are an important part of how a room looks and feels. Your preferences can guide the conversation; the available selection and sourcing options should be confirmed for each project.",
  },
  {
    question: "Do you also manage the project work?",
    answer:
      "Execution and coordination arrangements have not been confirmed here. Please ask about the scope and support available for your specific project before making plans.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hue & Pie | Interiors, Your Way" },
      {
        name: "description",
        content:
          "Thoughtful interior design, shaped around the way you live. Explore Hue & Pie's design approach and room-by-room inspiration.",
      },
      { property: "og:title", content: "Hue & Pie | Interiors, Your Way" },
      {
        property: "og:description",
        content:
          "Spaces with a point of view and room for real life. Discover Hue & Pie's interior design philosophy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src={livingRoomImage}
          alt="A sunlit, layered living room with natural textures and muted plum accents"
          width={1808}
          height={1200}
          fetchPriority="high"
        />
        <div className="hero-shade" aria-hidden="true" />
        <header className="site-header">
          <a
            className="wordmark"
            href="#home"
            aria-label="Hue & Pie — home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="wordmark-name">hue <span>&amp;</span> pie</span>
            <span className="wordmark-tagline">Interiors, Your Way.</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav
            className={`site-nav${mobileMenuOpen ? " site-nav-open" : ""}`}
            id="site-navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a conversation <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>
        </header>

        <div className="hero-copy page-reveal" id="home">
          <p className="eyebrow hero-eyebrow">Interior design, with you in mind</p>
          <h1 id="hero-title">Spaces that feel<br />like <em>your own.</em></h1>
          <p className="hero-description">
            Thoughtful interiors begin with the people who live in them. Let’s shape a
            space around your rhythms, your point of view, and the everyday moments
            that make a place feel like home.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#spaces">
              Explore the spaces <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="text-link hero-text-link" href="#contact">
              Start your project <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <a className="hero-scroll" href="#approach" aria-label="Scroll to our approach">
          <span>Consider a different perspective</span>
          <ArrowDown size={15} aria-hidden="true" />
        </a>
        <span className="hero-index" aria-hidden="true">01 / 06</span>
      </section>

      <section className="intro-section section-wrap" id="approach" aria-labelledby="intro-title">
        <div className="intro-mark page-reveal" aria-hidden="true">
          <span className="mark-line" />
          <span>H&amp;P</span>
          <span className="mark-line" />
        </div>
        <div className="intro-copy page-reveal">
          <p className="eyebrow">A point of view, with room for yours</p>
          <h2 id="intro-title">Good design isn’t just seen.<br /><em>It’s felt, every day.</em></h2>
          <p>
            Hue &amp; Pie is an interior design studio built around one simple idea: the
            best spaces feel as personal as they look. Not a template to follow, but a
            thoughtful conversation about the light, habits, colours and details that
            matter to you.
          </p>
          <p>
            The result we care about is a space that makes sense for real life—considered
            in its details, comfortable in its everyday rhythms, and unmistakably yours.
          </p>
          <a className="text-link" href="#details">
            The thinking behind it <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <figure className="intro-image-wrap page-reveal">
          <img
            className="intro-image"
            src={materialsImage}
            alt="A tactile selection of linen, walnut, stone and muted plum finish samples"
            width={1808}
            height={1200}
            loading="lazy"
          />
          <figcaption className="image-caption">
            <span>01</span> A thoughtful mix of texture, tone and material
          </figcaption>
          <span className="image-note">A closer look <span>↗</span></span>
        </figure>
      </section>

      <section className="spaces-section section-wrap" id="spaces" aria-labelledby="spaces-title">
        <div className="section-heading page-reveal">
          <div>
            <p className="eyebrow">Rooms to imagine</p>
            <h2 id="spaces-title">Everyday spaces,<br /><em>in a new light.</em></h2>
          </div>
          <p className="section-side-copy">
            A little inspiration for the rooms we return to. These images are illustrative
            design concepts—not completed Hue &amp; Pie client projects.
          </p>
        </div>

        <div className="space-gallery">
          {spaces.map((space) => (
            <article className={`space-item ${space.className}`} key={space.number}>
              <a className="space-image-link" href="#contact" aria-label={`Discuss ${space.name}`}>
                <img src={space.image} alt={space.alt} width={1808} height={1200} loading="lazy" />
                <span className="space-image-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span>
                <span className="concept-label">Illustrative concept</span>
              </a>
              <div className="space-meta">
                <div>
                  <p className="eyebrow">{space.category}</p>
                  <h3>{space.name}</h3>
                  <p>{space.description}</p>
                </div>
                <span className="space-number">{space.number}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="gallery-note">
          Image-led inspiration only; no locations, client identities or completed project claims are implied.
        </p>
      </section>

      <section className="philosophy-section" id="details" aria-labelledby="philosophy-title">
        <div className="philosophy-inner section-wrap">
          <div className="philosophy-heading page-reveal">
            <p className="eyebrow eyebrow-light">The Hue &amp; Pie point of view</p>
            <h2 id="philosophy-title">A room can be<br />beautiful <em>and</em><br />belong to you.</h2>
            <p>
              Not more for the sake of more. Just the right things, considered together,
              to make a space feel easy to be in and true to the people who call it theirs.
            </p>
            <a className="button button-outline" href="#contact">
              Tell us what you’re imagining <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="values-list">
            {designValues.map((value) => (
              <article className="value-row page-reveal" key={value.number}>
                <span className="value-number">{value.number}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
                <Check className="value-check" size={17} aria-hidden="true" />
              </article>
            ))}
            <span className="philosophy-caption">Interiors, Your Way. &nbsp;—&nbsp; Hue &amp; Pie</span>
          </div>
        </div>
      </section>

      <section className="details-section section-wrap" aria-labelledby="details-title">
        <figure className="details-photo page-reveal">
          <img
            src={materialsImage}
            alt="Natural fabric, warm stone, walnut and plum samples arranged together"
            width={1808}
            height={1200}
            loading="lazy"
          />
          <figcaption>Colour, texture, light. The little decisions shape the whole.</figcaption>
        </figure>
        <div className="details-copy page-reveal">
          <p className="eyebrow">The beauty is in the balance</p>
          <h2 id="details-title">Thoughtful choices.<br /><em>A more personal feel.</em></h2>
          <p>
            Materials do more than finish a room. The grain of wood, the softness of
            fabric, the way daylight moves across a surface—each brings a different
            feeling into the space.
          </p>
          <p>
            Bringing those choices together is less about following a look and more
            about noticing what feels natural to you. That is where the character of a
            room begins to emerge.
          </p>
          <div className="detail-tags" aria-label="Design details">
            <span>Natural textures</span><span>Considered colour</span><span>Everyday comfort</span>
          </div>
        </div>
      </section>

      <section className="journey-section section-wrap" aria-labelledby="journey-title">
        <div className="journey-intro page-reveal">
          <p className="eyebrow">From first thought to a clearer picture</p>
          <h2 id="journey-title">A good space starts<br />with <em>a good conversation.</em></h2>
          <p>
            Every project is its own. A useful place to begin is with the space as it is,
            the things you need from it, and the feeling you want to come home to.
          </p>
          <a className="text-link" href="#contact">
            Begin with your space <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <ol className="journey-steps">
          <li className="journey-step page-reveal">
            <span>01</span>
            <div><h3>Tell us about your space</h3><p>Share what you are thinking about, what you need, and what matters most to you.</p></div>
            <ArrowDown size={16} aria-hidden="true" />
          </li>
          <li className="journey-step page-reveal">
            <span>02</span>
            <div><h3>Find a direction together</h3><p>Bring references, preferences and practical considerations into a clearer design conversation.</p></div>
            <ArrowDown size={16} aria-hidden="true" />
          </li>
          <li className="journey-step page-reveal">
            <span>03</span>
            <div><h3>Explore the right next step</h3><p>Project scope, deliverables and any execution support can be discussed and confirmed for your needs.</p></div>
            <ArrowRight size={16} aria-hidden="true" />
          </li>
        </ol>
        <p className="journey-note">A suggested starting point—not a published project timeline or confirmed service promise.</p>
      </section>

      <section className="faq-section" id="questions" aria-labelledby="faq-title">
        <div className="faq-inner section-wrap">
          <div className="faq-heading page-reveal">
            <p className="eyebrow">A few things you might be wondering</p>
            <h2 id="faq-title">Good questions<br /><em>make a good start.</em></h2>
            <p>Every space is different. Here are a few helpful things to consider before beginning.</p>
            <a className="text-link" href="#contact">
              Have another question? <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown size={18} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
        <div className="contact-panel page-reveal">
          <img
            src={bedroomImage}
            alt="An illustrative, softly layered bedroom in warm neutrals and muted plum"
            width={1808}
            height={1200}
            loading="lazy"
          />
          <div className="contact-shade" aria-hidden="true" />
          <div className="contact-content">
            <p className="eyebrow eyebrow-light">Your space, your story</p>
            <h2 id="contact-title">Let’s create a space<br />that feels <em>like yours.</em></h2>
            <p>Tell us what you are imagining. A room, a feeling, a beginning—it is all a good place to start.</p>
            <a className="button button-light" href="mailto:?subject=Hue%20%26%20Pie%20project%20enquiry&body=Hello%20Hue%20%26%20Pie%2C%0A%0AI%E2%80%99d%20like%20to%20talk%20about%20an%20interior%20design%20project.%0A%0AAbout%20my%20space%3A%0A%0AWhat%20I%E2%80%99m%20hoping%20for%3A%0A">
              Start a project enquiry <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <span className="contact-note">Your email app will open a draft. Add the Hue &amp; Pie contact address before sending.</span>
          </div>
          <span className="contact-stamp">H&amp;P<br />Interiors, Your Way.</span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand">
            <a className="wordmark footer-wordmark" href="#home" aria-label="Hue & Pie — back to top">
              <span className="wordmark-name">hue <span>&amp;</span> pie</span>
              <span className="wordmark-tagline">Interiors, Your Way.</span>
            </a>
            <p>Thoughtful spaces, shaped around the way you live.</p>
          </div>
          <div className="footer-links">
            <p className="footer-label">Find your way</p>
            <a href="#approach">Our approach</a>
            <a href="#spaces">Spaces to imagine</a>
            <a href="#details">The details</a>
            <a href="#questions">Frequently asked</a>
          </div>
          <div className="footer-links">
            <p className="footer-label">Say hello</p>
            <a href="#contact">Start a project enquiry <ArrowUpRight size={14} aria-hidden="true" /></a>
            <span className="footer-note">Contact address to be confirmed.</span>
          </div>
          <div className="footer-signoff" aria-hidden="true">H&amp;P</div>
        </div>
        <div className="footer-bottom section-wrap">
          <span>© {new Date().getFullYear()} Hue &amp; Pie</span>
          <span>Interiors, Your Way.</span>
          <a href="#home">Back to the beginning ↑</a>
        </div>
      </footer>
    </main>
  );
}