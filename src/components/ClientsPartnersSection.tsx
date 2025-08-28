import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const ClientsPartnersSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [api, setApi] = React.useState<CarouselApi>();
  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  // Client logos with enhanced data
  // const clients = [
  //   {
  //     name: "SSTCO",
  //     logo: "/clients/sstco.jpeg",
  //     description: "Solutions Technologiques",
  //     category: "Tech"
  //   },
  //   {
  //     name: "ENCG",
  //     logo: "/clients/encg.png",
  //     description: "Ecole Nationale de Commerce et de Gestion",
  //     category: "Tech"
  //   },
  //   {
  //     name: "AMCAS",
  //     logo: "/clients/amcas.jpg",
  //     description: "Solutions Technologiques",
  //     category: "Tech"
  //   },
  //   {
  //     name: "Boussakane",
  //     logo: "/clients/bousakane.png",
  //     description: "Solutions Technologiques",
  //     category: "Tech"
  //   },
  //   {
  //     name: "Groupe Scholaire Attaraji",
  //     logo: "/clients/attaraji.jpg",
  //     description: "Scholaire",
  //     category: "Tech"
  //   },
  //   {
  //     name: "Derhem",
  //     logo: "/clients/derhem.png",
  //     description: "Immobilier de Luxe",
  //     category: "Real Estate"
  //   },
  //   {
  //     name: "Perla",
  //     logo: "/clients/perla.jpg",
  //     description: "Cosmétiques Premium",
  //     category: "Beauty"
  //   },
  //   {
  //     name: "Renault",
  //     logo: "/clients/renault.jpg",
  //     description: "Cosmétiques Premium",
  //     category: "Beauty"
  //   },
  //   {
  //     name: "Souss",
  //     logo: "clients/souss.png",
  //     description: "Architecture Moderne",
  //     category: "Architecture"
  //   },
  //   {
  //     name: "Dacia Motors",
  //     logo: "clients/dacia.jpg",
  //     description: "Automobile",
  //     category: "Automotive"
  //   },
  //   {
  //     name: "Studio Audio Pro",
  //     logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop&q=80",
  //     description: "Production Audio",
  //     category: "Media"
  //   },
  //   {
  //     name: "Drone Morocco",
  //     logo: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=200&h=200&fit=crop&q=80",
  //     description: "Solutions Aériennes",
  //     category: "Technology"
  //   },
  //   {
  //     name: "Digital Agency",
  //     logo: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&q=80",
  //     description: "Marketing Digital",
  //     category: "Marketing"
  //   },
  // ];

  const clients = [
    {
      name: "SSTCO",
      logo: "/clients/sstco.png",
      description: "Solutions Technologiques",
      category: "Construction"
    },
    {
      name: "ENCG",
      logo: "/clients/encg.png",
      description: "Ecole Nationale de Commerce et de Gestion",
      category: "Education"
    },
    {
      name: "AMCAS",
      logo: "/clients/amcas.png",
      description: "Solutions Technologiques",
      category: "Technology"
    },
    {
      name: "Boussakane",
      logo: "/clients/bousakane.png",
      description: "Solutions Technologiques",
      category: "Immobilier"
    },
    {
      name: "Groupe Scholaire Attaraji",
      logo: "/clients/attaraji.png",
      description: "Etablissement Scolaire",
      category: "Education"
    },
    {
      name: "Derhem",
      logo: "/clients/derhem.png",
      description: "Immobilier de Luxe",
      category: "Restauration"
    },
    {
      name: "Perla",
      logo: "/clients/perla.png",
      description: "Cosmétiques Premium",
      category: "Immobilier"
    },
    {
      name: "Renault",
      logo: "/clients/renault.png",
      description: "Constructeur Automobile",
      category: "Automotive"
    },
    {
      name: "Souss",
      logo: "/clients/souss.png",
      description: "Architecture Moderne",
      category: "Aquaculture & seaFood"
    },
    {
      name: "Dacia Motors",
      logo: "/clients/dacia.png",
      description: "Constructeur Automobile",
      category: "Automotive"
    },
  ];


  useEffect(() => {
    if (!api) return;

    // Optional: Add custom event listeners
    const handleSelect = () => {
      // Custom logic on slide change
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);
  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black"
    >

      {/* Cinematic Background with Moving Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black">
        {/* Subtle Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

        {/* Particle Glow Field */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white opacity-20 animate-particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                boxShadow: `0 0 ${2 + Math.random() * 6}px rgba(255,255,255,0.6)`
              }}
            />
          ))}
        </div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero-style Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
           <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-emerald-700 to-teal-600 bg-clip-text text-transparent leading-tight">
              Nos  Partenaire
            </h1>
          {/* <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent mb-4">
              Nos
            </span>
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Partenaire
            </span>
          </h2> */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Des entreprises visionnaires qui partagent notre passion pour l'excellence créative
          </motion.p>
        </motion.div>

        {/* Modern Partner Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-6xl mx-auto"
        >
          <Carousel
            plugins={[autoplayRef.current]}
            className="w-full"
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: false,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {clients.map((client, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    className="group relative h-full cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl p-2 h-60 flex flex-col items-center justify-center transition-all duration-500 group-hover:bg-white/20 dark:group-hover:bg-white/10 group-hover:border-white/40 dark:group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-white/10">

                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/10 via-transparent to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10 w-32 h-32 mb-6 overflow-hidden rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div
                          className="hidden w-full h-full items-center justify-center text-2xl font-bold text-white bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg"
                        >
                          {client.name.substring(0, 2).toUpperCase()}
                        </div>
                      </div>



                      <div className="text-center z-10 relative">
                        <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                          {client.name}
                        </h3>
                        <p className="text-gray-300 text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          {client.description}
                        </p>
                        <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-white/10 text-emerald-400 border border-emerald-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {client.category}
                        </span>
                      </div>

                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-teal-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right delay-150"></div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Modern Navigation Buttons */}
            <div className="flex items-center justify-center mt-8 gap-4">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110" />

              {/* Dots Indicator */}
              <div className="flex gap-2 mx-4">
                {Array.from({ length: Math.ceil(clients.length / 4) }, (_, i) => (
                  <button
                    key={i}
                    className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300 hover:scale-125"
                    onClick={() => api?.scrollTo(i * 4)}
                  />
                ))}
              </div>

              <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110" />
            </div>
          </Carousel>
        </motion.div>

        {/* Sticky Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:via-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 group border-0 text-lg font-semibold"
              >
                <span className="mr-3">Devenez partenaire</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <div className="text-gray-400 text-sm">ou</div>

            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 px-8 py-4 rounded-2xl backdrop-blur-sm transition-all duration-300 text-lg font-semibold"
              >
                Travaillons ensemble
              </Button>
            </Link>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-gray-500 text-sm mt-6 max-w-2xl mx-auto"
          >
            Rejoignez une communauté d'entreprises qui font confiance à notre expertise créative pour transformer leurs idées en réalisations exceptionnelles.
          </motion.p>
        </motion.div>
      </div>

      {/* Additional cinematic elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
};

export default ClientsPartnersSection;
