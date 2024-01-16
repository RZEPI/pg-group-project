import DUMMY_QUESTIONS from "../../assets/questions";
import { useContext, useState } from "react";
import UserContext from "../store/user-context";
import Question from "./Question";
import Results from "./Results";

export default function Level() {
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const userCtx = useContext(UserContext);
  const questionsAmount = DUMMY_QUESTIONS.length;

  if (activeQuestionIdx >= questionsAmount) {
    return <Results points={userCtx.points} maxPoints={questionsAmount * 3} />;
  }
  const activeQuestion = DUMMY_QUESTIONS[activeQuestionIdx];

  function handleAnswerSelection() {
    setActiveQuestionIdx((activeQuestionIdx) => activeQuestionIdx + 1);
  }

  return (
    <Question
      key={activeQuestion.id}
      questionData={activeQuestion}
      onSelect={handleAnswerSelection}
    />
  );
}
