import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import chessboard from '../../public/static/latex chessboard.png';
import iteration from '../../public/static/Iteration 4 transparent.png';
import landingpage from '../../public/static/Landing Page.png';


export default function Projects() {
  return (
    <main className={styles.main}>
      {/* Background image */}
      <div className={styles.backgroundImage} />

      {/* Navigation bar */}
      <div className={styles.nav}>
        <Link href="/" className={styles.animation}>Home</Link>
        <Link href="/projects" className={styles.animation}>Projects</Link>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.header}>Projects</h1>
        <h6>(Some uni projects for now)</h6>
      </div>

      <div className={styles.grid}>
        <a className={styles.card}  href="ux" target="_blank" rel="noopener noreferrer">
          <h2>UX Design Project <span>-&gt;</span></h2>
          <br />
          <Image unoptimized className={styles.cardImage} src={landingpage} alt="Landing Page" />
          <br />
          <Image unoptimized className={styles.cardImage} src={iteration} alt="Iteration" />
          <br /><br />
          <p>November 2023. Designing, prototyping, and iterating app designs with the customer in focus. <br /><br /> Course was a lot better than I expected.</p>
        </a>
        <a className={styles.card}  href="/chessai" target="_blank" rel="noopener noreferrer">
          <h2>Chess CNN <span>-&gt;</span></h2>
          <br />
          <Image unoptimized className={styles.cardImage} src={chessboard} alt="Chess board" />
          <br /><br />
          <p>January 2023. Trained a convolutional neural network (CNN) on large datasets of pro players&apos; moves to emulate their playing style and let stockfish play out the rest if the games were a draw. Used DTU&apos;s high performance computer (HPC) to train the model.</p>
        </a>
      </div>
    </main>
  )
}

