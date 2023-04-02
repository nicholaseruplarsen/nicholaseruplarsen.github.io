import Link from "next/link";
import styles from "../styles/Nav.module.css";
import Image from 'next/image'
import logo from '../assets/logo.png'

function Nav() {
  return (
    <>
    <nav>
      <div className={styles.nav}>
        <a className={styles.logo} href="/"><Image src={logo} layout="" alt="Logo s"/></a>
        <div className={styles.navlinks}>
          <Link href="/"><a className={styles.animation}>Home</a></Link>
          <Link href="/posts"><a className={styles.animation}>Posts</a></Link>
          <Link href="/projects"><a className={styles.animation}>Projects</a></Link>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Nav;

// the <a> tags in here are the root source of the hydration errors 
// Fix: https://stackoverflow.com/questions/68407052/next-js-adding-a-css-class-to-link