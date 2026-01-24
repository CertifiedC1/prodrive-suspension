import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/products', label: 'Products' },
  { path: '/info', label: 'Knowledge Center' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-secondary/95 backdrop-blur-md shadow-lg'
          : 'bg-secondary'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-primary-foreground font-bold text-xl">P</span>
            </div>
            <div>
              <span className="text-secondary-foreground font-bold text-xl tracking-tight">
                ProDrive
              </span>
              <span className="text-primary font-bold text-xl ml-1">Suspension</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-secondary-foreground hover:text-primary ${
                  location.pathname === link.path ? 'active text-primary' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-secondary-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-80 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-secondary-foreground/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 text-secondary-foreground hover:text-primary hover:bg-secondary-foreground/5 rounded-lg transition-all ${
                  location.pathname === link.path ? 'text-primary bg-secondary-foreground/5' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
