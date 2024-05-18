import styles from "../../styles/UsersAnswers.module.css";
export default function UsersAnswers({ answersForQuestion, questionIndex }) {
  return (
    <>
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
    </>
  );
}
