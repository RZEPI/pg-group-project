import { useState } from "react";
import styles from "../../styles/AnswersText.module.css";
import Button from "../../../UI/Button";

let incorrectAnswers = 0;
let lastAnswer = -1;

export default function AnswersText({ correctAnswer, onSelect }) {
  const [textField, setTextField] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState();
  const [inputError, setInputError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const parsedValue = parseInt(textField.trim());
    if (isNaN(parsedValue)) {
      setInputError("W polu można wpisać tylko liczbę dodatnią.");
    } else {
      if (lastAnswer === parsedValue) return;
      const isCorrect = parsedValue === correctAnswer;
      setIsAnswerCorrect(isCorrect);
      if (!isCorrect){ incorrectAnswers++;
        lastAnswer = parsedValue;
      }
      else {
        let points = 3 - 0.5 * incorrectAnswers;
        points = points < 0 ? 0 : points;
        onSelect(parsedValue, points);
      }
    }
  }

  function handleInputBlur(event) {
    const textContent = event.target.value;
    setTextField(textContent);
    if (textContent.match("^[0-9]*$")) {
      setInputError("");
    } else setInputError("W polu można wpisać tylko liczbę dodatnią.");
  }

  const inputCssClasses =
    isAnswerCorrect === undefined
      ? ""
      : isAnswerCorrect
      ? styles["correct"]
      : styles["incorrect"];

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <div className={styles["input-container"]}>
        <input
          type="text"
          value={textField}
          onChange={handleInputBlur}
          onFocus={() => setIsAnswerCorrect(undefined)}
          className={inputCssClasses}
          required
        />
        <Button
          color="yellow"
          disabled={inputError.length > 0 || isAnswerCorrect}
          type={"submit"}
        >
          Zatwierdź <br /> odpowiedź
        </Button>
      </div>
      <h2 className={styles["error-msg"]}>{inputError}</h2>
    </form>
  );
}
