import { AppWrap, MotionWrap } from '../../wrapper';
import styles from './Prices.module.scss';

function Prices() {
  return (
    <>
      <div className={styles.pricingTable}>
        <h2 className="head-text">
          Den rette <span>løsning</span> til jeres behov
        </h2>
        <ul className={styles.pricingTableFirstTable}>
          <li className={styles.pricingTableFirstTableTable}>
            <div>
              <h3 className={styles.pricingTableFirstTableTable__header}>Start-Up</h3>
              <p className={styles.pricingTableFirstTableTable__desc}>
                Har i et marketingsbudget på mindre end 50.000,- pr. md. og ønsker at få mest muligt ud af dem?
              </p>
            </div>
            <ul className={styles.pricingTableFirstTableTable__options}>
              <li>Facebook annoncering</li>
              <li>Google annoncering</li>
              <li>E-mail automations</li>
            </ul>
            <div>
              <p className={styles.pricingTableFirstTableTable__pricing}>
                Fra <span> 5.000,- </span> pr. md.
              </p>
              <a href="#contact"><button className={styles.pricingTableFirstTableTable__getstart}>Book et møde</button></a>
            </div>
          </li>
          <li className={styles.pricingTableFirstTableTable}>
            <div>
              <h3 className={styles.pricingTableFirstTableTable__header}>Full Service</h3>
              <p className={styles.pricingTableFirstTableTable__desc}>
                Bedre og billigere end at have jeres egen marketingsafdeling. Vi sørger for at skaffe og konvertere
                trafik, samt maksimere lifetime value af jeres kunder!
              </p>
            </div>
            <ul className={styles.pricingTableFirstTableTable__options}>
              <li>Facebook annoncering</li>
              <li>Google annoncering</li>
              <li>E-mail automations</li>
              <li>Andre kanaler(TikTok, Snapchat, Pinterest, mf.)</li>
              <li>Native Ads</li>
              <li>SEO - Søgemaskineoptimering</li>
              <li>CRO - Konvertingsrateoptimering</li>
            </ul>
            <div>
              <p className={styles.pricingTableFirstTableTable__pricing}>
                Fra <span> 12.000,- </span> pr. md.
              </p>
              <a href="#contact"><button className={styles.pricingTableFirstTableTable__getstart}>Book et møde</button></a>
            </div>
          </li>
          <li className={styles.pricingTableFirstTableTable}>
            <div>
              <h3 className={styles.pricingTableFirstTableTable__header}>Hjemmeside</h3>
              <p className={styles.pricingTableFirstTableTable__desc}>
                Mangler din virksomhed en hjemmeside eller trænger den til at blive opdateret?
                <br />
                Vi bygger en flot og brugervenlig hjemmeside eller webshop som du bagefter selv kan administrerer.
              </p>
            </div>
            <ul className={styles.pricingTableFirstTableTable__options}>
              <li>Hjemmeside</li>
              <li>Webshop</li>
              <li>Søgemaskineoptimering</li>
              <li>Specialløsninger</li>
            </ul>
            <div>
              <p className={styles.pricingTableFirstTableTable__pricing}>
                Fra <span> 5.000,- </span>
              </p>
              <a href="#contact"><button className={styles.pricingTableFirstTableTable__getstart}>Book et møde</button></a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AppWrap(MotionWrap(Prices, 'app__prices'), 'prices', 'app__whitebg');
