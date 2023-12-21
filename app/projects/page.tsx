import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
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
      </div>
    </main>
  )
}

