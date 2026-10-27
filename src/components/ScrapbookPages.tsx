import Image from "next/image";
import { PostcardForm } from "./PostcardForm";
import aboutPhoto from "@/assets/about.png";
import { profile, socialLinks, skillGroups } from "@/content/profile";
import { experience, education } from "@/content/journey";
import { achievements } from "@/content/achievements";

export function AboutPages() { return (
        <section id="about" className="scrap-section about-section">
          <div className="about-collage reveal"><Image className="pressed-flower about-botanical" src="/assets/pressed-lavender.png" alt="" width={400} height={600} sizes="140px" /><figure className="about-polaroid"><span className="paper-tape" aria-hidden="true" /><Image src={aboutPhoto} alt="Sushila standing beneath a flowering tree" sizes="(max-width: 768px) 85vw, 420px" /><figcaption className="hand">a little sunshine, somewhere in Nepal</figcaption></figure></div>
          <div className="about-copy reveal"><p className="eyebrow">ABOUT ME</p><h2>Hi, I&apos;m Sushila.<br /><span className="hand">Sushi works, too.</span></h2><p>{profile.bio}</p><p>{profile.engineeringFocus}</p></div>
          <div className="toolbox reveal"><p className="hand">my development toolkit</p><div>{skillGroups.map(group => <div className="tool-group" key={group.label}><h3>{group.label}</h3><p>{group.skills.join(" / ")}</p></div>)}</div></div>
        </section>
); }

export function JourneyPages() { return (
        <section id="journey" className="scrap-section journey-section"><div className="section-heading reveal"><p className="eyebrow">EXPERIENCE</p><h2>The story <span className="hand">so far.</span></h2></div><div className="journey-paper reveal"><span className="paper-tape" aria-hidden="true" /><div className="journey-work"><h3 className="hand">where I&apos;ve been building</h3>{experience.map(item => <article className="journey-entry" key={item.title + item.place}><span className="journey-date">{item.when.replaceAll("–", "-")}</span><h4>{item.title}</h4><p className="journey-place">{item.place}</p><p>{item.note}</p></article>)}</div><div className="journey-school"><h3 className="hand">where it started</h3>{education.map(item => <article className="journey-entry" key={item.title}><span className="journey-date">{item.when.replaceAll("–", "-")}</span><h4>{item.title}</h4><p>{item.place}</p></article>)}</div></div></section>
); }

export function AwardPages() { return (
        <section id="gold-stars" className="scrap-section awards-section"><p className="hand">a few proud moments</p><div className="awards-list">{achievements.map(item => <article className="award-item reveal" key={item.detail}><div><h3>{item.title}</h3><p>{item.detail.replace(" — ", " / ")}</p>{item.year && <span>{item.year}</span>}</div></article>)}</div></section>
); }

export function ContactPostcard() { return (
        <section id="contact" className="scrap-section contact-section"><div className="postcard reveal"><div className="postcard-message"><p className="eyebrow">A NOTE TO YOU</p><h2>Let&apos;s make<br />something <span className="hand">lovely.</span></h2><p>Have an idea, a project, or a good story?<br />I&apos;d love to hear it.</p><p className="hand sign-off">with love, sushi ♡</p></div><div className="postcard-address"><span className="botanical-postage" aria-hidden="true"><span className="hand">hello</span><Image src="/assets/pressed-lavender.png" alt="" width={70} height={100} sizes="60px" /></span><p className="hand">a little note to sushi</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} ↗︎</a><PostcardForm recipient={profile.email}/><div className="socials">{socialLinks.map(link => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label} ↗︎</a>)}</div></div></div></section>
); }

