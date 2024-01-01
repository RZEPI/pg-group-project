import AnswersChoice from "./answerTypes/AnswersChoice";
import styles from "../styles/Question.module.css";

export default function Question({ questionData, onSelect }) {
  let answers = "";
function handleSelection(answer) {
    if(answer.isCorrect)
    {
      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }
  }

  //TODO: add more answer types
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
