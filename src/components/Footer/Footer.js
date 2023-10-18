import { AppWrap, MotionWrap } from '../../wrapper';
import styles from './Footer.module.scss';
import dynamic from 'next/dynamic';
import useOnScreen from '../useOnScreen';
import { useState, useEffect, useRef } from 'react';

const Child3 = dynamic(() => import('../Calendly/Calendly'), { ssr: false });
const Footer = () => {
  const child3Ref = useRef();
  const child3RefValue = useOnScreen(child3Ref);
  const [isChild3Ref, setIsChild3Ref] = useState(false);
  useEffect(() => {
    if (!isChild3Ref) setIsChild3Ref(child3RefValue);
  }, [child3RefValue]);
  return (
    <>
      <h2 className="head-text">
        Gratis <span>Strategisamtale</span>
      </h2>
      <div className={styles.footerContainer}>
        <div className={styles.footerWidget} ref={child3Ref}>
          {isChild3Ref && <Child3 />}
        </div>
        <div className={styles.footerWidget}>
          <h6>Book et møde</h6>
          <h3>15 min Gratis konsultation</h3>
          <p>
            Få et gratis og uforpligtende møde hvor vi gennemgår dit nuværende setup, og derefter kommer med en
            skræddersyet plan for hvordan vi kan løfte din forretning.
          </p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
