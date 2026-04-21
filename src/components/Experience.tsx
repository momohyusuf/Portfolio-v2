import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "../data/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      className={`${styles.experience} section`}
    >
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">
            <span>Experience</span>
          </div>
          <h2 className={styles.heading}>
            Where I've been
            <br />
            <span className="accent">building.</span>
          </h2>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className={styles.item}
              initial={{ x: -30, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.65,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={styles.itemLeft}>
                <div className={styles.dot} />
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.itemContent}>
                <div className={styles.itemHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <ul className={styles.bullets}>
                  {exp.description.map((line, li) => (
                    <li key={li} className={styles.bullet}>
                      <span className={styles.bulletDot} />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
