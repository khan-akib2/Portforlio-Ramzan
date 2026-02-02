import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ProjectCategory = 'all' | 'development' | 'design';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'development' | 'design';
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Spotify Clone',
    description: 'A full-featured music streaming platform clone with modern UI and seamless user experience.',
    category: 'development',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'Spotify.png',
    
  },
  {
    id: 2,
    title: 'Red Bus Clone',
    description: 'Professional portfolio website with elegant design and smooth animations.',
    category: 'development',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'redBus.png',
  },
  {
    id: 3,
    title: 'Travels Website',
    description: 'Travel booking platform with stunning visuals and intuitive navigation.',
    category: 'development',
    tags: ['HTML', 'CSS', 'Tailwind'],
    image: 'Travels.png',
  },
  {
    id: 4,
    title: 'Swiggy App Clone',
    description: 'Food delivery app interface with modern design patterns and micro-interactions.',
    category: 'design',
    tags: ['Figma', 'UI/UX'],
    image: 'Swiggy2.png',
  },
  {
    id: 5,
    title: 'Gozoop Website Clone',
    description: 'Digital marketing agency website redesign with bold typography and creative layouts.',
    category: 'design',
    tags: ['Figma', 'UI/UX'],
    image: 'GOOZOOP2.png',
  },
  {
    id: 6,
    title: 'Snapdeal Website Clone',
    description: 'E-commerce platform redesign focusing on improved user journey and visual hierarchy.',
    category: 'design',
    tags: ['Figma', 'UI/UX'],
    image: 'SnapDeal.png',
  },
  {
    id: 7,
    title: 'Smartwatch Design',
    description: 'Sleek smartwatch interface design with intuitive health tracking features.',
    category: 'design',
    tags: ['Figma', 'UI/UX'],
    image: 'apple.jpg',
  },
  {
    id: 8,
    title: 'Halal Travels Redesign',
    description: 'Complete redesign of travel platform catering to specific audience needs.',
    category: 'design',
    tags: ['Figma', 'UI/UX'],
    image: 'halal.png',
  },
  {
    id: 9,
    title: 'Al-Hidayah Campus Redesign',
    description: 'Educational institution website and app redesign with modern aesthetics.',
    category: 'design',
    tags: ['Figma', 'UI/UX'],
    image: 'ALhidaya.png',
  },
  {
    id: 10,
      title: 'One Page Love Website Clone',
      description: 'Beautiful single-page website clone showcasing modern design patterns with smooth scrolling and interactive elements.',
    category: 'development',
      tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'Onepagelove.png',
  },
  {
    id: 11,
      title: 'ShipTrack Dashboard Clone',
      description: 'Professional shipment tracking dashboard with real-time updates and comprehensive logistics management interface.',
    category: 'development',
    tags: ['React', 'TypeScript', 'Tailwind'],
    image: 'Shiptrack.png',
  },
  {
    id: 12,
      title: 'Simple Loading Spinner',
      description: 'Collection of creative loading animations with smooth transitions and customizable styling options.',
    category: 'development',
      tags: ['HTML', 'CSS', 'Animation'],
    image: 'Loading.png',
  },
  {
    id: 13,
      title: 'Purplle Website Clone',
      description: 'Beauty and personal care e-commerce platform redesign with elegant UI and seamless shopping experience.',
    category: 'design',
    tags: ['Figma', 'UI/UX'],
    image: 'purplle.png',
  },
  {
    id: 14,
      title: 'Netflix Animation Design',
      description: 'Streaming platform interface with dynamic animations, smooth transitions, and engaging visual effects.',
    category: 'design',
      tags: ['Figma', 'Animation', 'UI/UX'],
    image: 'Netflix.png',
  },
  {
    id: 15,
      title: 'Bluepeak Website Clone',
      description: 'Corporate branding and website redesign with professional aesthetics and modern design principles.',
    category: 'design',
      tags: ['Figma', 'UI/UX', 'Branding'],
    image: 'Bluepeak.png',
  },
  {
    id: 16,
      title: 'Clinxecel Website Clone',
      description: 'Healthcare management platform design with intuitive navigation and user-centric interface patterns.',
    category: 'design',
    tags: ['Figma', 'UI/UX'],
    image: 'Clinexcel.png',
  },
  {
    id: 17,
      title: 'H&M Website Clone',
      description: 'Fashion retail platform redesign featuring modern layout, product showcase, and enhanced user engagement.',
    category: 'design',
      tags: ['Figma', 'UI/UX', 'E-commerce'],
    image: 'H&M.png',
  },
];

const categories = [
  { id: 'all', label: 'All Projects', icon: null },
  { id: 'development', label: 'Development', icon: Code },
  { id: 'design', label: 'UI/UX Design', icon: Palette },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development and design work, from web applications to UI/UX designs.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.id as ProjectCategory)}
                className={`rounded-full px-6 ${
                  activeCategory === cat.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-border hover:bg-secondary'
                }`}
              >
                {cat.icon && <cat.icon className="w-4 h-4 mr-2" />}
                {cat.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="glass-card rounded-xl overflow-hidden h-full">
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </motion.button>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.category === 'development' 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'bg-purple-500/20 text-purple-400'
                        }`}>
                          {project.category === 'development' ? 'Dev' : 'Design'}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-5">
                      <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-secondary rounded-md text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
