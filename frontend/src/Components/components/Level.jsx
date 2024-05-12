import { useNavigate, useParams } from "react-router-dom";

import Background from "./Background";
import DUMMY_QUESTIONS from "../../assets/questions";
import Question from "./Question";
import tempimage from "../../assets/farm.jpg";
import { useEffect } from "react";

export default function Level() {
  const params = useParams();
  const navigate = useNavigate();

  const levelId = +params.levelId;
  const questionsAmount = DUMMY_QUESTIONS.length;// TO DELETE

  useEffect(() => {
    if (levelId >= questionsAmount) {
      navigate("/results");
    }
  }, [levelId, questionsAmount, navigate]);
  const activeQuestion = DUMMY_QUESTIONS[levelId] || {};

  function handleAnswerSelection() {
    navigate(`/level/${levelId + 1}`);
  }

  return (
    <Background image={tempimage}>
      <Question
        key={activeQuestion.id}
        questionData={activeQuestion}
        questionIndex={levelId}
        onSelect={handleAnswerSelection}
      />
    </Background>
  );
}
