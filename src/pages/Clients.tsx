import { motion } from 'framer-motion';
import { Star, Quote, Users, Award, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import RevealOnScroll from '@/components/RevealOnScroll';

const Clients = () => {
  const clients = [
    {
      name: "Bousakane Immobilier",
      logo: "BI",
      sector: "Immobilier",
      description: "Leader dans l'immobilier de prestige au Maroc",
      collaboration: "Vidéos corporate, photographie architecturale, identité digitale"
    },
    {
      name: "Derhem",
      logo: "DH",
      sector: "Finance",
      description: "Solutions financières innovantes",
      collaboration: "Refonte identité visuelle, site web, campagne digitale"
    },
    {
      name: "Atlas Consulting",
      logo: "AC",
      sector: "Conseil",
      description: "Cabinet de conseil en stratégie",
      collaboration: "Contenu social media, reportage événementiel"
    },
    {
      name: "Marrakech Events",
      logo: "ME",
      sector: "Événementiel",
      description: "Organisation d'événements d'exception",
      collaboration: "Couverture photo/vidéo, live streaming"
    }
  ];

  const testimonials = [
    {
      text: "Infinite Prod a transformé notre communication visuelle. Leur créativité et professionnalisme ont dépassé nos attentes.",
      author: "Khalid Benali",
      position: "Directeur Marketing",
      company: "Bousakane Immobilier",
      rating: 5
    },
    {
      text: "Une équipe exceptionnelle qui comprend nos besoins et les traduit en créations visuelles impactantes.",
      author: "Fatima Zahra",
      position: "CEO",
      company: "Derhem",
      rating: 5
    },
    {
      text: "La qualité de leurs productions vidéo et leur sens du détail font d'eux nos partenaires créatifs de référence.",
      author: "Omar Lahlou",
      position: "Directeur",
      company: "Atlas Consulting",
      rating: 5
    }
  ];

  const partners = [
    {
      name: "Studio Audio Pro",
      type: "Partenaire Technique",
      description: "Studio d'enregistrement professionnel",
      speciality: "Post-production audio, mixage, mastering",
      icon: "🎵"
    },
    {
      name: "Tech Innovations",
      type: "Partenaire Technologique",
      description: "Développement web et applications",
      speciality: "Solutions digitales avancées, e-commerce",
      icon: "💻"
    },
    {
      name: "Drone Morocco",
      type: "Partenaire Aérien",
      description: "Spécialiste prises de vues aériennes",
      speciality: "Drone cinéma, cartographie, inspection",
      icon: "🚁"
    },
    {
      name: "Print Excellence",
      type: "Partenaire Impression",
      description: "Impression haute qualité et grand format",
      speciality: "Signalétique, packaging, supports premium",
      icon: "🖨️"
    },
    {
      name: "Event Masters",
      type: "Partenaire Événementiel",
      description: "Organisation d'événements corporate",
      speciality: "Conférences, lancements produit, team building",
      icon: "🎭"
    },
    {
      name: "Media Boost",
      type: "Partenaire Media",
      description: "Agence de placement média",
      speciality: "Campagnes TV, radio, digital, influence",
      icon: "📺"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 serif-font gradient-text">
              Nos Clients & Partenaires
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              La confiance de nos clients et la force de nos partenariats font notre succès
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 serif-font gradient-text">
                Ils nous font confiance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Des entreprises visionnaires qui partagent notre passion pour l'excellence créative
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {clients.map((client, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <Card className="bg-black/50 border-gray-800 hover-lift cursor-hover group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-xl">{client.logo}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                            {client.name}
                          </h3>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">
                            {client.sector}
                          </Badge>
                        </div>
                        <p className="text-gray-400 mb-4">
                          {client.description}
                        </p>
                        <div className="border-l-2 border-orange-500 pl-4">
                          <p className="text-sm text-gray-300 italic">
                            "{client.collaboration}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 serif-font gradient-text">
                Ce qu'ils disent de nous
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Les témoignages authentiques de nos clients satisfaits
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <RevealOnScroll key={index} delay={index * 0.2}>
                <Card className="bg-gray-900/50 border-gray-800 hover-lift cursor-hover group h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <Quote className="h-10 w-10 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
                    
                    <p className="text-gray-300 mb-6 flex-1 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white mb-1">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-400">
                          {testimonial.position}
                        </div>
                        <div className="text-sm text-orange-500">
                          {testimonial.company}
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 serif-font gradient-text">
                Nos Partenaires d'Excellence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Un réseau de partenaires experts pour vous offrir des solutions complètes et innovantes
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <Card className="bg-black/50 border-gray-800 hover-lift cursor-hover group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {partner.icon}
                    </div>
                    
                    <Badge className="mb-4 bg-orange-500/20 text-orange-500 border-orange-500/30">
                      {partner.type}
                    </Badge>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-500 transition-colors">
                      {partner.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4">
                      {partner.description}
                    </p>
                    
                    <div className="border-t border-gray-800 pt-4">
                      <p className="text-sm text-gray-300">
                        <strong>Spécialités:</strong> {partner.speciality}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 serif-font gradient-text">
                Pourquoi nos partenariats fonctionnent
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12" />,
                title: "Expertise Complémentaire",
                description: "Chaque partenaire apporte son expertise unique pour des solutions complètes"
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Qualité Garantie",
                description: "Des standards d'excellence partagés pour des résultats exceptionnels"
              },
              {
                icon: <Target className="h-12 w-12" />,
                title: "Efficacité Optimisée",
                description: "Une coordination parfaite pour respecter vos délais et budgets"
              }
            ].map((benefit, index) => (
              <RevealOnScroll key={index} delay={index * 0.2}>
                <div className="text-center group">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white serif-font">
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Bénéficiez de notre expertise et de notre réseau de partenaires d'exception
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="text-lg py-2 px-6 bg-white/20 text-white border-white/30">
                <Lightbulb className="mr-2 h-5 w-5" />
                Consultation gratuite
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-6 bg-white/20 text-white border-white/30">
                <Award className="mr-2 h-5 w-5" />
                Garantie satisfaction
              </Badge>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Clients;