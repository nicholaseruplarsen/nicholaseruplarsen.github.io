import styles from "../styles/Header.module.css";
import ai from "../assets/aii.webm";
import { motion } from "framer-motion";
import Logos from "./Logos";

function Header() {
    return (
        <div className={styles.gpt3__header} id="home">
            <div className={styles.gpt3__header_content}>
                <h1 className={styles.gpt3__header_content}>Nicholas Erup Larsen</h1>
                    <p className={styles.typed_out}>2nd semester, studying Artificial Intelligence &amp; Data at the Technical University of Denmark.</p>
                    <p className={styles.typed_out}>Currently looking for my next hobby or job-related coding project!</p>
                    <p className={styles.typed_out}>I could wait 3 years and get a real nice job but I&apos;m too eager to get started now.</p>
                    <Logos />
            </div>
            <motion.div className={styles.gpt3__header_image} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <video autoPlay loop muted ><source src={ai} type="video/mp4" /></video>
            </motion.div>
      </div>
    )
};

export default Header;
