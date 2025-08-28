import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, Twitter, Send, MessageCircle, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import RevealOnScroll from '@/components/RevealOnScroll';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      description: "Écrivez-nous à tout moment",
      contact: "infinit3prod@gmail.com",
      action: "mailto:infinit3prod@gmail.com",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50",
      borderColor: "border-emerald-200 dark:border-emerald-800"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Téléphone",
      description: "Appelez-nous directement",
      contact: "+212 694958220",
      action: "tel:+212694958220",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "WhatsApp",
      description: "Messagerie instantanée",
      contact: "+212 694958220",
      action: "https://wa.me/+212694958220",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50",
      borderColor: "border-green-200 dark:border-green-800"
    }
  ];

  const socialMedia = [
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      handle: "@infiniteprod",
      url: "https://www.instagram.com/_infiniteprod_/",
      color: "hover:text-pink-600"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      handle: "Infinite Prod",
      url: "https://linkedin.com/company/infiniteprod",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-6 w-6" />,
      handle: "@infiniteprod",
      url: "https://twitter.com/infiniteprod",
      color: "hover:text-blue-400"
    }
  ];

  const officeInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-emerald-600" />,
      label: "Adresse",
      value: "Agadir, Maroc"
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-600" />,
      label: "Horaires",
      value: "Lun - Ven: 9h00 - 18h00"
    },
    {
      icon: <Calendar className="h-6 w-6 text-emerald-600" />,
      label: "Rendez-vous",
      value: "Sur demande"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 dark:from-emerald-600/20 dark:to-teal-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-indigo-600/8 dark:from-blue-600/15 dark:to-indigo-600/15 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <RevealOnScroll>
            <Badge variant="outline" className="mb-6 text-sm font-medium bg-background/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 px-4 py-2">
              ✨ Parlons de votre projet
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-emerald-700 to-teal-600 bg-clip-text text-transparent leading-tight">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Transformons ensemble vos idées en réalisations exceptionnelles. 
              Notre équipe est là pour vous accompagner à chaque étape.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Réponse rapide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Devis gratuit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Methods - Minimal Layout */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <Card className={`group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${method.bgColor} ${method.borderColor} hover:scale-[1.02] cursor-pointer overflow-hidden h-full`}>
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${method.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-white">
                        {method.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {method.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {method.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="text-lg font-semibold text-foreground">
                        {method.contact}
                      </div>
                      
                      <Button 
                        asChild
                        className={`w-full bg-gradient-to-r ${method.color} hover:shadow-lg text-white border-0`}
                      >
                        <a href={method.action} target="_blank" rel="noopener noreferrer">
                          <Send className="mr-2 h-4 w-4" />
                          Contacter
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information & Social Media */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Office Information */}
            <RevealOnScroll>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  Notre Studio
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Basés à Casablanca, nous travaillons avec des clients dans tout le Maroc et à l'international. 
                  Notre équipe est disponible pour vous rencontrer et discuter de vos projets.
                </p>
                
                <div className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      {info.icon}
                      <div>
                        <div className="font-semibold text-foreground">{info.label}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Social Media & Community */}
            <RevealOnScroll delay={0.2}>
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Suivez-nous
                  </h3>
                  <p className="text-muted-foreground">
                    Découvrez nos dernières créations et projets en cours
                  </p>
                </div>

                <div className="space-y-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 group ${social.color}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-lg bg-background">
                          {social.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{social.name}</div>
                          <div className="text-sm text-muted-foreground">{social.handle}</div>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {/* <ArrowRight className="h-4 w-4" /> */}
                      </div>
                    </motion.a>
                  ))}
                </div>

               
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-6 relative">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrons ensemble comment donner vie à vos idées.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-gray-50 px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
              >
                <a href="mailto:infinit3prod@gmail.com">
                  <Mail className="mr-3 h-5 w-5" />
                  Envoyer un email
                </a>
              </Button>
              
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-6 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 font-semibold"
              >
                <a href="https://wa.me/+212694958220" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Contact;