import Image from "next/image";
import Link from "next/link";
import photo from "@/assets/profile.png";
import { profile } from "@/content/profile";
import { ScrapbookShell } from "./ScrapbookShell";
import { ContactPostcard } from "./ScrapbookPages";
import { ProjectCollection } from "./ProjectCollection";

export function Scrapbook() {
  return <ScrapbookShell active="/">
        <header className="scrap-hero">
          <div className="hero-copy">
            <p className="hand hero-greeting">hello, internet. i&apos;m sushi!</p>
            <h1>A little code.<br />A lot of <em>heart.</em></h1>
            <p className="hero-description">Frontend engineer, UI at heart.<br />Making thoughtful things for the web,<br className="desktop-break" /> one tiny detail at a time.</p>
            <a className="ink-button" href="/work">Explore my work <span aria-hidden>↗</span></a>
          </div>
          <div className="hero-collage">
            <div className="keepsake-paper" aria-hidden="true" />
            <Image className="pressed-flower hero-botanical" src="/assets/pressed-lavender.png" alt="" width={400} height={600} sizes="170px" />
            <figure className="hero-polaroid"><span className="paper-tape" aria-hidden="true" /><Image src={photo} alt="Sushila smiling and making a peace sign" sizes="(max-width: 640px) 240px, 300px" preload /><figcaption className="hand">Sushila Shrestha <span>♡</span></figcaption></figure>
          </div>
          <div className="hero-bottom"><span>{profile.location}</span><span>Currently building @ VEEL</span><span aria-hidden="true">♡</span></div>
        </header>
    <section className="scrap-section chapter-section" aria-labelledby="chapters-title">

      <h2 id="chapters-title">A few other <span className="hand">chapters.</span></h2>
      <div className="chapter-grid">
        <Link href="/library" className="chapter-link library-chapter"><div className="mini-books" aria-hidden="true"><i/><i/><i/><i/><i/></div><h3>The library <span>↗</span></h3><p>Books to get lost in, and space for the thoughts they leave behind.</p></Link>
        <Link href="/watch-diary" className="chapter-link drama-chapter"><div className="mini-tickets" aria-hidden="true"><i>ADMIT ONE</i><i>WATCH DIARY</i></div><h3>The watch diary <span>↗</span></h3><p>Dramas, stories, and the next thing on the watchlist.</p></Link>
      </div>
    </section>

    <section id="work" className="scrap-section"><div className="section-heading"><p className="eyebrow">A FEW RECENT PROJECTS</p><h2>Made with <span className="hand">curiosity.</span></h2></div><ProjectCollection preview/><Link className="text-link" href="/work">Browse all projects ↗</Link></section>

    <ContactPostcard/>
  </ScrapbookShell>;
}
