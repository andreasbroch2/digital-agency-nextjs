import { motion } from 'framer-motion';
import Image from 'next/image';
import {techs} from './skillsList';

export default function Skills() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.8 }}
      className="app__skills app__flex"
    >
      <div id="skills" className="app__container app__primarybg">
        <div className="app__wrapper app__flex">
          <h2 className="head-text">Kompetencer</h2>
          <div className="app__skills-container">
            <motion.div className="app__skills-list">
              {techs.map((skill) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  key={skill.name}
                >
                  <div className="app__flex">
                    <Image src={skill.icon} alt={skill.name} width="150" height="150" />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
