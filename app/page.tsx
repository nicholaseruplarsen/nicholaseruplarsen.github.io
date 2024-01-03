'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import CoursesTable from './(coursestable)';
import gladiator from '/public/static/gladiator.webp'
import diamond from '../public/static/diamond.webp'
import youtube from '../public/svgs/youtube.svg';
import linkedin from '../public/svgs/linkedin.svg';
import twitter from '../public/svgs/twitter.svg';
import github from '../public/svgs/github.svg';
import profilbillede from '../public/Profilbillede.png';

export default function Home() {
  const timelinesize = 135;

  type ImageLoaderProps = {     // TypeScript specific otherwise src is red highlighted in IDE
    src: string;
  };

  const loaderProp = ({ src }: ImageLoaderProps) => {     // Fixes next/image not statically loading and returning a 404 error 
    return src;
  } 

  return (
    <main className={styles.main}>

      <link rel="icon" href="image/favicon.ico" sizes="any"/>
      
      {/* Background image */}
      <div className={styles.backgroundImage} />

      {/* Navigation bar */}
      <div className={styles.nav}>
        <Link href="/" className={styles.animation}>Home</Link>
        <Link href="/projects" className={styles.animation}>Projects</Link>
      </div>


      {/* Header without profile picture */}
      <div className={styles.header}>
        <h1 className={styles.header}>Nicholas Erup Larsen</h1><br/>
        <h4 className={styles.header}>4th semester, studying AI & Data at DTU. 21 years old. <Image src="danish.svg" width={15} height={10} alt="Flag"/></h4>
      </div>

      {/* Header with profile picture */}
      {/* <div className={styles.headerrow}>
        <div className={styles.header}>
          <h1 className={styles.header}>Nicholas Erup Larsen</h1><br/>
          <h4 className={styles.header}>4th semester, studying AI & Data at DTU. 21 years old. <Image src="danish.svg" width={15} height={10} alt="Flag"/></h4>
        </div>
        <div className={styles.headerimg}>
          <Image src={profilbillede} className={styles.imgLight} width={100} height={100} alt="Profilbillede" />
        </div>
      </div> */}


      {/* Timeline - maybe split into education and work?*/}
      <div className={styles.cont}>
      <div id="timeline" className={styles.container}>
        <div className={styles.row}>
          <div className={styles.timespan}>Today</div>
          <div className={styles.ico}>
            <div className={styles.entry_dot}>
              <Image src="DTU logo.svg" className={styles.imgLight} width={timelinesize} height={timelinesize} alt="DTU logo" />
            </div>
          </div>
          <div className={styles.desc}>
            <CoursesTable />
          </div>

          <div className={styles.timespan}>2021 to 2022</div>
          <div className={styles.ico}>
            <div className={styles.entry_dot}>
              <Image src="CVPL logo.svg" width={timelinesize} height={timelinesize} alt="CVPL logo" />
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

          <div className={styles.timespan}>2018 to 2021</div>
          <div className={styles.ico}>
            <div className={styles.entry_dot}>
              <Image src="Niels brock logo.svg" width={timelinesize} height={timelinesize} alt="HHX logo" />
            </div>
          </div>
          <div className={styles.desc}>
            <h2>Business & Science Elite (HHX)</h2>
            <h6>Niels Brock DIG</h6>
            <p>
            • Mathematics A <br />
            • Microeconomics A <br />
            • Macroecoomics A <br />
            • English A <br />
            • Danish A <br />
            </p>
          </div>

          <div className={styles.timespan}>2014 to today</div>
          <div className={styles.fadeico}>
            <div className={styles.entry_dot}></div>
              <Image src="Adobe logo (gradient).svg" className={styles.imgLight} width={timelinesize} height={timelinesize}  alt="Adobe logo" />
          </div>
            <div className={styles.desc}>
              <h2>Video editing and thumbnail creation</h2>
              <h6>Freelance for YouTubers / Twitch Streamers (50-500k YT subcribers)</h6>
              <p>
              • 4-5.5 million total accumulated views on my own channel and others<br />
              • Used Adobe Premiere Pro as primary editing tool for all videos. Some of my work:&nbsp; <Link className={styles.animation} href="https://www.youtube.com/watch?v=Vg8a9jWai_g" target="_blank" rel="noopener noreferrer">&quot;Project Fire&quot; #1</Link>,&nbsp;&nbsp;
              <Link className={styles.animation} href="https://www.youtube.com/watch?v=TRU7F8gcCyE" target="_blank" rel="noopener noreferrer">&quot;Project Fire&quot; #2</Link><br />
              • Proficient in Adobe Photoshop to create mainly thumbnails and other general purpose stuff since I was 11 years old<br />
              </p>
            </div>
        </div>
      </div>
      </div>

      {/* Social media links */}
      <div className={styles.cont}>
      <div className={styles.socials}>
        <Link href="https://www.youtube.com/user/TheMrKofiX" className={styles.icon} target="_blank" rel="noopener noreferrer">
          <Image style={{width: 'auto', height: '5vh',}} src={youtube} alt="YouTube"></Image>
        </Link>
        <Link href="https://www.linkedin.com/in/nicholas-erup-larsen-a2134010b/" className={styles.icon} target="_blank" rel="noopener noreferrer">
          <Image style={{width: 'auto', height: '5vh',}} src={linkedin} alt="LinkedIn"></Image>
        </Link>
        <Link href="https://twitter.com/olasbondolas" className={styles.icon} target="_blank" rel="noopener noreferrer">
          <Image style={{width: 'auto', height: '5vh',}} src={twitter} alt="Twitter"></Image>
        </Link>
        <Link href="https://github.com/olasbondolas" className={styles.icon} target="_blank" rel="noopener noreferrer">
          <Image style={{width: 'auto', height: '5vh',}} src={github} alt="GitHub"></Image>
        </Link>
      </div>
      </div>


      {/* Projects call to action */}
      <div className={styles.cont}>
      <div className={styles.grid}>
        <Link href="/projects" className={styles.card}>
          <h2>
            Projects <span>-&gt;</span>
          </h2>
          <p>Check out some of what I have done</p>
        </Link>
      </div>
      </div>


      {/* Ranks */}
      <div className={styles.cont}>
        <div className={styles.ranks}>
          <div className={styles.ranksimg} >
            {/* <img src="/static/diamond.webp" min-width="40%" max-width="40%" width="40%" height="40%"  decoding="async" alt="Diamond 4"/> */}
            <div className={styles.ranksimg} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image style={{ width: 'auto', height: '12vh' }} src={diamond} decoding="async" alt="Diamond 4" loader={loaderProp} />
            </div>
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
          
          <div className={styles.ranksimg} >
            {/* <img src="/static/gladiator.webp" min-width="250px" max-width="250px" width="25%" height="25%" decoding="async" alt="Gladiator"/> */}
            <Image src={gladiator} style={{width: 'auto', height: '12vh'}} decoding="async" alt="Gladiator" loader={loaderProp}/>
            <h4>2406 rated Elite (2v2)</h4>
            <h6>
              Ladder rank: 1353 (top &#126;<Link 
              target="_blank" rel="noopener noreferrer"
              href="https://www.reddit.com/r/worldofpvp/comments/looczp/pvp_rating_distribution/" 
              className={styles.animation}>0.47%</Link>)<br/>
              Date achieved: May 22, 2022<br/><br/>
              World of Warcraft: Shadowlands
            </h6>
          </div>
        </div>
      </div>
    </main>
  )
}

