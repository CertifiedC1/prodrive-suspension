import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, MapPin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/info', label: 'Knowledge Center' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/prodrive_suspension',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/prodrivesuspension',
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">P</span>
              </div>
              <div>
                <span className="text-secondary-foreground font-bold text-xl">ProDrive</span>
                <span className="text-primary font-bold text-xl ml-1">Suspension</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Kenya's premier 4x4 and Land Cruiser suspension specialist. Built for African terrain. 🇰🇪
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center
                           hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary-foreground">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya 🇰🇪</span>
              </li>
              <li>
                <a
                  href="tel:+254700000000"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>+254 7XX XXX XXX</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@prodrivesuspension.co.ke"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>info@prodrivesuspension.co.ke</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Specialization */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary-foreground">Specialization</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                4x4 Suspension Systems
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Land Cruiser Experts
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                CRAGSMAN Dealer
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Off-Road Components
              </li>
            </ul>
            <a
              href="https://www.instagram.com/prodrive_suspension"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-primary hover:text-primary/80 transition-colors"
            >
              <Instagram size={18} />
              <span>@prodrive_suspension</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} ProDrive Suspension. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Owner: <span className="text-secondary-foreground">Isaac Irungu</span> | Made with ❤️ in Kenya 🇰🇪
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
