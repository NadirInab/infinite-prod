import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset states when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentMediaIndex(0);
      setIsVideoPlaying(false);
    }
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  // Prepare media array
  const mediaItems = [];
  
  // Add video if exists
  if (project.videoLink) {
    mediaItems.push({
      type: 'video',
      src: project.videoLink,
      poster: project.image,
      title: `${project.title} - Vidéo`
    });
  }
  
  // Add images if they exist
  if (project.images && project.images.length > 0) {
    project.images.forEach((img: any, index: number) => {
      mediaItems.push({
        type: 'image',
        src: img.original,
        thumbnail: img.thumbnail,
        title: `${project.title} - Image ${index + 1}`
      });
    });
  } else if (project.image) {
    // Fallback to main project image
    mediaItems.push({
      type: 'image',
      src: project.image,
      title: `${project.title} - Image`
    });
  }

  const currentMedia = mediaItems[currentMediaIndex];

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
    setIsVideoPlaying(false);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    setIsVideoPlaying(false);
  };

  const toggleVideoPlay = () => {
    if (videoRef) {
      if (isVideoPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef) {
      videoRef.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef) {
      if (!isFullscreen) {
        videoRef.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const getVideoEmbedUrl = (url: string) => {
    // Handle YouTube URLs
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('youtu.be/')[1]?.split('?')[0]
        : url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0`;
    }
    
    // Handle Vimeo URLs
    if (url.includes('vimeo.com')) {
      const videoId = url.split('/').pop();
      return `https://player.vimeo.com/video/${videoId}?autoplay=0&controls=1`;
    }
    
    // Return original URL for direct video files
    return url;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-7xl max-h-[95vh] w-full bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Badge className="bg-rose-600 text-white px-3 py-1">
                  {project.type}
                </Badge>
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              </div>
              
              <div className="flex items-center space-x-3">
                {mediaItems.length > 1 && (
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={prevMedia}
                      className="text-white hover:bg-white/20 rounded-full p-2"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <span className="text-white text-sm">
                      {currentMediaIndex + 1} / {mediaItems.length}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={nextMedia}
                      className="text-white hover:bg-white/20 rounded-full p-2"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                )}
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-white hover:bg-white/20 rounded-full p-2"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* Media Content */}
          <div className="relative h-[70vh] flex items-center justify-center bg-black">
            {currentMedia?.type === 'video' ? (
              <div className="relative w-full h-full">
                {/* Embedded Video Player */}
                <iframe
                  src={getVideoEmbedUrl(currentMedia.src)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={currentMedia.title}
                />
              </div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={currentMedia?.src}
                  alt={currentMedia?.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="p-8 bg-neutral-900 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  {project.longDescription || project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags?.map((tag: string, index: number) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-rose-600/50 text-rose-400 bg-rose-600/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-amber-400">Détails du Projet</h4>
                  <div className="space-y-2 text-neutral-300">
                    <p><span className="font-medium">Année:</span> {project.year}</p>
                    <p><span className="font-medium">Type:</span> {project.type}</p>
                    {project.photoCount && (
                      <p><span className="font-medium">Photos:</span> {project.photoCount}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.projectLink && (
                    <Button
                      asChild
                      className="bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white rounded-lg px-6 py-3"
                    >
                      <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Voir le Projet
                      </a>
                    </Button>
                  )}
                  
                  {project.videoLink && currentMedia?.type !== 'video' && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        const videoIndex = mediaItems.findIndex(item => item.type === 'video');
                        if (videoIndex !== -1) setCurrentMediaIndex(videoIndex);
                      }}
                      className="border-rose-600/50 text-rose-400 hover:bg-rose-600/10 rounded-lg px-6 py-3"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Regarder la Vidéo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Media Thumbnails */}
          {mediaItems.length > 1 && (
            <div className="p-6 bg-neutral-800 border-t border-neutral-700">
              <div className="flex gap-3 overflow-x-auto pb-2">
                {mediaItems.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      currentMediaIndex === index
                        ? 'ring-2 ring-rose-500 scale-105'
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={media.type === 'video' ? media.poster : media.src}
                      alt={media.title}
                      className="w-full h-full object-cover"
                    />
                    {media.type === 'video' && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;