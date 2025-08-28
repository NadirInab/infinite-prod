
import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  ExternalLink,
  Calendar,
  Tag,
  ImageIcon,
  Video,
  Eye,
  Download,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface ProjectModalProps {
  project: any
  isOpen: boolean
  onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null)

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  // Reset states when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentMediaIndex(0)
      setIsVideoPlaying(false)
    }
  }, [isOpen, project])

  if (!isOpen || !project) return null

  // Prepare media array
  const mediaItems = []

  // Add video if exists
  if (project.videoLink) {
    mediaItems.push({
      type: "video",
      src: project.videoLink,
      poster: project.image,
      title: `${project.title} - Vidéo`,
    })
  }

  // Add images if they exist
  if (project.images && project.images.length > 0) {
    project.images.forEach((img: any, index: number) => {
      mediaItems.push({
        type: "image",
        src: img.original,
        thumbnail: img.thumbnail,
        title: `${project.title} - Image ${index + 1}`,
      })
    })
  } else if (project.image) {
    // Fallback to main project image
    mediaItems.push({
      type: "image",
      src: project.image,
      title: `${project.title} - Image`,
    })
  }

  const currentMedia = mediaItems[currentMediaIndex]

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length)
    setIsVideoPlaying(false)
  }

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
    setIsVideoPlaying(false)
  }

  const toggleVideoPlay = () => {
    if (videoRef) {
      if (isVideoPlaying) {
        videoRef.pause()
      } else {
        videoRef.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef) {
      videoRef.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef) {
      if (!isFullscreen) {
        videoRef.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  const getVideoEmbedUrl = (url: string) => {
    // Handle YouTube URLs
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.includes("youtu.be")
        ? url.split("youtu.be/")[1]?.split("?")[0]
        : url.split("v=")[1]?.split("&")[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0`
    }

    // Handle Vimeo URLs
    if (url.includes("vimeo.com")) {
      const videoId = url.split("/").pop()
      return `https://player.vimeo.com/video/${videoId}?autoplay=0&controls=1`
    }

    // Return original URL for direct video files
    return url
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-7xl max-h-[95vh] w-full bg-background rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-border/50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-background/95 via-background/80 to-transparent backdrop-blur-xl p-3 sm:p-4 md:p-6 border-b border-border/20">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
                <Badge
                  className={`bg-gradient-to-r ${project.color || "from-primary to-primary/60"} text-primary-foreground px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold rounded-full shadow-lg flex-shrink-0`}
                >
                  {project.type}
                </Badge>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground truncate">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 hidden sm:block">{project.category}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 sm:space-x-3 flex-shrink-0">
                {mediaItems.length > 1 && (
                  <div className="flex items-center space-x-1 sm:space-x-2 bg-muted/50 rounded-xl p-1 sm:p-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={prevMedia}
                      className="text-foreground hover:bg-background/50 rounded-lg p-1 sm:p-2"
                    >
                      <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <span className="text-foreground text-xs sm:text-sm font-medium px-1 sm:px-3">
                      {currentMediaIndex + 1} / {mediaItems.length}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={nextMedia}
                      className="text-foreground hover:bg-background/50 rounded-lg p-1 sm:p-2"
                    >
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                )}

                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground hover:bg-muted/50 rounded-lg p-1 sm:p-2 hidden sm:flex"
                  >
                    <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground hover:bg-muted/50 rounded-lg p-1 sm:p-2 hidden sm:flex"
                  >
                    <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="text-foreground hover:bg-muted/50 rounded-lg p-1 sm:p-2"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center bg-muted/20 mt-16 sm:mt-20">
            {currentMedia?.type === "video" ? (
              <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
                <iframe
                  src={getVideoEmbedUrl(currentMedia.src)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={currentMedia.title}
                />
              </div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
                <motion.img
                  key={currentMediaIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={currentMedia?.src}
                  alt={currentMedia?.title}
                  className="max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl"
                />
              </div>
            )}

            <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
              <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs sm:text-sm">
                {currentMedia?.type === "video" ? (
                  <>
                    <Video className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                    Vidéo
                  </>
                ) : (
                  <>
                    <ImageIcon className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                    Image
                  </>
                )}
              </Badge>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 bg-background">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent text-balance">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
                    {project.longDescription || project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag: string, index: number) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-border/50 text-foreground bg-muted/30 hover:bg-muted/50 transition-colors text-xs sm:text-sm"
                    >
                      <Tag className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Card className="p-4 sm:p-6 bg-muted/30 border-border/50">
                  <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">Détails du Projet</h4>
                  <div className="space-y-3 sm:space-y-4">
                    {project.year && (
                      <div className="flex items-center gap-3">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
                        <div>
                          <p className="text-xs sm:text-sm text-muted-foreground">Année</p>
                          <p className="font-medium text-sm sm:text-base">{project.year}</p>
                        </div>
                      </div>
                    )}

                    <Separator />

                    <div className="flex items-center gap-3">
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Type</p>
                        <p className="font-medium text-sm sm:text-base">{project.type}</p>
                      </div>
                    </div>

                    {project.photoCount && (
                      <>
                        <Separator />
                        <div className="flex items-center gap-3">
                          <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
                          <div>
                            <p className="text-xs sm:text-sm text-muted-foreground">Médias</p>
                            <p className="font-medium text-sm sm:text-base">{project.photoCount} éléments</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </Card>

                <div className="space-y-3">
                  {project.projectLink && (
                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${project.color || "from-primary to-primary/80"} hover:opacity-90 text-primary-foreground rounded-xl py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all`}
                    >
                      <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Voir le Projet
                      </a>
                    </Button>
                  )}

                  {project.videoLink && currentMedia?.type !== "video" && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        const videoIndex = mediaItems.findIndex((item) => item.type === "video")
                        if (videoIndex !== -1) setCurrentMediaIndex(videoIndex)
                      }}
                      className="w-full border-border/50 text-foreground hover:bg-muted/50 rounded-xl py-4 sm:py-6 text-base sm:text-lg font-semibold"
                    >
                      <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Regarder la Vidéo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {mediaItems.length > 1 && (
            <div className="p-3 sm:p-4 md:p-6 bg-muted/20 border-t border-border/50">
              <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {mediaItems.map((media, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 ${
                      currentMediaIndex === index
                        ? "ring-2 ring-primary scale-105 shadow-lg"
                        : "hover:scale-105 opacity-70 hover:opacity-100 shadow-md"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={media.type === "video" ? media.poster : media.src}
                      alt={media.title}
                      className="w-full h-full object-cover"
                    />
                    {media.type === "video" && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                      </div>
                    )}
                    {currentMediaIndex === index && (
                      <div className="absolute inset-0 bg-primary/20 border-2 border-primary rounded-lg sm:rounded-xl" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal
