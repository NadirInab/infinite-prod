import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
      ? 'bg-background/80 backdrop-blur-2xl border-b border-border/10 py-4 shadow-2xl'
      : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Enhanced Logo */}
        <Link to="/" className="relative group cursor-hover">
          <div className="flex items-center space-x-3">
            {/* Logo Icon */}
            {/* <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">I</span>
              </div>
            </div> */}

            {/* Logo Text */}
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Infinite Prod Logo"
                className="w-20 h-20 rounded-xl"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Infinite Prod
                </h1>

                <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                  Creative Studio
                </div>
              </div>
            </div>

          </div>
        </Link>

        {/* Enhanced Desktop Navigation */}
        <div className="hidden md:flex items-center">
          {/* Navigation Links */}
          <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-xl rounded-full p-2 border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 cursor-hover rounded-full ${location.pathname === link.path
                  ? 'text-white bg-gradient-to-r from-orange-500 to-blue-500 shadow-lg shadow-orange-500/25'
                  : 'text-foreground/70 hover:text-foreground hover:bg-accent/20'
                  }`}
              >
                <span className="relative z-10">{link.label}</span>

                {location.pathname === link.path && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="ml-4">
            <ThemeToggle />
          </div>

          {/* CTA Button */}
          <Link to="/contact" className="ml-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-full cursor-hover transition-all duration-300 shadow-lg shadow-orange-500/25"
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="relative">Démarrer un projet</span>
            </motion.button>
          </Link>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative p-3 bg-black/20 backdrop-blur-xl rounded-full border border-white/10 text-white cursor-hover"
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-border/10 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-4 text-lg font-medium transition-all duration-300 cursor-hover rounded-xl ${location.pathname === link.path
                        ? 'text-white bg-gradient-to-r from-orange-500 to-blue-500 shadow-lg'
                        : 'text-foreground/70 hover:text-foreground hover:bg-accent/20'
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4 border-t border-white/10 mt-4"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-4 py-4 text-center bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-xl cursor-hover transition-all duration-300 shadow-lg shadow-orange-500/25"
                  >
                    Démarrer un projet
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;