import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { TELEBOOK_CONFIG } from "../config.js";

const LOGO = "/telebook-logo.png";

const styles = `
  .telebook-landing {
    --bg: #020817;
    --bg2: #041126;
    --card: #06152c;
    --blue: #0d9cff;
    --cyan: #22d7ff;
    --text: #f7fbff;
    --muted: #a7b9d0;
    --line: rgba(37, 146, 255, 0.25);
    --max: 1180px;

    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    color: var(--text);
    background:
      radial-gradient(circle at 72% 20%, rgba(0, 121, 255, 0.15), transparent 27%),
      radial-gradient(circle at 20% 45%, rgba(0, 89, 255, 0.08), transparent 30%),
      var(--bg);
    line-height: 1.55;
    overflow-x: hidden;
    min-height: 100vh;
    scroll-behavior: smooth;
  }

  .telebook-landing *,
  .telebook-landing *::before,
  .telebook-landing *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .telebook-landing a { text-decoration: none; color: inherit }
  .telebook-landing .container { width: min(var(--max), calc(100% - 36px)); margin: auto }

  .telebook-landing .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    border-bottom: 1px solid transparent;
    background: rgba(2, 8, 23, .68);
    backdrop-filter: blur(18px);
    transition: .25s;
  }
  .telebook-landing .nav.scrolled { border-color: var(--line); background: rgba(2, 8, 23, .93) }
  .telebook-landing .nav-inner { height: 78px; display: flex; align-items: center; justify-content: space-between; gap: 30px }
  .telebook-landing .brand { display: flex; align-items: center; gap: 11px; font-size: 25px; font-weight: 800; letter-spacing: -1px }
  .telebook-landing .brand img { width: 48px; height: 48px; object-fit: contain }
  .telebook-landing .nav-links { display: flex; align-items: center; gap: 35px; color: #d6e4f5; font-size: 14px }
  .telebook-landing .nav-links a { position: relative }
  .telebook-landing .nav-links a:hover,
  .telebook-landing .nav-links .active { color: var(--cyan) }
  .telebook-landing .nav-links .active:after {
    content: ""; position: absolute; height: 2px; left: 0; right: 0; bottom: -27px;
    background: var(--cyan); box-shadow: 0 0 12px var(--cyan);
  }

  .telebook-landing .btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 9px;
    padding: 13px 20px; border-radius: 12px; border: 1px solid var(--line);
    font-weight: 750; cursor: pointer; transition: .25s; font-size: 14px;
  }
  .telebook-landing .btn-primary {
    background: linear-gradient(135deg, #0797ff, #14c9ff); color: #fff; border: 0;
    box-shadow: 0 9px 30px rgba(0, 153, 255, .25);
  }
  .telebook-landing .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 38px rgba(0, 153, 255, .38) }
  .telebook-landing .btn-outline { background: rgba(2, 10, 25, .55); border-color: #167dcc }
  .telebook-landing .btn-outline:hover { background: rgba(11, 99, 170, .12); transform: translateY(-2px) }

  .telebook-landing .menu { display: none; background: none; border: 0; color: #fff; font-size: 27px; cursor: pointer }
  .telebook-landing .mobile-menu { display: none }

  .telebook-landing .hero { min-height: 720px; padding: 145px 0 85px; position: relative; overflow: hidden }
  .telebook-landing .hero-grid { display: grid; grid-template-columns: .93fr 1.07fr; align-items: center; gap: 20px }
  .telebook-landing .badge {
    display: inline-flex; align-items: center; gap: 8px; padding: 7px 13px;
    border: 1px solid #078ce7; border-radius: 999px; color: #eaf8ff;
    background: rgba(0, 136, 255, .08); font-size: 12px; font-weight: 700;
    margin-bottom: 20px; box-shadow: 0 0 22px rgba(0, 147, 255, .1);
  }
  .telebook-landing .badge span { color: #52e6ff }
  .telebook-landing h1 { font-size: clamp(47px, 6vw, 75px); line-height: 1.02; letter-spacing: -3.5px }
  .telebook-landing .gradient { color: #10c5ff; text-shadow: 0 0 24px rgba(0, 186, 255, .12) }
  .telebook-landing .hero-copy p { color: #bdd0e6; font-size: 17px; max-width: 540px; margin: 20px 0 23px }
  .telebook-landing .checks { display: flex; flex-wrap: wrap; gap: 18px; color: #d8e8f8; font-size: 13px; margin-bottom: 27px }
  .telebook-landing .checks span::before {
    content: "\\2713"; display: inline-grid; place-items: center; width: 16px; height: 16px;
    border-radius: 50%; background: #08c77d; color: #001f16; font-size: 11px; font-weight: 900; margin-right: 7px;
  }
  .telebook-landing .hero-actions { display: flex; gap: 16px; flex-wrap: wrap }
  .telebook-landing .hero-art { height: 530px; position: relative; display: grid; place-items: center }
  .telebook-landing .hero-art:before {
    content: ""; position: absolute; width: 480px; height: 480px; border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 123, 255, .24), transparent 64%); filter: blur(15px);
  }
  .telebook-landing .glow {
    position: absolute; width: 370px; height: 370px; border: 2px solid rgba(0, 140, 255, .5);
    border-radius: 50%; box-shadow: 0 0 50px rgba(0, 125, 255, .32); transform: rotate(-12deg);
  }
  .telebook-landing .hero-logo {
    position: absolute; width: 370px; max-width: 72%;
    filter: drop-shadow(0 25px 30px rgba(0, 150, 255, .35));
    animation: telebook-float 5s ease-in-out infinite;
  }
  .telebook-landing .orbit {
    position: absolute; width: 440px; height: 170px; border: 1px solid rgba(0, 185, 255, .25);
    border-radius: 50%; transform: rotate(-24deg); box-shadow: 0 0 25px rgba(0, 125, 255, .18);
  }
  .telebook-landing .spark { position: absolute; width: 5px; height: 5px; border-radius: 50%; background: #26dfff; box-shadow: 0 0 15px #26dfff }
  .telebook-landing .s1 { top: 20%; left: 17% }
  .telebook-landing .s2 { top: 16%; right: 13% }
  .telebook-landing .s3 { bottom: 20%; left: 18% }
  .telebook-landing .s4 { bottom: 11%; right: 25% }
  .telebook-landing .privacy-note {
    position: absolute; right: 1%; bottom: 21%; font-size: 22px; font-style: italic;
    color: #fff; line-height: 1.05; transform: rotate(-5deg); text-align: center;
  }
  .telebook-landing .privacy-note:after {
    content: ""; display: block; width: 90px; height: 2px; background: #fff;
    transform: rotate(-7deg); margin: 12px auto;
  }

  @keyframes telebook-float { 50% { transform: translateY(-10px) rotate(1deg) } }

  .telebook-landing .divider { height: 1px; background: linear-gradient(90deg, transparent, var(--line), transparent) }
  .telebook-landing section { padding: 86px 0 }
  .telebook-landing .center { text-align: center }
  .telebook-landing .kicker { font-size: 12px; letter-spacing: 2.3px; font-weight: 800; color: #1ccfff; text-transform: uppercase }
  .telebook-landing h2 { font-size: clamp(34px, 4vw, 48px); letter-spacing: -2px; line-height: 1.1; margin-top: 8px }
  .telebook-landing .sub { color: var(--muted); margin: 13px auto 35px; max-width: 690px }

  .telebook-landing .features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px }
  .telebook-landing .card {
    padding: 25px; border: 1px solid var(--line); border-radius: 15px;
    background: linear-gradient(145deg, rgba(5, 27, 55, .76), rgba(3, 14, 30, .8));
    min-height: 170px; transition: .25s;
  }
  .telebook-landing .card:hover { transform: translateY(-5px); border-color: #078fdf; box-shadow: 0 15px 45px rgba(0, 118, 255, .1) }
  .telebook-landing .icon {
    width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center;
    background: linear-gradient(145deg, #0878dd, #062c83); font-size: 21px; margin-bottom: 15px;
    box-shadow: 0 0 20px rgba(0, 120, 255, .18);
  }
  .telebook-landing .card h3 { font-size: 15px; margin-bottom: 6px }
  .telebook-landing .card p { font-size: 13px; color: #9eb3ca; max-width: 270px }

  .telebook-landing .how { display: grid; grid-template-columns: 1fr 1fr; gap: 65px; align-items: center }
  .telebook-landing .device { height: 370px; position: relative; display: grid; place-items: center }
  .telebook-landing .device-window {
    width: 70%; height: 245px; border: 2px solid #0a7fe4; border-radius: 16px;
    background: linear-gradient(145deg, #061b36, #020b18); box-shadow: 0 0 50px rgba(0, 126, 255, .3);
    padding: 13px; position: relative;
  }
  .telebook-landing .device-window:before {
    content: ""; display: block; width: 42%; height: 8px; border-radius: 20px; background: #0d4e92; margin: 3px auto 15px;
  }
  .telebook-landing .mock-lines { display: grid; gap: 9px }
  .telebook-landing .mock-lines i { display: block; height: 20px; border-radius: 6px; background: linear-gradient(90deg, #0a3560, #06182d) }
  .telebook-landing .mock-lines i:nth-child(2),
  .telebook-landing .mock-lines i:nth-child(5) { width: 78%; margin-left: auto; background: linear-gradient(90deg, #075e9e, #0c9eea) }
  .telebook-landing .phone {
    position: absolute; width: 105px; height: 220px; border: 2px solid #0c9eea; border-radius: 19px;
    background: #030b19; right: 10%; bottom: 25px; box-shadow: 0 0 30px rgba(0, 142, 255, .38); padding: 8px;
  }
  .telebook-landing .phone:before { content: ""; display: block; width: 40%; height: 5px; background: #123453; border-radius: 5px; margin: 1px auto 11px }
  .telebook-landing .phone i { display: block; height: 15px; background: #092b4f; border-radius: 5px; margin: 7px 0 }

  .telebook-landing .steps { display: grid; gap: 22px; margin-top: 27px }
  .telebook-landing .step { display: grid; grid-template-columns: 42px 1fr; gap: 14px; align-items: start }
  .telebook-landing .num {
    width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center;
    background: linear-gradient(145deg, #1bbdff, #0873d8); font-weight: 800;
  }
  .telebook-landing .step h3 { font-size: 15px }
  .telebook-landing .step p { font-size: 13px; color: #9eb3ca; margin-top: 2px }

  .telebook-landing .download-band {
    border: 1px solid #0b8de4; border-radius: 15px; padding: 28px; display: flex;
    align-items: center; justify-content: space-between; gap: 20px;
    background: radial-gradient(circle at 75% 30%, rgba(0, 142, 255, .17), transparent 40%), #041531;
    box-shadow: inset 0 0 70px rgba(0, 97, 255, .07);
  }
  .telebook-landing .download-brand { display: flex; align-items: center; gap: 18px }
  .telebook-landing .download-brand img { width: 70px; height: 70px }
  .telebook-landing .download-brand h3 { font-size: 21px; line-height: 1.1 }
  .telebook-landing .download-brand p { color: #9eb3ca; font-size: 13px; margin-top: 4px }
  .telebook-landing .platforms { display: flex; align-items: center; gap: 10px }
  .telebook-landing .platform {
    width: 43px; height: 43px; border: 1px solid var(--line); border-radius: 50%;
    display: grid; place-items: center; font-size: 19px; background: #071a34;
  }

  .telebook-landing footer { border-top: 1px solid var(--line); padding: 40px 0 22px }
  .telebook-landing .footer-top { display: flex; justify-content: space-between; gap: 30px; align-items: center }
  .telebook-landing .footer-brand p { font-size: 12px; color: #91a6bd; margin-top: 5px }
  .telebook-landing .footer-links { display: flex; gap: 27px; font-size: 13px; color: #b7c7da; flex-wrap: wrap; justify-content: center }
  .telebook-landing .footer-links a:hover { color: #fff }
  .telebook-landing .support { font-size: 12px; text-align: right; color: #c9d8e9 }
  .telebook-landing .support a { color: #e8f5ff }
  .telebook-landing .support small { display: block; color: #7489a2; margin-top: 2px }
  .telebook-landing .copyright {
    border-top: 1px solid var(--line); margin-top: 25px; padding-top: 17px;
    text-align: center; color: #71859d; font-size: 11px;
  }

  @media (max-width: 900px) {
    .telebook-landing .nav-links,
    .telebook-landing .nav .btn { display: none }
    .telebook-landing .menu { display: block }
    .telebook-landing .mobile-menu {
      display: none; padding: 12px 18px 18px; border-top: 1px solid var(--line); background: rgba(2, 8, 23, .97);
    }
    .telebook-landing .mobile-menu.open { display: grid; gap: 15px }
    .telebook-landing .hero-grid,
    .telebook-landing .how { grid-template-columns: 1fr }
    .telebook-landing .hero { padding-top: 115px }
    .telebook-landing .hero-art { order: -1; height: 390px }
    .telebook-landing .hero-logo { width: 280px }
    .telebook-landing .glow { width: 300px; height: 300px }
    .telebook-landing .orbit { width: 350px; height: 140px }
    .telebook-landing .privacy-note { right: 5%; bottom: 15%; font-size: 17px }
    .telebook-landing .features { grid-template-columns: 1fr 1fr }
    .telebook-landing .download-band { align-items: flex-start; flex-direction: column }
    .telebook-landing .footer-top { align-items: flex-start; flex-direction: column }
    .telebook-landing .support { text-align: left }
  }

  @media (max-width: 570px) {
    .telebook-landing .container { width: calc(100% - 28px) }
    .telebook-landing .nav-inner { height: 68px }
    .telebook-landing .brand { font-size: 21px }
    .telebook-landing .brand img { width: 40px; height: 40px }
    .telebook-landing h1 { font-size: 50px; letter-spacing: -2.5px }
    .telebook-landing .hero-copy p { font-size: 15px }
    .telebook-landing .checks { gap: 10px; display: grid }
    .telebook-landing .hero-art { height: 330px }
    .telebook-landing .hero-logo { width: 235px }
    .telebook-landing .glow { width: 250px; height: 250px }
    .telebook-landing .orbit { width: 290px; height: 115px }
    .telebook-landing .privacy-note { font-size: 14px; right: 0 }
    .telebook-landing .features { grid-template-columns: 1fr }
    .telebook-landing section { padding: 68px 0 }
    .telebook-landing .device { height: 300px }
    .telebook-landing .device-window { width: 85%; height: 205px }
    .telebook-landing .phone { width: 82px; height: 175px; right: 2%; bottom: 12px }
    .telebook-landing .download-brand { align-items: flex-start }
    .telebook-landing .download-brand img { width: 52px; height: 52px }
    .telebook-landing .platforms { width: 100% }
    .telebook-landing .footer-links { justify-content: flex-start; gap: 15px }
  }
`;

const features = [
  { icon: "🔒", title: "End-to-End Encryption", text: "Your messages are encrypted from your device to theirs. No one can read them." },
  { icon: "</>", title: "Open Source", text: "Transparent, community-driven and secure. You can verify our code." },
  { icon: "◉", title: "No Tracking", text: "We don't collect, store or sell your data. Your privacy is 100% yours." },
  { icon: "⬡", title: "Secure & Reliable", text: "Built with modern security standards for a safer messaging experience." },
  { icon: "♟", title: "Group Chats & Channels", text: "Connect with friends, communities and teams — privately." },
  { icon: "↗", title: "Simple & Beautiful", text: "Clean, fast and easy to use. Focus on what matters: your conversations." },
];

const steps = [
  { title: "Download the app", text: "Click the download button above and get the latest version." },
  { title: "Open & Create Account", text: "Set up your profile in just a few steps." },
  { title: "Start Chatting", text: "Invite your friends and enjoy private, secure conversations." },
];

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="telebook-landing">
      <style>{styles}</style>

      <nav className={scrolled ? "nav scrolled" : "nav"}>
        <div className="container nav-inner">
          <a className="brand" href="#home">
            <img src={LOGO} alt="Telebook logo" />
            Telebook
          </a>
          <div className="nav-links">
            <a className="active" href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#why">Why Telebook</a>
            <a href="#download">Download</a>
          </div>
          <a className="btn btn-primary" href={TELEBOOK_CONFIG.downloadUrl} download>
            ⇩&nbsp; Download App
          </a>
          <button className="menu" onClick={() => setMenuOpen((open) => !open)} aria-label="Menu">
            ☰
          </button>
        </div>

        <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#why" onClick={closeMenu}>Why Telebook</a>
          <a href="#download" onClick={closeMenu}>Download</a>
          <Link to="/terms" onClick={closeMenu}>Terms &amp; Conditions</Link>
          <Link to="/privacy" onClick={closeMenu}>Privacy Policy</Link>
        </div>
      </nav>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="badge"><span>🔒</span> 100% Privacy. Always.</div>
              <h1>
                Telebook<br />Chat Freely,<br />
                <span className="gradient">Stay Private.</span>
              </h1>
              <p>
                Telebook is an open source, end-to-end encrypted messaging app that keeps your
                conversations 100% private. No tracking. No data mining. Just you and your chats.
              </p>
              <div className="checks">
                <span>Open Source</span>
                <span>End-to-End Encryption</span>
                <span>100% Privacy</span>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href={TELEBOOK_CONFIG.downloadUrl} download>
                  ⇩&nbsp; Download App
                </a>
                <a
                  className="btn btn-outline"
                  href={TELEBOOK_CONFIG.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ◉&nbsp; View Source
                </a>
              </div>
            </div>

            <div className="hero-art">
              <div className="glow" />
              <div className="orbit" />
              <span className="spark s1" />
              <span className="spark s2" />
              <span className="spark s3" />
              <span className="spark s4" />
              <img className="hero-logo" src={LOGO} alt="Telebook paper plane logo" />
              <div className="privacy-note">Your Privacy<br />Our Priority</div>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section id="features">
          <div className="container">
            <div className="center">
              <div className="kicker">Key Features</div>
              <h2>Why Telebook?</h2>
              <p className="sub">Built for people who value freedom, privacy and open technology.</p>
            </div>
            <div className="features">
              {features.map((f) => (
                <article className="card" key={f.title}>
                  <div className="icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why">
          <div className="container how">
            <div className="device">
              <div className="device-window">
                <div className="mock-lines">
                  <i /><i /><i /><i /><i /><i />
                </div>
              </div>
              <div className="phone">
                <i /><i /><i /><i /><i /><i />
              </div>
            </div>
            <div>
              <div className="kicker">How It Works</div>
              <h2>Get Started in Minutes</h2>
              <div className="steps">
                {steps.map((s, i) => (
                  <div className="step" key={s.title}>
                    <div className="num">{i + 1}</div>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="download" style={{ paddingTop: "25px" }}>
          <div className="container">
            <div className="download-band">
              <div className="download-brand">
                <img src={LOGO} alt="" />
                <div>
                  <h3>Ready to experience<br />private messaging?</h3>
                  <p>Download Telebook now and take control of your privacy.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                <a className="btn btn-primary" href={TELEBOOK_CONFIG.downloadUrl} download>
                  ⇩&nbsp; Download App
                </a>
                <div className="platforms">
                  <span className="platform">🤖</span>
                  <span className="platform">●</span>
                  <span className="platform">🐧</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a className="brand" href="#home">
                <img src={LOGO} alt="" />
                Telebook
              </a>
              <p>Open Source&nbsp; • &nbsp;End-to-End Encrypted&nbsp; • &nbsp;100% Private</p>
            </div>
            <div className="footer-links">
              <Link to="/about">About App</Link>
              <Link to="/terms">Terms &amp; Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/delete-account">Delete Account</Link>
            </div>
            <div className="support">
              ✉ <a href={`mailto:${TELEBOOK_CONFIG.supportEmail}`}>{TELEBOOK_CONFIG.supportEmail}</a>
              <small>Need help? Contact our support team.</small>
            </div>
          </div>
          <div className="copyright">© {new Date().getFullYear()} Telebook. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
