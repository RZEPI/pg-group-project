import AnswersChoice from "./answerTypes/AnswersChoice";
import styles from "../styles/Question.module.css";
import UserContext from "../store/user-context";
import { useContext } from "react";

export default function Question({ questionData, onSelect }) {
  let answers = "";
  const userCtx = useContext(UserContext);
function handleSelection(answer) {
    userCtx.addAnswer(answer, questionData.type);
    if(answer.isCorrect)
    {
      setTimeout(() => {
        onSelect();
      }, 2000);
    }
  }

  if (questionData.type === "abc") {
    answers = <AnswersChoice answers={questionData.answers} onSelect={handleSelection} />;
  }

  return (
    <div className={styles.question}>
      <div className={styles['question-card']}>{questionData.text}</div>
        {answers}
    </div>
  );
}
