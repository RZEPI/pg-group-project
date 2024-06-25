import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/AnswersText.module.css";
import Button from "../../../UI/Button";

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
      const isCorrect = parsedValue === correctAnswer;
      setIsAnswerCorrect(isCorrect);
    
      onSelect({answer: parsedValue, isCorrect});
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

      const variants = {
        correct: { y: [10, -10, 10, -10, 10, 0], scale: 1.01 },
        incorrect: { x: [-10, 10, -10, 10, -10, 0], scale: 1 },
        hover: { scale: 1.01 },
      };
      const currentVariant = isAnswerCorrect === undefined ? null : isAnswerCorrect ? "correct" : "incorrect";
  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <div className={styles["input-container"]}>
        <motion.input
          type="text"
          whileHover={currentVariant === null ? "hover" : null}
          variants={variants}
          animate={currentVariant}
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
