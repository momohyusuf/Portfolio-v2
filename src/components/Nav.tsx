import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Nav.module.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoAccent}>M</span>
          <span className={styles.logoText}>Yusuf</span>
        </a>

        <nav className={styles.links}>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`${styles.link} ${active === href ? styles.linkActive : ""}`}
            >
              {label}
              {active === href && (
                <motion.span
                  className={styles.linkDot}
                  layoutId="nav-dot"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <a href="mailto:yusufmomoh6@gmail.com" className={styles.cta}>
          Hire Me
        </a>
      </div>
    </motion.header>
  );
}
