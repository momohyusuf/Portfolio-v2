import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillGroups } from "../data/skills";
import styles from "./Skills.module.css";

const categoryColors: Record<string, string> = {
  Frontend: "#E8FF00",
  Backend: "#00FFB2",
  Database: "#FF6B35",
  "DevOps & Tools": "#B388FF",
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className={`${styles.skills} section`}>
      <div className="container">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={styles.header}
        >
          <div className="section-label">
            <span>Skills</span>
          </div>
          <h2 className={styles.heading}>
            The stack I<br />
            <span className="accent">actually use.</span>
          </h2>
          <p className={styles.sub}>
            Not a resume checkbox — tools I've shipped real products with.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {skillGroups.map((group, gi) => {
            const color = categoryColors[group.category] ?? "#E8FF00";
            return (
              <motion.div
                key={group.category}
                className={styles.card}
                initial={{ y: 40, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.65,
                  delay: gi * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ "--card-accent": color } as React.CSSProperties}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardCategory}>{group.category}</span>
                  <div className={styles.cardDot} />
                </div>
                <ul className={styles.skillList}>
                  {group.skills.map((skill, si) => (
                    <motion.li
                      key={skill}
                      className={styles.skill}
                      initial={{ x: -10, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: gi * 0.1 + si * 0.04 + 0.2,
                      }}
                    >
                      <span className={styles.skillDash}>—</span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
