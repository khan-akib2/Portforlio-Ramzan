import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, Code2, Sparkles } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Projects Completed', value: '10+' },
  { icon: Award, label: 'Certifications', value: '5+' },
  { icon: BookOpen, label: 'Currently Studying', value: 'AIML' },
  { icon: Sparkles, label: 'Years Experience', value: '6 MONTHS' },  
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
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
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Passionate About Creating
              <br />
              <span className="gradient-text">Digital Excellence</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Ramzan Khan</span>, a dedicated Web Developer 
                and UI/UX Designer currently pursuing my degree in Artificial Intelligence & Machine Learning 
                at <span className="text-foreground font-medium">Nexcore Institute of Technology</span>.
              </p>
              {/* <p className="text-lg text-muted-foreground leading-relaxed">
                My passion lies in bridging the gap between beautiful design and functional development. 
                I believe that great digital products should not only look stunning but also provide 
                seamless user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From crafting pixel-perfect UI designs in Figma to bringing them to life with clean, 
                efficient code, I enjoy every step of the creative process. I'm constantly learning 
                and exploring new technologies to enhance my skills.
              </p> */}

              {/* Currently Learning */}
              <div className="relative mt-4">
                <div className="glass-card rounded-xl p-6 sm:p-8 bg-gradient-to-br from-card/90 to-primary/10 border border-primary/20">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">What I'm Currently Learning</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <div className="font-semibold text-foreground">Full-Stack Development</div>
                        <div className="text-sm text-muted-foreground">Building end-to-end web applications with modern frameworks</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <div className="font-semibold text-foreground">Deep Learning</div>
                        <div className="text-sm text-muted-foreground">Training neural networks for computer vision and NLP tasks</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-ring mt-2" />
                      <div>
                        <div className="font-semibold text-foreground">Cloud Technologies</div>
                        <div className="text-sm text-muted-foreground">Deploying applications on AWS, Firebase, and Vercel</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="glass-card rounded-xl p-4 text-center"
                  >
                    <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-display text-2xl font-bold text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  {/* Profile Image Placeholder */}
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 border border-primary/20">
                    {/* <span className="font-display text-4xl font-bold gradient-text">RK</span> */}
                    <img src="HANDSOMEEEE.jpg" alt="Ramzan Khan" className="w-full h-full object-cover rounded-2xl" />
                  </div>

                  <div className="text-center">
                    <h3 className="font-display text-xl font-bold mb-1">Ramzan Khan</h3>
                    <p className="text-primary text-sm mb-4">Web Developer & UI/UX Designer</p>
                    
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-muted-foreground">📍</span>
                        <span className="text-muted-foreground">Nexcore Institute of Technology</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-muted-foreground">🎓</span>
                        <span className="text-muted-foreground">AIML (Artificial Intelligence & Machine Learning)</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-muted-foreground">💼</span>
                        <span className="text-muted-foreground">Open to Opportunities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card rounded-xl p-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code2 className="w-6 h-6 text-primary" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 glass-card rounded-xl p-3"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <Sparkles className="w-6 h-6 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
