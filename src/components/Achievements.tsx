import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "../data/achievements";
import styles from "./Achievements.module.css";

const TAG_LABELS = {
  hackathon: "Hackathon",
  training: "Training",
  award: "Award",
};

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      ref={ref}
      className={`${styles.achievements} section`}
    >
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">
            <span>Recognition</span>
          </div>
          <h2 className={styles.heading}>
            Achievements &amp;
            <br />
            <span className="accent">milestones.</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              className={styles.card}
              initial={{ y: 32, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.65,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={styles.cardTop}>
                <span className={`${styles.tag} ${styles[item.tag]}`}>
                  {TAG_LABELS[item.tag]}
                </span>
                <span className={styles.organiser}>{item.organiser}</span>
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
