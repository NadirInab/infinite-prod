import { motion } from 'framer-motion';
import { 
  Camera, 
  Globe, 
  Palette, 
  Lightbulb, 
  Video, 
  Smartphone, 
  Monitor, 
  Megaphone,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Eye,
  Target
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import RevealOnScroll from '@/components/RevealOnScroll';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Camera className="h-8 w-8" />,
      title: "Production Audiovisuelle",
      subtitle: "De l'idée à l'écran",
      description: "Création de contenus visuels captivants : vidéos corporate, clips musicaux, documentaires et prises de vues aériennes par drone.",
      features: [
        "Vidéos Corporate & Institutionnelles",
        "Clips Musicaux & Créatifs",
        "Documentaires & Reportages",
        "Prises de vues aériennes (Drone)",
        "Post-production avancée",
        "Sound Design & Mixage"
      ],
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      process: [
        "Brief & Conception",
        "Pré-production",
        "Tournage",
        "Post-production",
        "Livraison finale"
      ]
    },
    {
      id: 2,
      icon: <Globe className="h-8 w-8" />,
      title: "Contenu Digital",
      subtitle: "Engagez votre audience",
      description: "Stratégies digitales sur mesure pour maximiser votre présence en ligne et créer une communauté engagée autour de votre marque.",
      features: [
        "Stratégie Social Media",
        "Création de Reels & TikTok",
        "Campagnes publicitaires",
        "Gestion de communauté",
        "Storytelling de marque",
        "Analytics & Reporting"
      ],
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50",
      borderColor: "border-blue-200 dark:border-blue-800",
      process: [
        "Audit digital",
        "Stratégie contenu",
        "Création assets",
        "Publication & gestion",
        "Optimisation continue"
      ]
    },
    {
      id: 3,
      icon: <Palette className="h-8 w-8" />,
      title: "Design & Web",
      subtitle: "Votre identité unique",
      description: "Création d'identités visuelles mémorables et développement de sites web performants qui reflètent parfaitement votre univers de marque.",
      features: [
        "Identité visuelle & Logo",
        "Charte graphique complète",
        "Sites web responsives",
        "UI/UX Design",
        "E-commerce & applications",
        "Print & supports marketing"
      ],
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50",
      borderColor: "border-violet-200 dark:border-violet-800",
      process: [
        "Research & Benchmark",
        "Concepts créatifs",
        "Design & prototypage",
        "Développement",
        "Tests & lancement"
      ]
    },
    {
      id: 4,
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Stratégie Visuelle",
      subtitle: "Conseil & accompagnement",
      description: "Accompagnement stratégique pour développer une communication visuelle cohérente et impactante qui résonne avec votre audience cible.",
      features: [
        "Audit de communication",
        "Stratégie de marque",
        "Conseil créatif",
        "Formation équipes",
        "Optimisation ROI",
        "Veille concurrentielle"
      ],
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50",
      borderColor: "border-amber-200 dark:border-amber-800",
      process: [
        "Diagnostic initial",
        "Stratégie sur-mesure",
        "Plan d'actions",
        "Accompagnement",
        "Mesure & ajustement"
      ]
    }
  ];

  const stats = [
    { number: "50+", label: "Projets créés", icon: Target },
    { number: "25+", label: "Clients satisfaits", icon: Star },
    { number: "100%", label: "Passion créative", icon: Eye },
    { number: "24/7", label: "Support dédié", icon: CheckCircle }
  ];

  const testimonials = [
    {
      name: "Sarah Benali",
      company: "Directrice Marketing, TechCorp",
      text: "L'équipe d'Infinite Prod a transformé notre vision en réalité. Leur créativité et professionnalisme sont exceptionnels.",
      rating: 5
    },
    {
      name: "Ahmed Mansouri", 
      company: "CEO, StartupX",
      text: "Des résultats qui dépassent nos attentes. Une collaboration fluide et des livrables de qualité premium.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 dark:from-emerald-600/20 dark:to-teal-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-indigo-600/8 dark:from-blue-600/15 dark:to-indigo-600/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-violet-500/6 to-purple-600/6 dark:from-violet-600/12 dark:to-purple-600/12 rounded-full blur-2xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <RevealOnScroll>
            <Badge variant="outline" className="mb-6 text-sm font-medium bg-background/80 backdrop-blur-sm border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 px-4 py-2">
              ✨ Nos Expertises
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-emerald-700 to-teal-600 bg-clip-text text-transparent leading-tight">
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Quatre domaines d'excellence pour transformer vos idées en expériences visuelles exceptionnelles qui marquent les esprits.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <RevealOnScroll key={service.id} delay={index * 0.2}>
                <Card className={`group hover:shadow-2xl transition-all duration-700 bg-gradient-to-br ${service.bgGradient} ${service.borderColor} hover:scale-[1.02] overflow-hidden h-full`}>
                  <CardContent className="p-8 lg:p-10">
                    {/* Service Header */}
                    <div className="flex items-start space-x-6 mb-8">
                      <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-3 text-xs font-medium">
                          {service.subtitle}
                        </Badge>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-emerald-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                        Ce qui est inclus :
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process Steps */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center">
                        <Target className="h-5 w-5 text-emerald-600 mr-2" />
                        Notre processus :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.process.map((step, stepIndex) => (
                          <Badge key={stepIndex} variant="secondary" className="text-xs bg-background/60 text-muted-foreground">
                            {stepIndex + 1}. {step}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link to="/contact">
                      <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white border-0 group-hover:scale-[1.02] transition-all duration-300`}>
                        <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Découvrir ce service
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-emerald-700 to-teal-600 bg-clip-text text-transparent">
                Excellence en Chiffres
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des résultats qui témoignent de notre engagement qualité
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <Card className="group hover:shadow-xl transition-all duration-500 bg-white/80 dark:bg-card/80 backdrop-blur-sm hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-4 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
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
              Votre projet mérite l'excellence
            </h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discutons ensemble de vos besoins et découvrons comment nos services peuvent propulser votre marque vers de nouveaux sommets.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-600 hover:bg-gray-50 px-10 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
                >
                  <ArrowRight className="mr-3 h-5 w-5" />
                  Commencer un projet
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-10 py-6 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 font-semibold"
                >
                  <Play className="mr-3 h-5 w-5" />
                  Voir nos réalisations
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Services;