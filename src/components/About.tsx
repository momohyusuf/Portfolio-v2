import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./About.module.css";

const facts = [
  { label: "Specialization", value: "Fullstack Engineering" },
  {
    label: "Backend Strength",
    value: "APIs, Auth, Real-time Systems, Payments",
  },
  { label: "Frontend Craft", value: "React, Next.js, TypeScript" },
  { label: "Philosophy", value: "Build to understand" },
  { label: "Based in", value: "Nigeria 🇳🇬" },
];

const fadeUp = (delay = 0) => ({
  hidden: { y: 32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className={`${styles.about} section`}>
      <div className="container">
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left — Quote */}
          <motion.div className={styles.quoteCol} variants={fadeUp(0)}>
            <div className={styles.quoteBlock}>
              <span className={styles.quoteOpen}>"</span>
              <p className={styles.quoteText}>
                What I cannot create,
                <br />I do not understand.
              </p>
              <p className={styles.quoteAttr}>— Richard Feynman</p>
              <div className={styles.quoteAccentLine} />
            </div>
            <p className={styles.bio}>
              This isn't just a quote on a wall — it's how I work. Every system
              I build, I understand at its core. I've built backends that power
              real products used by real people: logistics platforms in London,
              telemedicine apps across Africa, and frontend experiences that
              tell a brand's story.
            </p>
            <p className={styles.bio}>
              I care about the whole product — not just my slice of it. That
              means readable code, thoughtful architecture, and features that
              actually make someone's day easier.
            </p>
          </motion.div>

          {/* Right — Facts */}
          <motion.div className={styles.factsCol} variants={fadeUp(0.2)}>
            <div className={styles.sectionLabel}>
              <span>About</span>
            </div>
            <h2 className={styles.heading}>
              The engineer
              <br />
              behind the work.
            </h2>
            <ul className={styles.facts}>
              {facts.map((fact, i) => (
                <motion.li
                  key={fact.label}
                  className={styles.fact}
                  variants={fadeUp(0.3 + i * 0.07)}
                >
                  <span className={styles.factLabel}>{fact.label}</span>
                  <span className={styles.factValue}>{fact.value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
