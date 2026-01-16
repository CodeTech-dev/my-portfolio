import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { navLinks} from '../data/portfolio';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-primary text-xl">
              terminal
            </span>
          </div>
          <h2 className="text-white text-lg font-bold tracking-tight">
            Gideon.Dev<span className="text-primary">.</span>
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors hover:text-glow cursor-pointer"
              activeClass="text-white text-glow"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 h-10 px-5 bg-transparent border border-primary/30 hover:bg-primary/10 text-primary text-sm font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,170,184,0.3)]">
            <span>Let's Talk</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-dark border-t border-white/5">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors cursor-pointer py-2"
                activeClass="text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="flex items-center justify-center gap-2 h-10 px-5 bg-transparent border border-primary/30 hover:bg-primary/10 text-primary text-sm font-bold rounded-lg transition-all duration-300 mt-2">
              <span>Let's Talk</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;