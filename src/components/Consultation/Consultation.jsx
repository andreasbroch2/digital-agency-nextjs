import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import styles from './Consultation.module.scss';

function Consultation() {
  return (
    <div>
      <div className={styles.textBox} >
        <h2>
          Anmod om en <span>gratis</span> konsultation
        </h2>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className={styles.text}
        >
          <p>
            Få et gratis og uforpligtende møde hvor vi gennemgår dit nuværende setup, og derefter kommer med en
            skræddersyet plan for hvordan vi kan løfte din forretning.
          </p>
        </motion.div>
        <a href="#contact"><button className="button">Book Konsultation</button></a>
      </div>
    </div>
  );
}

export default AppWrap(MotionWrap(Consultation, 'app__consultation'), 'consultation', 'app__bluebg');
