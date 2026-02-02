import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';
import TikTokIcon from '@/components/icons/TikTokIcon';
import logoImg from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/info', label: 'Knowledge Center' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src={logoImg} 
                alt="ProDrive Suspension Logo" 
                className="w-12 h-12 rounded-lg object-contain"
              />
              <div>
                <span className="text-secondary-foreground font-bold text-xl">ProDrive</span>
                <span className="text-primary font-bold text-xl ml-1">Suspension</span>
              </div>
            </Link>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              Kenya's premier 4x4 and Land Cruiser suspension specialist. Built for African terrain. 🇰🇪
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/prodrive_suspension?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center
                         hover:bg-primary transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576710055058"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center
                         hover:bg-primary transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@prodrive_suspension?_t=ZM-907kLtVGXa0&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center
                         hover:bg-primary transition-all duration-300"
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon size={20} />
              </a>
              <a
                href="https://wa.me/254748418583?text=Hello%20PRODRIVE%20SUSPENSION!%20I'm%20interested%20in%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center
                         hover:bg-[#25D366] transition-all duration-300"
                aria-label="Contact us on WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-4 text-secondary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold mb-4 text-secondary-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-secondary-foreground/70 text-sm">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya 🇰🇪</span>
              </li>
              <li>
                <a
                  href="tel:+254748418583"
                  className="flex items-start gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>+254 748 418 583</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:prodrivesuspension@gmail.com"
                  className="flex items-start gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>prodrivesuspension@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Specialization */}
          <div>
            <h4 className="text-base font-bold mb-4 text-secondary-foreground">We Specialize In</h4>
            <ul className="space-y-2 text-secondary-foreground/70 text-sm">
              <li>• 4x4 Suspension Systems</li>
              <li>• Land Cruiser Upgrades</li>
              <li>• CRAGSMAN Dealer</li>
              <li>• Off-Road Components</li>
              <li>• Lift Kits & Shocks</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-secondary-foreground/50 text-sm">
              © {currentYear} ProDrive Suspension. All rights reserved.
            </p>
            <p className="text-secondary-foreground/50 text-sm">
              Designed by <span className="text-primary font-medium">ELIUD NDUNG'U</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
