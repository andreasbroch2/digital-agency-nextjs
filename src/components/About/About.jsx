import { motion } from 'framer-motion';
import styles from './About.module.scss';
import Image from 'next/image';
import about01 from '../../assets/about01.png';
import about02 from '../../assets/about02.png';
import about03 from '../../assets/about03.png';
import about04 from '../../assets/about04.png';

export default function About() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.8 }}
      className="app__about app__flex"
    >
      <div id="about" className="app__container app__whitebg">
        <div className="app__wrapper app__flex">
          <div className={styles.app__about}>
            <h2 className="head-text">
              Vi ved at <span>online synlighed</span> <br />
              er den sikre vej til en <span>sund virksomhed</span>
            </h2>
            <div className={styles.app__profiles}>
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className={styles.app__profileItem}
              >
                <Image src={about01} alt="Betalt Annoncering - Grafik" width="300" height="300" />
                <h3>Betalt annoncering</h3>
                <p>Betalt annoncering såsom Facebook, Instagram, TikTok, Native Ads, Google, mf. er en essentiel del af de fleste virksomheders marketingmix.</p>
              </motion.div>              
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className={styles.app__profileItem}
              >
                <Image src={about02} alt="Organisk Rækkevidde - Grafik" width="300" height="300" />
                <h3>Organisk Rækkevidde</h3>
                <p>Organisk trafik kan komme fra både sociale medier gennem organiske opslag på sociale medier og gennem Google via SEO optimeret content på jeres hjemmeside.</p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className={styles.app__profileItem}
              >
                <Image src={about03} alt="Optimal konvertering - Grafik" width="300" height="300" />
                <h3>Optimal konvertering</h3>
                <p>Får du det meste ud af din trafik på hjemmeside? Højest sandsynligt ikke. Emailindsamling, exit-intent popups, push notifikationer og A/B test optimering af konverteringsrate på jeres hjemmeside kan øge værdien af hver enkelt besøgende.</p>
              </motion.div>              
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className={styles.app__profileItem}
              >
                <Image src={about04} alt="Email/SMS Marketing - Grafik" width="300" height="300" />
                <h3>Email/SMS Marketing</h3>
                <p>Uanset om det er besøgende der har skrevet sig op til jeres nyhedsbrev eller tidligere kunder, så har jeres kontaktliste en stor værdi. Optimering og automatisering af jeres e-mail og/eller sms marketing kan skaffe flere kunder og øge lifetimevalue af hver af dem.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
