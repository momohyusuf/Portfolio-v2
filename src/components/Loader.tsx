import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Loader.module.css";

const QUOTE = '"What I cannot create,\nI do not understand."';
const ATTRIBUTION = "— Richard Feynman";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [showAttribution, setShowAttribution] = useState(false);
  const [exiting, setExiting] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const totalChars = QUOTE.length;
    let i = 0;
    intervalRef.current = setInterval(() => {
      i++;
      setDisplayedChars(i);
      if (i >= totalChars) {
        clearInterval(intervalRef.current!);
        setTimeout(() => setShowAttribution(true), 200);
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 900);
        }, 1800);
      }
    }, 38);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [onComplete]);

  const renderedText = QUOTE.slice(0, displayedChars);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.gridBg} />
          <div className={styles.content}>
            <pre className={styles.quote}>
              {renderedText}
              <span className={styles.cursor} />
            </pre>
            <motion.p
              className={styles.attribution}
              initial={{ opacity: 0, y: 10 }}
              animate={showAttribution ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {ATTRIBUTION}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
