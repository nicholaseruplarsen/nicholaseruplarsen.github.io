'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import CoursesTable from './coursestable';
import { useRouter } from 'next/navigation'

export default function Home() {
  const socialsize = 50;
  const timelinesize = 135;

  return (
    <main className={styles.main}>

      <link rel="icon" href="image/favicon.ico" sizes="any"/>
      
      {/* Background image */}
      <div className={styles.backgroundImage}></div>

      {/* Navigation bar */}
      <div className={styles.nav}>
        <Link href="/" className={styles.animation}>Home</Link>
        <Link href="/" className={styles.animation}>Projects</Link>
      </div>


      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.header}>Nicholas Erup Larsen</h1><br/>
        <h4 className={styles.header}>4th semester, studying AI &amp; Data at DTU. 21 years old.</h4>
      </div>


      {/* Timeline - maybe split into education and work?*/}
      <div id="history" className={styles.container}>
        <div className={styles.row}>
          <div className={styles.timespan}>Today</div>
          <div className={styles.ico}>
            <div className={styles.entry_dot} />
              <Image src="DTU logo.svg" width={timelinesize} height={timelinesize} alt="DTU logo"></Image>
          </div>
          <div className={styles.desc}>
            <CoursesTable />
          </div>

          <div className={styles.timespan}>2021 to 2022</div>
          <div className={styles.ico}>
            <div className={styles.entry_dot}>
              <Image src="CVPL logo.svg" width={timelinesize} height={timelinesize}  alt="CVPL logo"></Image>
            </div>
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
          <div className={styles.fadetimespan}>
            <div className={styles.entry_dot} />
              <Image src="Adobe logo (gradient).svg" width={timelinesize} height={timelinesize}  alt="Adobe logo"></Image>
            </div>
            <div className={styles.desc}>
              <h2>Video editing and thumbnail creation</h2>
              <h6>Freelance for YouTubers / Twitch Streamers (50-500k YT subcribers)</h6>
              <p>
              • 4-5.5 million total accumulated views on my own channel and others<br />
              • Used Adobe Premiere Pro as primary editing tool for all videos. Some of my work:&nbsp; <Link className={styles.animation} href="https://www.youtube.com/watch?v=Vg8a9jWai_g">&quot;Project Fire&quot; #1</Link>,&nbsp;&nbsp;
              <Link className={styles.animation} href="https://www.youtube.com/watch?v=TRU7F8gcCyE">&quot;Project Fire&quot; #2</Link><br />
              • Proficient in Adobe Photoshop to create mainly thumbnails and other general purpose stuff since I was 11 years old<br />
              </p>
            </div>
        </div>
      </div>

      {/* Social media links */}
      <div className={styles.socials}>
        <Link href="https://www.youtube.com/user/TheMrKofiX" className={styles.icon} target="_blank" rel="noopener noreferrer">
          <Image src="youtube.svg" width={socialsize} height={socialsize} alt="YouTube"></Image>
        </Link>
        <Link href="https://www.linkedin.com/in/nicholas-erup-larsen-a2134010b/" className={styles.icon} target="_blank" rel="noopener noreferrer">
          <Image src="linkedin.svg" width={socialsize} height={socialsize} alt="LinkedIn"></Image>
        </Link>
        <Link href="https://twitter.com/olasbondolas" className={styles.icon} target="_blank" rel="noopener noreferrer">
          <Image src="twitter.svg" width={socialsize} height={socialsize} alt="Twitter"></Image>
        </Link>
        <Link href="https://github.com/olasbondolas" className={styles.icon} target="_blank" rel="noopener noreferrer">
          <Image src="github.svg" width={socialsize} height={socialsize} alt="Discord"></Image>
        </Link>
      </div>

      {/* Grid at the bottom */}
      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>
            Projects <span>-&gt;</span>
          </h2>
          <p>Check out some of what I have done</p>
        </Link>
      </div>

      <div className={styles.ranks}>
        <div>
        <img src="diamond.webp" width="40%" height="40%"  decoding="async" alt="Diamond 4"/>
          <h4>Diamond 4</h4>
          <h6>
            Ladder rank: 36,826 (top <Link 
            target="_blank" rel="noopener noreferrer"
            href="https://cdn.discordapp.com/attachments/611591746635431964/1179169668737540228/IMG_4077.JPG?ex=6578ce54&is=65665954&hm=a88f9dceb6640b1be26803df8e864aa6628111861be7d3e200236cc827e1349b&" 
            className={styles.animation}>1.13%</Link>)<br/>
            Date achieved: July 17, 2023<br/><br/>
            League of Legends
          </h6>
        </div>
        
        <div>
          <img src="gladiator.webp" width="25%" height="25%" decoding="async" alt="Gladiator"/>
          <h4>2406 rated Elite (2v2)</h4>
          <h6>
            Ladder rank: 1353 (top &#126;<Link 
            target="_blank" rel="noopener noreferrer"
            href="https://ibb.co/gwRfHNY" 
            className={styles.animation}>0.47%</Link>)<br/>
            Date achieved: May 22, 2022<br/><br/>
            World of Warcraft: Shadowlands
          </h6>
        </div>
      </div>

    </main>
  )
}

