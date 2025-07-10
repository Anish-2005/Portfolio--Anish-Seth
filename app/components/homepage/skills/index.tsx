'use client';

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: skillsData.filter(skill => 
        ['HTML', 'CSS', 'Javascript', 'TypeScript', 'React', 'Angular', 'Next JS', 'Tailwind', 'Bootstrap', 'SCSS', 'Sass'].includes(skill)
      )
    },
    {
      title: "Backend",
      skills: skillsData.filter(skill => 
        ['Node.js', 'Express.js', 'Python', 'Java', 'PHP', 'C', 'FastAPI', 'Django'].includes(skill)
      )
    },
    {
      title: "Database & Tools",
      skills: skillsData.filter(skill => 
        ['MongoDB', 'MySQL', 'Git', 'gcp', 'Figma', 'Docker', 'Vercel', 'Netlify'].includes(skill)
      )
    }
  ];

  return (
    <section id="skills" className="relative section-padding border-t border-primary-500/20">
      {/* Background Decorations */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent-500/10 rounded-full blur-2xl"></div>

      {/* Top Border Gradient */}
      <div className="flex justify-center -translate-y-[1px] absolute top-0 left-0 right-0">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent w-full" />
        </div>
      </div>

      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-primary-500"></span>
            <span className="bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 text-primary-300 p-3 px-8 text-xl font-bold rounded-lg mx-4 heading-secondary">
              Skills & Technologies
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-primary-500"></span>
          </div>
        </motion.div>

        {/* Skills Categories */}
        <motion.div 
          className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="classic-card p-6 text-center"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="heading-secondary text-xl font-bold text-primary-400 mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.slice(0, 6).map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-400"></div>
                    <span className="text-secondary-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Skills Marquee */}
        <motion.div 
          className="w-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Marquee
            gradient={false}
            speed={60}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
            className="py-4 overflow-hidden"
          >
            {skillsData.map((skill, id) => (
              <motion.div 
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center mx-4 group cursor-pointer"
                key={id}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="classic-card p-6 h-32 w-32 flex flex-col items-center justify-center border-primary-500/20 group-hover:border-primary-400/50 group-hover:bg-primary-500/5">
                  {/* Top Border Gradient */}
                  <div className="flex -translate-y-[1px] justify-center absolute top-0 left-0 right-0">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="h-10 w-10 mb-3 relative">
                    <Image
                      src={skillsImage(skill)?.src || '/next.svg'}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  
                  <p className="text-secondary-300 text-sm font-medium group-hover:text-primary-300 transition-colors duration-300 text-center">
                    {skill}
                  </p>
                </div>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>

        {/* Additional Marquee in Opposite Direction */}
        <motion.div 
          className="w-full mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="right"
            className="py-4 overflow-hidden"
          >
            {[...skillsData].reverse().map((skill, id) => (
              <motion.div 
                className="w-28 min-w-fit h-fit flex flex-col items-center justify-center mx-3 group cursor-pointer"
                key={`reverse-${id}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-dark-800/30 border border-primary-500/10 rounded-lg p-4 h-24 w-24 flex flex-col items-center justify-center group-hover:border-accent-400/30 group-hover:bg-accent-500/5 transition-all duration-300">
                  <div className="h-8 w-8 mb-2">
                    <Image
                      src={skillsImage(skill)?.src || '/next.svg'}
                      alt={skill}
                      width={32}
                      height={32}
                      className="h-full w-auto rounded filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <p className="text-secondary-400 text-xs font-medium group-hover:text-accent-300 transition-colors duration-300 text-center">
                    {skill}
                  </p>
                </div>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
