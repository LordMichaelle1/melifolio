"use client";

import { motion } from 'framer-motion';

const skillCategories = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'JavaScript', level: 88 },
  ],
  backend: [
    { name: 'Node.js', level: 82 },
    { name: 'Express', level: 78 },
    { name: 'GraphQL', level: 75 },
    { name: 'REST API', level: 85 },
  ],
  database: [
    { name: 'MongoDB', level: 78 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'Firebase', level: 70 },
  ],
  styling: [
    { name: 'Tailwind CSS', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'Sass', level: 75 },
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'Figma', level: 70 },
  ]
};

const SkillCircle = ({ skills, radius, startAngle = 0, colorClass }) => {
  const angleStep = (2 * Math.PI) / skills.length;
  
  return (
    <div className="absolute inset-0">
      {skills.map((skill, index) => {
        const angle = startAngle + angleStep * index;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const scale = 0.7 + (skill.level / 100) * 0.6;
        
        return (
          <motion.div
            key={`${skill.name}-${index}`}
            className={`absolute text-sm font-medium px-3 py-1.5 tag-neon whitespace-nowrap ${colorClass}`}
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              zIndex: Math.floor(scale * 10)
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100
            }}
            whileHover={{
              scale: scale * 1.2,
              zIndex: 100,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
            }}
          >
            {skill.name}
            <span className="ml-1 text-xs opacity-70">{skill.level}%</span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default function SkillsCloud() {
  return (
    <div className="relative w-full h-[500px] max-w-4xl mx-auto flex items-center justify-center py-12">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Center circle */}
        <motion.div 
          className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-lg font-bold text-gradient glow">
            My Skills
          </span>
        </motion.div>

        {/* Skill circles */}
        <SkillCircle 
          skills={skillCategories.frontend}
          radius={120}
          startAngle={0}
          colorClass="bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
        />
        
        <SkillCircle 
          skills={skillCategories.backend}
          radius={180}
          startAngle={Math.PI / 4}
          colorClass="bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
        />
        
        <SkillCircle 
          skills={skillCategories.database}
          radius={240}
          startAngle={Math.PI / 2}
          colorClass="bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition-colors"
        />
        
        <SkillCircle 
          skills={skillCategories.styling}
          radius={180}
          startAngle={-Math.PI / 4}
          colorClass="bg-pink-500/10 text-pink-400 border border-pink-500/20 hover:bg-pink-500/20 transition-colors"
        />
        
        <SkillCircle 
          skills={skillCategories.tools}
          radius={120}
          startAngle={-Math.PI / 2}
          colorClass="bg-gray-500/10 text-gray-300 border border-gray-500/20 hover:bg-gray-500/20 transition-colors"
        />
      </div>
    </div>
  );
}
