import styles from "../styles/Logos.module.css";
import { motion } from 'framer-motion';
import { twitter, discord, youtube, github } from './imports';
import Image from "next/image";


function Logos() {
  const imgsize = 50
  return (
  <div className={styles.gpt3__brand}>
    <motion.a
      className={styles.gpt3__brand}
      alt="Twitter"
      href="https://twitter.com/olasbondolas"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className={styles.image__styling}><Image src={twitter} layout="fill" alt="Twitter" /></div>
    </motion.a>
    <motion.a
      className={styles.gpt3__brand}
      alt="Discord"
      href="https://discord.gg/ZmyjDGvQxA"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className={styles.image__styling}><Image src={discord} width={imgsize} height={imgsize} alt="Discord" /></div>
    </motion.a>
    <motion.a
      className={styles.gpt3__brand}
      alt="YouTube"
      href="https://www.youtube.com/user/TheMrKofiX"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0}}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className={styles.image__styling}><Image src={youtube} width={imgsize} height={imgsize} alt="YouTube" /></div>
    </motion.a>
    <motion.a
      className={styles.gpt3__brand}
      alt="GitHub"
      href="https://github.com/olasbondolas"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className={styles.image__styling}><Image src={github} width={imgsize} height={imgsize} alt="GitHub" /></div>
    </motion.a>
  </div>
  )
};

export default Logos;
