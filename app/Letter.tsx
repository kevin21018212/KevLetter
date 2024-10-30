"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./Letter.module.scss";

const Letter: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className={styles.letterContainer}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`${styles.letter} ${isOpen ? styles.open : ""}`}
        onClick={handleClick}
        style={{ transformOrigin: "left center" }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              className={styles.message}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <p>
                Dear Grandma, 🌸
                <br />
                Just wanted to send you a big virtual hug and all the love in the world! I;m thinking of you and can’t
                wait to see you feeling better soon. Take it easy, and remember, you’ve got this! 💪❤️
              </p>
              <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                Close
              </button>
            </motion.div>
          ) : (
            <motion.div className={styles.envelope} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
              ✉️ Tap to open your letter!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Letter;
