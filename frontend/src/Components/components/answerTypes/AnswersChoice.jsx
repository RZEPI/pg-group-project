import { useState, useRef } from "react";
import { motion } from "framer-motion";

import styles from "../../styles/AnswersChoice.module.css";

export default function AnswersChoice({ answers, onSelect }) {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [isLevelFinished, setIsLevelFinished] = useState(false);

  const variants = {
    correct: { y: [10, -10, 10, -10, 10, 0], scale: 1.1 },
    incorrect: { x: [-10, 10, -10, 10, -10, 0], scale: 1 },
    hover: { scale: 1.1 },
  };

  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  function handleAnswerClick(answer) {
    const isCorrect = answer === answers[0];
    const answerObj = { answer, isCorrect };
    setSelectedAnswer((previousAnswers) => [...previousAnswers, answerObj]);
    setIsLevelFinished(isCorrect);
    onSelect(answerObj);
  }

  return (
    <div className={styles["answers-choice"]}>
      {shuffledAnswers.current.map((answer) => {
        let classNames = styles["choice-button"];
        let variant;
        let isHoverOn = !isLevelFinished;
        const chosenAnswer = selectedAnswer.find((a) => a.answer === answer);
        if (chosenAnswer) {
          if (chosenAnswer.isCorrect) {
            classNames += ` ${styles.correct}`;
            variant = "correct";
          } else {
            classNames += ` ${styles.incorrect}`;
            variant =
              selectedAnswer[selectedAnswer.length - 1]?.answer === answer
                ? "incorrect"
                : null;
          }
        } else classNames += ` ${styles.available}`;
        return (
          <motion.button
            variants={variants}
            whileHover={isHoverOn ? "hover" : null}
            animate={variant}
            className={classNames}
            key={`${answer}_${Math.random()}`}
            onClick={() =>
              !isLevelFinished ? handleAnswerClick(answer) : null
            }
          >
            {answer}
          </motion.button>
        );
      })}
    </div>
  );
}
