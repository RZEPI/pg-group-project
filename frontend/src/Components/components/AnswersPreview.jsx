import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import questions from "../../assets/questions";

import styles from "../styles/AnswersPreview.module.css";
import { getPoints } from "../util/util";

export default function AnswersPreview({ allAnswers }) {
  const [isFolded, setIsFolded] = useState(true);

  allAnswers = [
    [
      {
        answer: 2001,
        isCorrect: false,
      },
      {
        answer: 500,
        isCorrect: true,
      },
    ],
    [
      {
        answer: "NIE",
        isCorrect: false,
      },
      {
        answer: "TAK",
        isCorrect: true,
      },
    ],
    [
      {
        answer: "20 butelek",
        isCorrect: true,
      },
    ],
  ];

  function containerClickHandler() {
    setIsFolded((prevState) => !prevState);
  }

  let containerContent = <></>;

  if (!isFolded) {
    containerContent = (
      <>
        {allAnswers.map((answersForQuestion, questionIndex) => {
          const points = getPoints(answersForQuestion);
          return (
            <div key={questionIndex}>
              <div className={styles["question-header"]}>
                <h3>{`${questionIndex}.`}</h3>
                <h3>{questions[questionIndex].id}</h3>
                <h3>{`${points}pkt.`}</h3>
              </div>
              {answersForQuestion.map((answer, index) => {
                const elementsKey = `${questionIndex}${index}`;
                const elementsClass = answer.isCorrect
                  ? styles.correct
                  : styles.incorrect;
                return (
                  <p key={elementsKey} className={elementsClass}>
                    {answer.answer}
                  </p>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }
  const mainContainerClasses = isFolded
    ? `${styles["preview-container"]} ${styles["folded"]}`
    : styles["preview-container"];

  return (
    <div onClick={containerClickHandler} className={mainContainerClasses}>
      <div className={styles["header"]}>
        <h2></h2>
        <h2>Twoje odpowiedzi</h2>
        <motion.h2 animate={{rotate: isFolded ? 0 : 180}}>
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.h2>
      </div>
      {containerContent}
    </div>
  );
}
