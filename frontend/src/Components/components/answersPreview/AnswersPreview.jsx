import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../../styles/AnswersPreview.module.css";

import AllAnswers from "./AllAnswers";

export default function AnswersPreview() {
  const [isFolded, setIsFolded] = useState(true);

  function containerClickHandler() {
    setIsFolded((prevState) => !prevState);
  }

  const mainContainerClasses = isFolded
    ? `${styles["preview-container"]} ${styles["folded"]}`
    : styles["preview-container"];

  return (
    <div
      onClick={containerClickHandler}
      className={mainContainerClasses}
    >
      <div className={styles["header"]}>
        <h2></h2>
        <h2>Twoje odpowiedzi</h2>
        <motion.h2 animate={{ rotate: isFolded ? 0 : 180 }}>
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.h2>
      </div>
      <AnimatePresence>
        {!isFolded && <AllAnswers />}
      </AnimatePresence>
    </div>
  );
}
