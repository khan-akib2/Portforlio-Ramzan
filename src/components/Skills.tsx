import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { 
    name: 'HTML', 
    icon: '🌐',
    level: 95,
    category: 'Frontend'
  },
  { 
    name: 'CSS', 
    icon: '🎨',
    level: 90,
    category: 'Frontend'
  },
  { 
    name: 'Tailwind CSS', 
    icon: '💨',
    level: 88,
    category: 'Frontend'
  },
  { 
    name: 'JavaScript', 
    icon: '⚡',
    level: 85,
    category: 'Frontend'
  },
  { 
    name: 'C Programming', 
    icon: '💻',
    level: 75,
    category: 'Programming'
  },
  { 
    name: 'Figma', 
    icon: '🎯',
    level: 92,
    category: 'Design'
  },
  { 
    name: 'Canva', 
    icon: '🖼️',
    level: 88,
    category: 'Design'
  },
  { 
    name: 'WordPress', 
    icon: '📝',
    level: 80,
    category: 'CMS'
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              My Expertise
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse toolkit spanning frontend development, UI/UX design, and programming languages.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-xl p-6 relative group overflow-hidden cursor-pointer"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{skill.name}</h3>
                  <span className="text-xs text-primary/80 font-medium">{skill.category}</span>
                  
                  {/* Skill Level Bar */}
                  <div className="mt-4 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                    />
                  </div>
                  <div className="mt-1 text-right">
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card">
              <span className="text-sm text-muted-foreground">
                Always learning and exploring new technologies
              </span>
              <span className="text-primary">✨</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
