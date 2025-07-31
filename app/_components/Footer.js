import Link from "next/link";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

function Footer() {
  const services = [
    "1-on-1 Fitness Coaching",
    "Personalized Nutrition Coaching",
    "Accountability & Habit Coaching",
  ];
  return (
    <footer className="bg-bg-secondary py-12 px-6 md:px-16 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div className="space-y-4">
          <h2
            className="text-lg font-semibold bg-gradient-to-br from-accent to-accent bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Coach Training
          </h2>
          <p>
            Helping busy professionals and casual enthusiasts lose weight, build
            muscle, and stay in shape.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Quick Links</h3>
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Services</h3>
          <ul className="space-y-1">
            {services.map((service) => (
              <li key={service}>
                <Link href="/services" className="hover:text-accent">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Contact</h3>
          <p>contact@youragency.com</p>
          <p>+1 (555) 123-4567</p>
          <p>Mon-Fri · 9am-5pm</p>
        </div>
      </div>

      <div className="border-t border-color-border mt-12 pt-6 text-xs text-center text-text-muted">
        © {new Date().getFullYear()} Coach Training. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
