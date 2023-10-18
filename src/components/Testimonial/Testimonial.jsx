import { motion } from 'framer-motion';
import NavigationDots from '../NavigationDots';

export default function Testimonial() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.8 }}
      className="app__skills app__flex"
    >
      <div id="skills" className="app__container app__primarybg">
        <div className="app__wrapper app__flex">
          <h2>Cases</h2>
            <div className="app__testimonial-item app__flex">
              <div className="app__testimonial-content">
                <p className="p-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div>
                  <h4 className="bold-text">Hjemmeside + Facebook annoncering</h4>
                  <h5 className="p-text">Bilforhandler</h5>
                </div>
              </div>
            </div>
        </div>
        <NavigationDots active="about" />
      </div>
    </motion.div>
  );
}
