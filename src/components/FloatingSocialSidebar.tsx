import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const FloatingSocialSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/infiniteprod_',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'from-sky-500 to-sky-600',
      hoverColor: 'hover:from-sky-600 hover:to-sky-700'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    }
  ];

  const contactLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:infinit5prod@gmail.com',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700'
    },
    {
      name: 'Phone',
      icon: Phone,
      url: 'tel:+212671209848',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/212671209848',
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'hover:from-emerald-600 hover:to-emerald-700'
    }
  ];

  return (
    <motion.div
      className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ x: 100 }}
      animate={{ x: isExpanded ? 0 : 60 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="bg-background/90 backdrop-blur-xl border border-border/20 rounded-l-2xl shadow-2xl overflow-hidden">
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 flex items-center justify-center text-white hover:from-orange-600 hover:to-blue-700 transition-all duration-300 cursor-hover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 space-y-4">
                {/* Social Media Section */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Suivez-nous
                  </h3>
                  <div className="space-y-2">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r ${link.color} ${link.hoverColor} text-white transition-all duration-300 cursor-hover group`}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <link.icon size={18} />
                        <span className="text-sm font-medium">{link.name}</span>
                        <motion.div
                          className="ml-auto opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={14} />
                        </motion.div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Separator */}
                <div className="border-t border-border/20"></div>

                {/* Contact Section */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Contact
                  </h3>
                  <div className="space-y-2">
                    {contactLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        className={`flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r ${link.color} ${link.hoverColor} text-white transition-all duration-300 cursor-hover group`}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: (socialLinks.length + index) * 0.1 }}
                        whileHover={{ scale: 1.02, x: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <link.icon size={18} />
                        <span className="text-sm font-medium">{link.name}</span>
                        <motion.div
                          className="ml-auto opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={14} />
                        </motion.div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <motion.div
                  className="p-3 bg-gradient-to-r from-orange-500/10 to-blue-600/10 rounded-xl border border-orange-500/20"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-xs text-foreground/70 text-center leading-relaxed">
                    Transformons vos idées en réalité créative
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FloatingSocialSidebar;