import { motion } from "framer-motion";
import styles from "../styles/Timeline.module.css";

function Timeline(){
  return (
    <motion.div 
    className={styles.gpt3__features}
    initial={{ opacity: 0, y: 0, }}
    animate={{ opacity: 1, y: -10, }}
    >
      <div className={styles.gpt3__features_heading}>
        <h1 className={styles.gpt3__features_heading}>CV</h1>
      </div>
      <div id="history" className={styles.container}>
        <div className={styles.row}>
          <div className={styles.timespan}>Today</div>
          <div className={styles.ico}>
            <div className={styles.entry_dot} />
          </div>
          <div className={styles.desc}>
            <h2 className={styles.header2}>Full-stack developer</h2>
            <h6>Upwork</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            </p>
          </div>
          <div className={styles.timespan}>2021 to 2022</div>
          <div className={styles.ico}>
            <div className={styles.entry_dot} />
          </div>
          <div className={styles.desc}>
            <h2>Cybersecurity & InfoSec</h2>
            <h6>Danish Army</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            </p>
          </div>
          <div className={styles.timespan}>2014 to 2021</div>
          <div className={styles.fadeico}>
            <div className={styles.entry_dot} />
          </div>
          <div className={styles.desc}>
            <h2>Video editing and thumbnail creation</h2>
            <h6>Freelance for YouTubers (50k-200k+ subs)</h6>
            <p>
              Adobe Photoshop. Adobe Premiere Pro.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Timeline;


// Headers tags inside paragraphs causes hydration errors 