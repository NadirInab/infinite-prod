"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion"
import { Play, Sparkles, Eye, ArrowUpRight, Camera, Grid3X3, LayoutGrid, Grid2X2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import RevealOnScroll from "@/components/RevealOnScroll"
import ProjectModal from "./ProjectModal"

// New Project Data with more detail
const projects = [
  {
    id: 1,
    title: "Campagne Bousakane Immobilier",
    category: "video",
    type: "Vidéo Corporate",
    description:
      "Création d'une vidéo institutionnelle moderne pour présenter les projets immobiliers de prestige. Une approche cinématographique sophistiquée.",
    longDescription:
      "Détail sur la création de la vidéo... Description détaillée du projet. Ici, vous pouvez parler des défis, de votre approche créative, des outils utilisés, et des résultats finaux. Un cas d'étude est un excellent moyen de montrer votre expertise.",
    image: "/projects/bousakane.png",
    videoLink: "https://vimeo.com/1113288574",
    tags: ["Vidéo", "Corporate", "Immobilier"],
    year: "2024",
    size: "large",
    mediaType: "video",
    featured: true,
    color: "from-rose-900 to-amber-700",
  },
  {
    id: 2,
    title: "Derhem Sea Food",
    category: "branding",
    type: "Brand Identity",
    description:
      "Refonte complète de l'identité visuelle avec création du logo, charte graphique et déclinaisons, vidéo, 4k.",
    longDescription:
      "Détail sur la refonte de l'identité visuelle... Description détaillée du projet. Ici, vous pouvez parler des défis, de votre approche créative, des outils utilisés, et des résultats finaux. Un cas d'étude est un excellent moyen de montrer votre expertise.",
    image: "/projects/dir.png",
    videoLink: "https://vimeo.com/1113288935",
    tags: ["Branding", "Logo", "Charte"],
    year: "",
    size: "tall",
    mediaType: "photo",
    photoCount: 6,
    images: [
      {
        original: "projects/derham.png",
        thumbnail: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=250&h=150&fit=crop&q=80",
      },
      {
        original: "projects/dirma.png",
        thumbnail: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=250&h=150&fit=crop&q=80",
      },
    ],
    featured: false,
    color: "from-amber-600 to-neutral-800",
  },
  {
    id: 3,
    title: "SSTCO",
    category: "photo",
    type: "Photographie Produit",
    description: "Séance photo produit avec mise en scène sophistiquée.",
    longDescription:
      "Détail sur le shooting produit... Description détaillée du projet. Ici, vous pouvez parler des défis, de votre approche créative, des outils utilisés, et des résultats finaux. Un cas d'étude est un excellent moyen de montrer votre expertise.",
    image: "projects/sstco/1.jpg",
    tags: ["Constrcution", "Travaux"],
    year: "",
    size: "medium",
    mediaType: "mixed",
    videoLink: "https://vimeo.com/1113302746",
    photoCount: 10,
    images: [
      {
        original: "projects/sstco/2.jpg",
        thumbnail: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=250&h=150&fit=crop&q=80",
      },
      {
        original: "projects/sstco/3.jpg",
        thumbnail: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=250&h=150&fit=crop&q=80",
      },
      {
        original: "projects/sstco/4.jpg",
        thumbnail: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=250&h=150&fit=crop&q=80",
      },
    ],
    featured: false,
    color: "from-neutral-700 to-gray-700",
  },
  {
    id: 4,
    title: "Souss Mytilus",
    category: "web",
    type: "Vidéo Corporate",
    description: "Développement d'un site web responsive avec animations avancées pour un cabinet d'architecture.",
    longDescription:
      "Détail sur le développement web... Description détaillée du projet. Ici, vous pouvez parler des défis, de votre approche créative, des outils utilisés, et des résultats finaux. Un cas d'étude est un excellent moyen de montrer votre expertise.",
    image: "projects/souss/7.jpeg",
    tags: ["Food", "Alimentation", "Animation"],
    year: "",
    size: "wide",
    mediaType: "photo",
    photoCount: 4,
    videoLink: "https://vimeo.com/1113305811",
    images: [
      {
        original: "projects/souss/1.jpeg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
      {
        original: "projects/souss/2.jpeg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
      {
        original: "projects/souss/3.jpeg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
      {
        original: "projects/souss/4.jpeg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
      {
        original: "projects/souss/5.jpeg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
      {
        original: "projects/souss/6.jpeg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
      {
        original: "projects/souss/7.jpeg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
    ],
    featured: false,
    color: "from-rose-600 to-pink-600",
  },
  {
    id: 5,
    title: "ENCG",
    category: "Education",
    type: "Photographie",
    description: "A creative photo & video shoot capturing special moments.",
    longDescription:
      "For this ceremony, we combined professional photography with advanced drone videography to capture breathtaking aerial views of the venue. Our team used high-resolution cameras, specialized lenses, and stabilized gimbals to ensure sharp, cinematic shots. We focused on both candid emotional moments and technical detail shots, such as décor, stage lighting, and guest interactions. The result was a visually stunning collection of images and videos that told the complete story of the day, blending creative storytelling with technical precision.",
    image: "projects/encg/major.jpg",
    tags: ["Ceremony", "Graduation", "Animation", "Photographie"],
    year: "",
    size: "wide",
    mediaType: "photo",
    photoCount: 4,
    images: [
      {
        original: "projects/encg/minor.jpg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
      {
         original: "projects/encg/major.jpg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
      {
          original: "projects/encg/1.jpg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
      {
          original: "projects/encg/2.jpg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
      {
         original: "projects/encg/5.jpg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
      {
         original: "projects/encg/11.jpg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
      {
        original: "projects/encg/9.jpg",
        thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=250&h=150&fit=crop&q=80",
      },
    ],
    featured: false,
    color: "from-amber-600 to-orange-600",
  },
]

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [viewMode, setViewMode] = useState("bento")

  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const filters = [
    { id: "all", label: "Tous les projets", icon: LayoutGrid, count: projects.length },
    { id: "video", label: "Vidéo", icon: Play, count: projects.filter((p) => p.category === "video").length },
    { id: "photo", label: "Photo", icon: Eye, count: projects.filter((p) => p.category === "photo").length },
    { id: "web", label: "Web Design", icon: ArrowUpRight, count: projects.filter((p) => p.category === "web").length },
    {
      id: "branding",
      label: "Branding",
      icon: Camera,
      count: projects.filter((p) => p.category === "branding").length,
    },
  ]

  const filteredProjects =
    selectedFilter === "all" ? projects : projects.filter((project) => project.category === selectedFilter)

  const getBentoItemClass = (index: number, totalItems: number) => {
    const baseClasses = "relative group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl"

    // Create a sophisticated bento box pattern
    const patterns = [
      "col-span-1 sm:col-span-2 row-span-1 sm:row-span-2", // Large featured
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-1 sm:col-span-2 row-span-1", // Wide
      "col-span-1 row-span-1 sm:row-span-2", // Tall
      "col-span-1 row-span-1", // Small
    ]

    return `${baseClasses} ${patterns[index % patterns.length]}`
  }

  const getUniformGridClass = () => {
    return "relative group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/3]"
  }

  const getCardGridClass = () => {
    return "relative group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl"
  }

  const renderProjectGrid = () => {
    const nonFeaturedProjects = filteredProjects.filter((p) => !p.featured)

    switch (viewMode) {
      case "bento":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 auto-rows-fr">
            {nonFeaturedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.25, 0, 1],
                }}
                onClick={() => handleProjectClick(project)}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className={getBentoItemClass(index, nonFeaturedProjects.length)}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {renderProjectCard(project, index)}
              </motion.div>
            ))}
          </div>
        )

      case "uniform":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {nonFeaturedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.25, 0, 1],
                }}
                onClick={() => handleProjectClick(project)}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className={getUniformGridClass()}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {renderProjectCard(project, index)}
              </motion.div>
            ))}
          </div>
        )

      case "cards":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {nonFeaturedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.25, 0, 1],
                }}
                onClick={() => handleProjectClick(project)}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className={getCardGridClass()}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {renderProjectCardLayout(project, index)}
              </motion.div>
            ))}
          </div>
        )

      default:
        return renderProjectGrid()
    }
  }

  const renderProjectCard = (project, index) => (
    <div className="relative h-full flex flex-col min-h-[250px] sm:min-h-[300px]">
      <div className="relative flex-1 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: hoveredProject === project.id ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{
            opacity: hoveredProject === project.id ? 1 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
          <Badge className={`bg-gradient-to-r ${project.color} text-white border-0 shadow-lg text-xs sm:text-sm`}>
            {project.mediaType === "video" ? (
              <Play className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
            ) : project.mediaType === "mixed" ? (
              <Camera className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
            ) : (
              <Eye className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
            )}
            <span className="hidden sm:inline">
              {project.mediaType === "video" ? "Vidéo" : project.mediaType === "mixed" ? "Mixte" : "Photo"}
            </span>
          </Badge>
        </div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: hoveredProject === project.id ? 1 : 0,
            scale: hoveredProject === project.id ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <Button
            size="sm"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 rounded-full px-4 sm:px-8 text-sm sm:text-base"
          >
            {project.mediaType === "video" ? (
              <>
                <Play className="mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Regarder</span>
                <span className="sm:hidden">Play</span>
              </>
            ) : (
              <>
                <Eye className="mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Découvrir</span>
                <span className="sm:hidden">Voir</span>
              </>
            )}
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white">
        <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
          <Badge variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm text-xs">
            {project.type}
          </Badge>
          {project.year && (
            <Badge
              variant="outline"
              className="border-white/30 text-white bg-white/10 backdrop-blur-sm text-xs hidden sm:inline-flex"
            >
              {project.year}
            </Badge>
          )}
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight mb-1 sm:mb-2 group-hover:text-white/90 transition-colors text-balance">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-white/80 line-clamp-2 mb-2 sm:mb-4 text-pretty">{project.description}</p>

        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 2).map((tag, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-xs px-1.5 sm:px-2"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 2 && (
            <Badge
              variant="secondary"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-xs px-1.5 sm:px-2"
            >
              +{project.tags.length - 2}
            </Badge>
          )}
        </div>
      </div>
    </div>
  )

  const renderProjectCardLayout = (project, index) => (
    <Card className="group h-full overflow-hidden bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: hoveredProject === project.id ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <div className="absolute top-4 right-4">
          <Badge className={`bg-gradient-to-r ${project.color} text-white border-0 shadow-lg`}>
            {project.mediaType === "video" ? (
              <Play className="w-3 h-3 mr-1" />
            ) : project.mediaType === "mixed" ? (
              <Camera className="w-3 h-3 mr-1" />
            ) : (
              <Eye className="w-3 h-3 mr-1" />
            )}
            {project.mediaType === "video" ? "Vidéo" : project.mediaType === "mixed" ? "Mixte" : "Photo"}
          </Badge>
        </div>

        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 rounded-full">
            {project.mediaType === "video" ? (
              <>
                <Play className="mr-2 h-5 w-5" />
                Regarder
              </>
            ) : (
              <>
                <Eye className="mr-2 h-5 w-5" />
                Découvrir
              </>
            )}
          </Button>
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="text-xs">
            {project.type}
          </Badge>
          {project.year && (
            <Badge variant="outline" className="text-xs">
              {project.year}
            </Badge>
          )}
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-balance">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 text-pretty">{project.description}</p>

        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )

  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -500])
  const textY = useTransform(scrollY, [0, 1000], [0, -300])

  return (
    <div className="min-h-screen">
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <motion.div className="absolute inset-0 -z-10" style={{ y: backgroundY }}>
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div className="text-center" style={{ y: textY }}>
            <RevealOnScroll>
              <Badge
                variant="outline"
                className="mb-6 sm:mb-8 text-xs sm:text-sm font-medium bg-gray-600 backdrop-blur-sm border-gray-200 px-4 sm:px-6 py-2 sm:py-3 rounded-full"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Nos Réalisations
              </Badge>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 bg-clip-text text-transparent leading-tight tracking-tight text-balance">
                Portfolio
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 text-pretty">
                Une collection de projets qui incarnent notre vision créative et notre excellence technique
              </p>
            </RevealOnScroll>
          </motion.div>
        </div>
      </section>

      <div className="sticky top-0 z-40  backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col gap-4 sm:gap-6 items-center justify-between">
            <div className="w-full overflow-x-hidden">
              <div className="flex gap-2 sm:gap-3 justify-start sm:justify-center min-w-max px-2 sm:px-0">
                {filters.map((filter) => {
                  const Icon = filter.icon
                  return (
                    <Button
                      key={filter.id}
                      variant={selectedFilter === filter.id ? "default" : "outline"}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`transition-all duration-300 rounded-xl px-3 sm:px-6 py-2 sm:py-3 font-medium group text-sm sm:text-base whitespace-nowrap ${
                        selectedFilter === filter.id
                          ? "bg-gray-500 text-gray shadow-lg hover:shadow-xl"
                          : "border-gray-300 text-cyan-700 font-bold hover:border-gray-300 hover:text-cyan-900 backdrop-blur-sm"
                      }`}
                    >
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover:scale-110 transition-transform" />
                      <span className="hidden sm:inline">{filter.label}</span>
                      <span className="sm:hidden">{filter.label.split(" ")[0]}</span>
                      <Badge variant="secondary" className="ml-1 sm:ml-2 text-xs bg-gray-100 px-1 sm:px-2">
                        {filter.count}
                      </Badge>
                    </Button>
                  )
                })}
              </div>
            </div>

            <div className="flex items-center gap-2 text-cyan-700 rounded-xl p-1 font-bold">
              <Button
                variant={viewMode === "bento" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("bento")}
                className="rounded-lg px-2 sm:px-3"
              >
                <LayoutGrid className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline ml-2">Bento</span>
              </Button>
              <Button
                variant={viewMode === "uniform" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("uniform")}
                className="rounded-lg px-2 sm:px-3"
              >
                <Grid3X3 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline ml-2">Uniform</span>
              </Button>
              <Button
                variant={viewMode === "cards" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("cards")}
                className="rounded-lg px-2 sm:px-3"
              >
                <Grid2X2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline ml-2">Cards</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filteredProjects.find((p) => p.featured) && (
            <RevealOnScroll className="mb-12 sm:mb-16 md:mb-20">
              <motion.div
                onClick={() => handleProjectClick(filteredProjects.find((p) => p.featured))}
                className="cursor-pointer group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="relative aspect-[16/10] sm:aspect-[21/9]">
                  <img
                    src={filteredProjects.find((p) => p.featured)?.image || "/placeholder.svg"}
                    alt={filteredProjects.find((p) => p.featured)?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-0 flex items-end p-4 sm:p-8 md:p-12">
                    <div className="text-white max-w-full sm:max-w-2xl">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-full">
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Featured
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-white/30 text-white bg-white/10 backdrop-blur-sm text-xs sm:text-sm"
                        >
                          {filteredProjects.find((p) => p.featured)?.type}
                        </Badge>
                      </div>
                      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 sm:mb-4 text-balance">
                        {filteredProjects.find((p) => p.featured)?.title}
                      </h2>
                      <p className="text-sm sm:text-lg md:text-xl text-white/90 leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none text-pretty">
                        {filteredProjects.find((p) => p.featured)?.description}
                      </p>
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 rounded-xl sm:text-base"
                      >
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Découvrir le projet
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedFilter}-${viewMode}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {renderProjectGrid()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <RevealOnScroll>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent text-balance">
                Excellence en Chiffres
              </h2>
              <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto text-pretty">
                Des résultats qui témoignent de notre engagement créatif
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { number: "50+", label: "Projets Réalisés", icon: "🚀", gradient: "from-blue-600 to-blue-400" },
              { number: "25+", label: "Clients Satisfaits", icon: "❤️", gradient: "from-purple-600 to-purple-400" },
              { number: "3+", label: "Années d'Expérience", icon: "⭐", gradient: "from-orange-600 to-orange-400" },
              {
                number: "100%",
                label: "Passion Créative",
                icon: "🔥",
                gradient: "from-gray-800 to-gray-600",
              },
            ].map((stat, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <Card className="group hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-gray-200 hover:scale-105">
                  <div className="p-4 sm:p-6 md:p-8 text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div
                      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base md:text-lg font-medium text-balance">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 md:py-32  relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-32 sm:w-64 h-32 sm:h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 relative">
          <RevealOnScroll>
            <Sparkles className="h-12 w-12 sm:h-16 sm:w-16 text-white/80 mx-auto mb-6 sm:mb-8" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight text-balance">
              Votre vision,
              <span className="block bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
                notre création
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty">
              Transformons ensemble votre projet en une expérience visuelle mémorable qui marquera votre audience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-semibold group"
              >
                <ArrowUpRight className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Discutons de votre projet
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-gray-900 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-2xl backdrop-blur-sm bg-white/10 transition-all duration-300 font-semibold"
              >
                <Play className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Voir notre showreel
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Render the modal component */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default Portfolio
