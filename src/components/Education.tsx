import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    id: 1,
    institution: 'Nexcore Institute of Technology',
    degree: 'AIML (Artificial Intelligence & Machine Learning)',
    period: '2023 - Present',
    description: 'Currently pursuing a degree in Artificial Intelligence and Machine Learning, focusing on cutting-edge technologies and practical applications.',
    highlights: ['Machine Learning', 'Deep Learning', 'Data Science', 'Python'],
    status: 'current',
  },
];

const certifications = [
  { name: 'Web Development Fundamentals', issuer: 'Online Certification', year: '2023' },
  { name: 'UI/UX Design Principles', issuer: 'Design Course', year: '2023' },
  { name: 'JavaScript Advanced', issuer: 'Online Course', year: '2024' },
  { name: 'Figma Mastery', issuer: 'Design Platform', year: '2024' },
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
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
              Education
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Academic <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My educational background and certifications in technology and design.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-xl font-semibold mb-8 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-border" />

                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative pl-8 pb-8 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 ${
                      edu.status === 'current' 
                        ? 'bg-primary border-primary animate-pulse' 
                        : 'bg-background border-muted-foreground'
                    }`} />

                    <div className="glass-card rounded-xl p-6">
                      {/* Status Badge */}
                      {edu.status === 'current' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          Currently Studying
                        </span>
                      )}

                      <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                        {edu.institution}
                      </h4>
                      <p className="text-primary font-medium mb-3">{edu.degree}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          India
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4">{edu.description}</p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2.5 py-1 bg-secondary rounded-md text-xs text-muted-foreground"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-display text-xl font-semibold mb-8 flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="glass-card rounded-xl p-5 flex items-center gap-4 cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <span className="text-xl">📜</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{cert.year}</span>
                  </motion.div>
                ))}
              </div>

              {/* LinkedIn CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8"
              >
                <a
                  href="https://www.linkedin.com/in/ramzan-khan-81a797379/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card hover:bg-primary/10 transition-colors text-sm font-medium group"
                >
                  <span>View all certifications on LinkedIn</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
