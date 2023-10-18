import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import Image from 'next/image';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex" id="herocontainer">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="tag-cmp app__flex">
          <h3>Eksperter i online synlighed</h3>
        </div>
      </div>
    </motion.div>
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <div className="badge-cmp app__flex">
        <div style={{ marginLeft: 20, width: "max-content" }}>
          <h1>
            Mere <span>Trafik</span><br />
            Øget <span>Konvertering</span><br />
            Flere <span>Leads/Salg</span>
          </h1>
        </div>
      </div>
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle.src}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
    <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles">
      {[images.tiktok.src, images.facebook.src, images.react.src].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <Image src={circle} alt="profile_bg" width="100" height="100" priority/>
        </div>
      ))}
    </motion.div>
    <Image src={images.bgIMG} priority id="heroimg" width="3840" height="2160" placeholder="blur"/>
  </div>
);

export default AppWrap(Header, 'home');
