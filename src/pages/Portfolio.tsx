import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, Play, Sparkles, Eye, ArrowUpRight, Camera } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import RevealOnScroll from '@/components/RevealOnScroll';
import { Link } from 'react-router-dom';
  import ProjectModal from './ProjectModal'; 

// New Project Data with more detail
const projects = [
  {
    id: 1,
    title: "Campagne Bousakane Immobilier",
    category: "video",
    type: "Vidéo Corporate",
    description: "Création d'une vidéo institutionnelle moderne pour présenter les projets immobiliers de prestige. Une approche cinématographique sophistiquée.",
    longDescription: "Détail sur la création de la vidéo... Description détaillée du projet. Ici, vous pouvez parler des défis, de votre approche créative, des outils utilisés, et des résultats finaux. Un cas d'étude est un excellent moyen de montrer votre expertise.",
    image: "/projects/bousakane.png",
    videoLink: "https://vimeo.com/1113288574", 
    tags: ["Vidéo", "Corporate", "Immobilier"],
    year: "2024",
    size: "large",
    mediaType: "video",
  },
  {
    id: 2,
    title: "Derhem Sea Food",
    category: "branding",
    type: "Brand Identity",
    description: "Refonte complète de l'identité visuelle avec création du logo, charte graphique et déclinaisons premium.",
    longDescription: "Détail sur la refonte de l'identité visuelle... Description détaillée du projet. Ici, vous pouvez parler des défis, de votre approche créative, des outils utilisés, et des résultats finaux. Un cas d'étude est un excellent moyen de montrer votre expertise.",
    image: "/projects/dir.png",
    videoLink: "https://vimeo.com/1113288935", 
    tags: ["Branding", "Logo", "Charte"],
    year: "",
    size: "tall",
    mediaType: "photo",
    photoCount: 6,
    images: [
      { original: 'projects/derham.png', thumbnail: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=250&h=150&fit=crop&q=80' },
      { original: 'projects/dirma.png', thumbnail: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=250&h=150&fit=crop&q=80' },
    ],
  },
  {
    id: 3,
    title: "SSTCO",
    category: "photo",
    type: "Photographie Produit",
    description: "Séance photo produit avec mise en scène sophistiquée pour une marque de cosmétiques haut de gamme.",
    longDescription: "Détail sur le shooting produit... Description détaillée du projet. Ici, vous pouvez parler des défis, de votre approche créative, des outils utilisés, et des résultats finaux. Un cas d'étude est un excellent moyen de montrer votre expertise.",
    image: "projects/sstco/1.jpg",
    tags: ["Constrcution", "Travaux"],
    year: "",
    size: "medium",
    mediaType: "mixed",
    videoLink: "https://vimeo.com/1113302746",
    photoCount: 10,
    images: [
      { original: 'projects/sstco/2.jpg', thumbnail: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=250&h=150&fit=crop&q=80' },
      { original: 'projects/sstco/3.jpg', thumbnail: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=250&h=150&fit=crop&q=80' },
      { original: 'projects/sstco/4.jpg', thumbnail: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=250&h=150&fit=crop&q=80' },
    ],
  },
  {
    id: 4,
    title: "Souss Mytilus",
    category: "web",
    type: "Web Development",
    description: "Développement d'un site web responsive avec animations avancées pour un cabinet d'architecture.",
    longDescription: "Détail sur le développement web... Description détaillée du projet. Ici, vous pouvez parler des défis, de votre approche créative, des outils utilisés, et des résultats finaux. Un cas d'étude est un excellent moyen de montrer votre expertise.",
    image: "projects/souss/7.jpeg",
    tags: ["Web", "React", "Animation"],
    year: "",
    size: "wide",
    mediaType: "photo",
    photoCount: 4,
    videoLink: "https://vimeo.com/1113305811",
    images: [
      { original: 'projects/souss/1.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
      { original: 'projects/souss/2.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
      { original: 'projects/souss/3.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
      { original: 'projects/souss/4.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
      { original: 'projects/souss/5.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
      { original: 'projects/souss/6.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
      { original: 'projects/souss/7.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
    ],
  },
  // {
  //   id: 4,
  //   title: "ENCG",
  //   category: "Education",
  //   type: "Web Development",
  //   description: "Développement d'un site web responsive avec animations avancées pour un cabinet d'architecture.",
  //   longDescription: "Détail sur le développement web... Description détaillée du projet. Ici, vous pouvez parler des défis, de votre approche créative, des outils utilisés, et des résultats finaux. Un cas d'étude est un excellent moyen de montrer votre expertise.",
  //   image: "projects/souss/7.jpeg",
  //   tags: ["Web", "React", "Animation"],
  //   year: "",
  //   size: "wide",
  //   mediaType: "photo",
  //   photoCount: 4,
  //   videoLink: "https://vimeo.com/1113305811",
  //   images: [
  //     { original: 'projects/souss/1.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
  //     { original: 'projects/souss/2.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
  //     { original: 'projects/souss/3.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
  //     { original: 'projects/souss/4.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
  //     { original: 'projects/souss/5.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
  //     { original: 'projects/souss/6.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
  //     { original: 'projects/souss/7.jpeg', thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80' },
  //   ],
  // }
];

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'video', label: 'Vidéo' },
    { id: 'photo', label: 'Photo' },
    { id: 'web', label: 'Web Design' },
    { id: 'branding', label: 'Branding' }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  // Masonry grid helper function
  const getMasonryItemClass = (size: string) => {
    const baseClasses = "relative group cursor-pointer overflow-hidden rounded-3xl";
    switch (size) {
      case 'large':
        return `${baseClasses} col-span-2 row-span-2`;
      case 'wide':
        return `${baseClasses} col-span-2 row-span-1`;
      case 'tall':
        return `${baseClasses} col-span-1 row-span-2`;
      case 'small':
        return `${baseClasses} col-span-1 row-span-1`;
      case 'medium':
      default:
        return `${baseClasses} col-span-1 row-span-1`;
    }
  };

  const getImageHeight = (size: string) => {
    switch (size) {
      case 'large':
        return 'h-[500px]';
      case 'wide':
        return 'h-[240px]';
      case 'tall':
        return 'h-[500px]';
      case 'small':
        return 'h-[240px]';
      case 'medium':
      default:
        return 'h-[300px]';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-stone-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-stone-950">
      {/* Hero Section with Sticky Title */}
      <section className="pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-rose-900/20 to-amber-600/20 dark:from-rose-900/30 dark:to-amber-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-neutral-800/15 to-stone-600/15 dark:from-neutral-600/25 dark:to-stone-400/25 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-8 text-sm font-medium bg-white/80 backdrop-blur-sm border-rose-900/20 dark:border-amber-600/40 text-rose-900 dark:text-amber-600 px-6 py-3 rounded-full">
                ✨ Nos Réalisations
              </Badge>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-rose-900 via-neutral-800 to-amber-700 dark:from-rose-400 dark:via-neutral-200 dark:to-amber-400 bg-clip-text text-transparent leading-tight tracking-tight">
                Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                Une collection de projets qui incarnent notre vision créative et notre excellence technique
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Sticky Filter Section */}
      <div className="sticky top-24 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.id)}
                className={`transition-all duration-300 rounded-2xl px-8 py-3 font-medium ${
                  selectedFilter === filter.id
                    ? "bg-gradient-to-r from-rose-900 to-amber-700 dark:from-rose-600 dark:to-amber-600 text-white shadow-lg hover:shadow-xl border-0"
                    : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-rose-900/50 dark:hover:border-amber-600/50 hover:text-rose-900 dark:hover:text-amber-600 bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Section Title */}
   

      {/* Masonry Portfolio Grid */}
 <section ref={sectionRef} className="py-24 relative bg-neutral-50 dark:bg-neutral-950">
  <div className="max-w-7xl mx-auto px-6 space-y-20">
    
    {/* Featured "Cover" Project */}
    {filteredProjects[0] && (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onClick={() => handleProjectClick(filteredProjects[0])}
        className="cursor-pointer group relative rounded-3xl overflow-hidden shadow-xl"
      >
        <div className="relative aspect-[16/7]">
          <img
            src={filteredProjects[0].image}
            alt={filteredProjects[0].title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Cover text */}
          <div className="absolute bottom-10 left-10 text-white max-w-xl">
            <Badge className="mb-4 bg-white/90 text-neutral-900 px-3 py-1.5 text-xs font-semibold rounded-full">
              Featured
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              {filteredProjects[0].title}
            </h2>
            <p className="text-lg text-white/80 line-clamp-3">
              {filteredProjects[0].description}
            </p>
          </div>
        </div>
      </motion.div>
    )}

    {/* Editorial Grid */}
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedFilter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10"
      >
        {filteredProjects.slice(1).map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => handleProjectClick(project)}
            className={`cursor-pointer group col-span-1 ${index % 5 === 0 ? "xl:col-span-3" : "xl:col-span-2"}`}
          >
            <div className="h-full flex flex-col overflow-hidden rounded-2xl shadow-md bg-white dark:bg-neutral-900 hover:shadow-2xl transition-all duration-500">
              
              {/* Media */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                  <Button
                    size="sm"
                    className="bg-white text-neutral-900 rounded-full px-5"
                  >
                    {project.mediaType === "video" ? (
                      <>
                        <Play className="mr-2 h-4 w-4" /> Regarder
                      </>
                    ) : (
                      <>
                        <Eye className="mr-2 h-4 w-4" /> Voir
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="uppercase text-xs tracking-wider font-semibold text-rose-600 mb-2">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold leading-snug group-hover:text-rose-600 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded-full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  </div>
</section>



      {/* Enhanced Stats Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-100 to-stone-100 dark:from-neutral-900 dark:to-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-900/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-900 to-amber-700 dark:from-rose-400 dark:to-amber-400 bg-clip-text text-transparent">
                Excellence en Chiffres
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Des résultats qui témoignent de notre engagement créatif
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projets Réalisés", icon: "🚀", gradient: "from-rose-600 to-pink-600" },
              { number: "25+", label: "Clients Satisfaits", icon: "❤️", gradient: "from-amber-600 to-orange-600" },
              { number: "3+", label: "Années d'Expérience", icon: "⭐", gradient: "from-neutral-700 to-gray-700" },
              { number: "100%", label: "Passion Créative", icon: "🔥", gradient: "from-rose-700 to-amber-600" }
            ].map((stat, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <Card className="group hover:shadow-xl transition-all duration-500 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border-neutral-200/50 dark:border-neutral-700/50 hover:scale-105">
                  <div className="p-8 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform`}>
                      {stat.number}
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400 text-lg font-medium">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-32 bg-gradient-to-r from-rose-900 via-neutral-900 to-amber-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-6 relative">
          <RevealOnScroll>
            <Sparkles className="h-16 w-16 text-amber-400 mx-auto mb-8" />
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Votre vision,
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                notre création
              </span>
            </h2>
            <p className="text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transformons ensemble votre projet en une expérience visuelle mémorable qui marquera votre audience
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-rose-900 hover:bg-neutral-100 px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-semibold group"
                >
                  <ArrowUpRight className="mr-3 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Discutons de votre projet
                </Button>
              </Link>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-rose-900 px-12 py-6 text-xl rounded-2xl backdrop-blur-sm bg-white/10 transition-all duration-300 font-semibold"
              >
                <Play className="mr-3 h-6 w-6" />
                Voir notre showreel
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Render the modal component */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Portfolio;