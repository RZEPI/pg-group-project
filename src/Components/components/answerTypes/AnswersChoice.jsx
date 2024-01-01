import { useState, useRef } from "react";

import styles from "../../styles/Question.module.css";

export default function AnswersChoice({ answers, onSelect }) {
  const [selectedAnswer, setSelectedAnswer] = useState();

  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  function handleAnswerClick(answer) {
    console.log(answer + " " + answers[0]);
    const answerObj = { answer, isCorrect: answer === answers[0] };
    setSelectedAnswer(answerObj);
    onSelect(answerObj);
  }

  return (
    <div className={styles["answers-choice"]}>
      {shuffledAnswers.current.map((answer) => {
        let classNames = styles["question-card"];
        if (selectedAnswer && selectedAnswer.answer === answer)
        {
          classNames += selectedAnswer.isCorrect
            ? ` ${styles.correct}`
            : ` ${styles.incorrect}`;
        }
        else classNames += ` ${styles.available}`;
        return (
          <button
            className={classNames}
            key={answer}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
          </button>
        );
      })}
    </div>
  );
}
