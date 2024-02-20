import { useState, useRef } from "react";

import styles from "../../styles/Question.module.css";

export default function AnswersChoice({ answers, onSelect }) {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [isLevelFinished, setIsLevelFinished] = useState(false);

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
        let classNames = styles["question-card"];
        const chosenAnswer = selectedAnswer.find((a) => a.answer === answer);
        if (chosenAnswer)
        {
          classNames += chosenAnswer.isCorrect
            ? ` ${styles.correct}`
            : ` ${styles.incorrect}`;
        }
        else classNames += ` ${styles.available}`;
        return (
          <button
            className={classNames}
            key={answer}
            onClick={() => !isLevelFinished ? handleAnswerClick(answer) : null}
          >
            {answer}
          </button>
        );
      })}
    </div>
  );
}
