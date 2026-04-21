import { useState, useCallback } from "react";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import GitHubContributions from "./components/GitHubContributions";
import styles from "./App.module.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Cursor />
      {!loaded && <Loader onComplete={handleLoaderComplete} />}
      {loaded && (
        <div className={styles.site}>
          <Nav />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <GitHubContributions />
            <Blog />
            <Contact />
          </main>
          <footer className={styles.footer}>
            <div className="container">
              <div className={styles.footerInner}>
                <span className={styles.footerLogo}>
                  <span className={styles.footerAccent}>M</span>Yusuf
                </span>
                <p className={styles.footerQuote}>
                  "What I cannot create, I do not understand."
                </p>
                <span className={styles.footerCopy}>
                  © {new Date().getFullYear()} Momoh Yusuf
                </span>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
