import {  useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../styles/ClassChoice.module.css";

import { motion, AnimatePresence } from "framer-motion";

import { ALL_CLASSES } from "../store/classes";

export default function ClassChoice() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFolded, setIsFolded] = useState(true);
  const [currentClass, setCurrentClass] = useState(searchParams.get("classId") || ALL_CLASSES[0]);

  useEffect(() => {
    setCurrentClass(searchParams.get("classId") || ALL_CLASSES[0]);
  }, [searchParams]);

  function classClickHandler(newClass) {
    if(isFolded)
      return;
    setIsFolded(true);
    setCurrentClass(newClass);
    setSearchParams({ classId: newClass });
  }

  function clickHandler() {
    setIsFolded((prevState) => !prevState);
  }

  let containerClass = styles["choice-folded"];

  if (!isFolded) {
    containerClass += ` ${styles["choice-unfolded"]}`;
  }

  return (
    <div className={styles["choice-container"]}>
      <div onClick={clickHandler} className={containerClass}>
        <p className={styles["active-class"]}>{`Klasa ${currentClass}`}</p>
        <motion.span
          animate={{ rotate: isFolded ? 0 : 180}}
          className={styles["folding-arrow"]}
        >
          &#9660;
        </motion.span>
      </div>
      <AnimatePresence>
        {!isFolded && (
          <motion.div
            className={styles["choices"]}
            variants={{
              visible: { transition: { staggerChildren: 0.5, staggerDirection:1 } },
            }}
          >
            {ALL_CLASSES.map((cl, index) => (
              <motion.p
                onClick={() => classClickHandler(cl)}
                key={cl}
                custom={index}
                exit={{ y: -30*(index+1)}}
                initial={{ y: -30*(index+1)}}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
              >
                {`Klasa ${cl}`}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
