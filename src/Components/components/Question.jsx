import AnswersChoice from "./answerTypes/AnswersChoice";
import styles from "../styles/Question.module.css";
import UserContext from "../store/user-context";
import { useContext } from "react";
import AnswersText from "./answerTypes/AnswersText";

export default function Question({ questionData, onSelect }) {
  let answers = "";
  const userCtx = useContext(UserContext);
  function handleSelection(answer) {
    userCtx.addAnswer(answer, questionData.type);
    if (answer.isCorrect) {
      setTimeout(() => {
        onSelect();
      }, 2000);
    }
  }

  function handleTextAnswer(answer, points) {
    userCtx.addTextAnswer(answer, points);
    setTimeout(() => {
      onSelect();
    }, 2000);
  }

  if (questionData.type === "abc" || questionData.type === "trueFalse") {
    answers = (
      <AnswersChoice
        key={questionData.id}
        answers={questionData.answers}
        onSelect={handleSelection}
      />
    );
  } else if (questionData.type === "text") {
    answers = (
      <AnswersText
        key={questionData.id}
        correctAnswer={questionData.answers[0]}
        onSelect={handleTextAnswer}
      />
    );
  }

  return (
    <div className={styles.question}>
      <div className={styles["question-card"]}>{questionData.text}</div>
      {answers}
    </div>
  );
}
