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
      <div id="history" className={styles.container} style={{ width: '100%', margin: 'auto' }}>
        <div className={styles.row}>
          <div className={styles.timespan}>Today</div>
          <div className={styles.ico}>
            <div className={styles.entry_dot} />
          </div>
          <div className={styles.desc}>
            <h2 className={styles.header2}>Student</h2>
            <h6>DTU, Artificial Intelligence & Data</h6>
            <p>
              Completed courses: <br />
              • Mathematics 1 (20 ECTS) <br />
              • Discrete math (5 ECTS) <br />
              • Introduction to Intelligent Systems (10 ECTS) <br />
              • Introduction to programming and data processing (5 ECTS) <br />
              • Algorithms and data structures 1 (5 ECTS) <br />
              • Signals and data (5 ECTS) <br />
              • AI and human cognition (5 ECTS) <br />
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
            • 6 months of cyber training: <br />
            &nbsp; ◦ sysadmin experience in securely setting up network (Cisco) and server (both Windows and Linux) infrastructure<br />
            &nbsp; ◦ an extensive course in governance and risk management<br />
            &nbsp; ◦ pen-testing those same systems to discover and patch vulnerabilities<br />
            <br />
            • 4 months of military recruit training<br />
            &nbsp; ◦ disciplined<br />
            &nbsp; ◦ dependable<br />
            </p>
          </div>
          <div className={styles.timespan}>2014 to 2021</div>
          <div className={styles.fadeico}>
            <div className={styles.entry_dot} />
          </div>
          <div className={styles.desc}>
            <h2>Video editing and thumbnail creation</h2>
            <h6>Freelance for YouTubers / Twitch Streamers (50-500k YT subcribers)</h6>
            <p>
            • 4-5.5 million total accumulated views on my own channel and others<br />
            • Used Adobe Premiere Pro as primary editing tool for all videos. Some of my work: <a className={styles.animation} href="https://www.youtube.com/watch?v=Vg8a9jWai_g">"Project Fire" #1</a>,&nbsp;
            <a className={styles.animation} href="https://www.youtube.com/watch?v=TRU7F8gcCyE">"Project Fire" #2</a><br />
            • Proficient in Adobe Photoshop to create thumbnails and a bunch of other image manipulation since I was 11 years old<br />
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Timeline;


// Headers tags inside paragraphs causes hydration errors 