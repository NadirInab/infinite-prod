import { motion } from 'framer-motion';
import { ArrowDown, Play, Sparkles, Globe, Target, Zap, Award, Camera, Palette, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import RevealOnScroll from '@/components/RevealOnScroll';
import ClientsPartnersSection from '@/components/ClientsPartnersSection';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section - Modern Asymmetrical Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Modern Background with Subtle Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 dark:from-emerald-600/30 dark:to-teal-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-indigo-600/15 dark:from-blue-600/25 dark:to-indigo-600/25 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-violet-500/10 to-purple-600/10 dark:from-violet-600/20 dark:to-purple-600/20 rounded-full blur-2xl" />
          <div className="absolute inset-0 opacity-30 dark:opacity-10">
            <div className="w-full h-full bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Asymmetrical */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:pr-8"
            >
              <div className="flex items-center gap-2 mb-8">
                <Sparkles className="h-6 w-6 text-emerald-600" />
                <Badge variant="outline" className="text-sm font-medium bg-background/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 px-4 py-2">
                  Agence Créative Digitale
                </Badge>
              </div>
              
              <h1 className="font-bold mb-8 leading-tight">
                <span className="block text-5xl md:text-7xl lg:text-8xl text-foreground mb-2">De l'idée à</span>
                <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  l'émotion
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-muted-foreground">sans limite</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Agence de production audiovisuelle et création digitale au Maroc. 
                Nous transformons vos idées en expériences visuelles captivantes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link to="/services">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <span className="flex items-center">
                      Découvrir nos services
                      <ArrowDown className="ml-3 h-5 w-5 transform rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 rounded-2xl border-border hover:bg-accent hover:border-accent-foreground transition-all duration-300 group"
                >
                  <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Voir notre showreel
                </Button>
              </div>
              
              {/* Modern Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projets Réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">4K</div>
                  <div className="text-sm text-muted-foreground">Qualité Ultra HD</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual - Asymmetrical Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Floating Cards */}
                <div className="absolute -top-8 -left-8">
                  <Card className="w-48 h-32 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 rotate-3 hover:rotate-6">
                    <CardContent className="p-6 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                        <div className="text-sm font-semibold text-emerald-900">Production</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute top-16 right-4">
                  <Card className="w-52 h-36 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 -rotate-2 hover:-rotate-3">
                    <CardContent className="p-6 flex items-center justify-center">
                      <div className="text-center">
                        <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-sm font-semibold text-blue-900">Digital</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute bottom-8 left-12">
                  <Card className="w-44 h-28 bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200 shadow-lg hover:shadow-xl transition-all duration-300 rotate-6 hover:rotate-12">
                    <CardContent className="p-5 flex items-center justify-center">
                      <div className="text-center">
                        <Palette className="h-7 w-7 text-violet-600 mx-auto mb-2" />
                        <div className="text-xs font-semibold text-violet-900">Design</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Main Center Card */}
                <Card className="w-64 h-80 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Créativité</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Au cœur de chaque projet, une approche créative unique qui donne vie à vos idées
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex flex-col items-center space-y-4">
            <span className="text-slate-500 text-sm uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl"></div>
              <ArrowDown className="relative text-slate-600 h-8 w-8" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Preview - Modern Asymmetrical Layout */}
      <section className="py-32 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-emerald-700 to-teal-600 bg-clip-text text-transparent">
                Nos Expertises
              </h2>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Quatre domaines d'excellence pour donner vie à vos projets créatifs
              </p>
            </div>
          </RevealOnScroll>

          {/* Services Grid - Consistent Design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <RevealOnScroll delay={0.1}>
              <Card className="group hover:shadow-2xl transition-all duration-500 bg-card/80 dark:bg-card/60 backdrop-blur-sm border-border/50 hover:scale-[1.02] overflow-hidden h-full">
                <CardContent className="p-8 text-center">
                  <div className="flex-shrink-0 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Camera className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-emerald-600 transition-colors">
                    Production Audiovisuelle
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    De la conception à la post-production, nous créons des contenus visuels qui marquent les esprits.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Vidéos Corporate", "Clips", "Drone"].map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <Card className="group hover:shadow-2xl transition-all duration-500 bg-card/80 dark:bg-card/60 backdrop-blur-sm border-border/50 hover:scale-[1.02] overflow-hidden h-full">
                <CardContent className="p-8 text-center">
                  <div className="flex-shrink-0 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors">
                    Contenu Digital
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    Stratégies digitales sur mesure pour maximiser votre présence en ligne et engager votre communauté.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Social Media", "Reels", "Campagnes"].map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <Card className="group hover:shadow-2xl transition-all duration-500 bg-card/80 dark:bg-card/60 backdrop-blur-sm border-border/50 hover:scale-[1.02] overflow-hidden h-full">
                <CardContent className="p-8 text-center">
                  <div className="flex-shrink-0 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Palette className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-violet-600 transition-colors">
                    Design & Web
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    Identités visuelles mémorables et sites web performants qui reflètent parfaitement votre univers de marque.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Logo", "Sites Web", "UI/UX"].map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-800 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <Card className="group hover:shadow-2xl transition-all duration-500 bg-card/80 dark:bg-card/60 backdrop-blur-sm border-border/50 hover:scale-[1.02] overflow-hidden h-full">
                <CardContent className="p-8 text-center">
                  <div className="flex-shrink-0 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-amber-600 transition-colors">
                    Stratégie Visuelle
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    Accompagnement stratégique pour développer une communication visuelle cohérente et impactante.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Audit", "Stratégie", "Formation"].map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>

          {/* Modern Stats */}
          <RevealOnScroll delay={0.6}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Projets créés", icon: Target },
                { number: "25+", label: "Clients satisfaits", icon: Award },
                { number: "100%", label: "Passion créative", icon: Zap },
                { number: "24/7", label: "Support dédié", icon: Sparkles }
              ].map((stat, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-600 text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Clients & Partners Section */}
      <ClientsPartnersSection />

      {/* Modern Call to Action */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-6 relative">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Prêt à créer quelque chose d'extraordinaire ?
            </h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons donner vie à vos idées
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-gray-50 px-10 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
              >
                Commencer un projet
                <ArrowDown className="ml-3 h-5 w-5 transform rotate-[-90deg]" />
              </Button>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
    </>
   
  );
};

export default Home;