import type { CSSProperties } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Typewriter } from "react-simple-typewriter";
import DownloadButton from "./components/DownloadButton";
import * as WebTheme from "./shared/styles/webTheme";
import "./styles.scss";

const theme = WebTheme.WEB_THEME.dark;

function App() {
  const vars = {
    "--bg0": theme.bg0,
    "--bg1": theme.bg1,
    "--bg2": theme.bg2,
    "--text": theme.text,
    "--muted": theme.muted,
    "--accent": theme.accent,
    "--accentDeep": theme.accentDeep,
    "--warn": theme.warn,
    "--hero": WebTheme.WEB_GRADIENTS.hero,
    "--glow": WebTheme.WEB_GRADIENTS.glow,
  } as CSSProperties;

  return (
    <ParallaxProvider>
      <div className="page" style={vars}>
        <header className="topbar">
          <div className="logo">
            <span className="logo-icon" aria-hidden="true">
              <svg viewBox="0 0 36 36" role="img">
                <path
                  d="M25.5007 12.4717C25.5007 12.4717 26.25 7.47778 26.25 5.99925C26.25 4.52072 20.2072 0.80625 20.0137 0.47475C18.7462 -0.15825 17.2552 -0.15825 15.9892 0.47475C15.7957 0.80625 9.75 4.0245 9.75 5.76225C9.75 7.5 10.5022 12.4717 10.5022 12.4717L6.19417 29.7037C5.81317 31.2277 6.15067 32.8102 7.11667 34.0492C8.08417 35.2867 9.53917 35.9977 11.1097 35.9977H24.8932C26.4637 35.9977 27.9202 35.2867 28.8862 34.0492C29.8537 32.8102 30.1897 31.2262 29.8087 29.7022L25.5007 12.4717ZM21.0007 6.75C21.7062 8.03297 21.0007 10.4992 21.0007 10.4992H15.0007C15.0007 10.4992 14.2952 8.03299 15.0007 6.75C15.6784 5.51746 16.5934 4.75604 18 4.75575C19.407 4.75546 20.3227 5.5171 21.0007 6.75ZM25.3402 31.2802C25.2622 31.3792 25.1212 31.4992 24.8932 31.4992H21.0007V28.4992C21.0007 26.8417 19.6575 27 18 27C16.3425 27 15.0007 26.8417 15.0007 28.4992V31.4992H11.1082C10.8802 31.4992 10.7392 31.3807 10.6612 31.2802C10.5832 31.1797 10.5022 31.0147 10.5577 30.7957L14.5072 14.9992H21.4942L25.4437 30.7942C25.4992 31.0147 25.4167 31.1812 25.3402 31.2802ZM35.7637 13.7542C35.3692 14.5417 34.5742 14.9977 33.7492 14.9977C33.4102 14.9977 33.0682 14.9212 32.7442 14.7607L29.7442 13.2607C28.6327 12.7042 28.1827 11.3542 28.7377 10.2412C29.2942 9.13125 30.6457 8.68275 31.7572 9.23475L34.7572 10.7347C35.8687 11.2912 36.3187 12.6412 35.7637 13.7542ZM0.237667 1.24275C0.794167 0.13275 2.14567 -0.31575 3.25717 0.23625L6.25717 1.73625C7.36867 2.29275 7.81867 3.64275 7.26367 4.75575C6.86917 5.54325 6.07417 5.99925 5.24917 5.99925C4.91017 5.99925 4.56817 5.92275 4.24417 5.76225L1.24417 4.26225C0.132667 3.70575 -0.317333 2.35425 0.237667 1.24275ZM28.7377 4.75575C28.1827 3.64425 28.6327 2.29275 29.7442 1.73625L32.7442 0.23625C33.8587 -0.31575 35.2087 0.13275 35.7637 1.24275C36.3187 2.35425 35.8687 3.70575 34.7572 4.26225L31.7572 5.76225C31.4332 5.92275 31.0912 5.99925 30.7522 5.99925C29.9272 5.99925 29.1322 5.54325 28.7377 4.75575ZM6.25717 13.2622L3.25717 14.7622C2.93317 14.9227 2.59117 14.9992 2.25217 14.9992C1.42717 14.9992 0.632167 14.5432 0.237667 13.7557C-0.317333 12.6442 0.132667 11.2927 1.24417 10.7362L4.24417 9.23625C5.35717 8.68425 6.70867 9.13275 7.26367 10.2427C7.81867 11.3542 7.36867 12.7057 6.25717 13.2622Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="logo-text">
              <span className="logo-muted">Ma</span>
              <span className="logo-accent">ya</span>
              <span className="logo-muted">k</span>
            </span>
          </div>
          <div className="cta-row">
            <a className="ghost" href="#contact" style={{ textDecoration: "none" }}>
              Contact
            </a>
          </div>
        </header>
        <main className="hero">
          <Parallax speed={-6}>
            <div className="hero-text">
              <p className="eyebrow">FIND PEOPLE THROUGH SHARED MOMENTS</p>
              <h1>
                Mayak —{" "}
                <Typewriter
                  words={["meet people through real plans, not just profiles."]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={9999}
                  delaySpeed={999999}
                  loop={1}
                />
              </h1>
              <p className="subtitle">
                Stop swiping through strangers. Start connecting through things you
                actually want to do. Mayak matches you with people who share your
                plans — not just your vibe.
              </p>
              <div className="hero-actions">
                <DownloadButton className="primary" label="Download for Android" />
                {/* <button className="secondary">How it works</button> */}
              </div>
              <div className="mini-stats">
                {/* <div>
                  <span className="stat">Event-based</span>
                  <span className="stat-label">matching, not profile browsing</span>
                </div>
                <div>
                  <span className="stat">Mutual</span>
                  <span className="stat-label">interest required to start a chat</span>
                </div>
                <div>
                  <span className="stat">Built-in</span>
                  <span className="stat-label">messenger with every match</span>
                </div> */}
              </div>
            </div>
          </Parallax>

          {/* <div style={{ marginTop: 0 }}></div> */}

          <Parallax speed={8}>
            <div className="hero-card">
              <div className="card-header">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <div className="card-body">
                <h3>Connect in one swipe</h3>
                <p>
                  Post an event — "Cinema tonight", "Hiking this Sunday", "Coffee
                  downtown". Others swipe your plan. A match means a real
                  conversation.
                </p>
                <div className="pill-row">
                  <span className="pill">Hiking</span>
                  <span className="pill">Coffee</span>
                  <span className="pill">Cinema</span>
                </div>
                <div className="download">
                  <DownloadButton className="primary" label="Get for Android" />
                </div>
              </div>
            </div>
          </Parallax>
        </main>

        <section className="info">
          <div className="info-card">
            <h4>Made for real life</h4>
            <p>
              Going to a concert alone? New in the city? Looking for a hiking
              buddy? Mayak is built for people who want more than an online chat
              — they want to actually show up.
            </p>
          </div>
          <div className="info-card">
            <h4>Your plans, your people</h4>
            <p>
              Post what you're planning. Swipe what looks interesting. When both
              sides say yes — the chat opens. Simple, fast, no small talk
              required.
            </p>
          </div>
          <div className="info-card">
            <h4>Always with you</h4>
            <p>
              Available on Android. Supports 6 languages, dark and light themes,
              and works seamlessly wherever you are.
            </p>
          </div>
        </section>

        <section className="info">
          <div className="info-card">
            <h4>Find your people. Light your Mayak.</h4>
            <p>Join people who connect through shared moments — not just photos.</p>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-main">
            <div>
              <h4>Nebrainrotik</h4>
              <p>Mayak for Android — events-first dating and real plans.</p>
            </div>
            <div id="contact">
              <h5>Contact</h5>
              <p>Support: nebrainrotik@gmail.com</p>
            </div>
          </div>
          <div className="footer-devs">
            <span>Developed by:</span>
            <span>Андрій, Олена, Влад, Наталя, Антон🏆, Захар</span>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Nebrainrotik. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  );
}

export default App;
