import { useContext } from "react";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";

import { queryClient, fetchQuestion } from "../../util/http";

import Background from "../Background";
import Question from "../Question";
import questions from "../../../assets/questions";

import UserContext from "../../store/user-context";
import { filterQuestions } from "../../util/util";

export default function Level() {
  const context = useContext(UserContext);
  const levelId = +useParams().levelId;

  const fileteredQuestions = filterQuestions(questions, context.activeClass);
  const [queryParams] = useSearchParams();
  const redirect = queryParams.get("back");
  const navigate = useNavigate();

  if(levelId >= fileteredQuestions.length) {
    navigate("/results");
    return;
  }

  const questionData = fileteredQuestions[levelId];

  function handleAnswerSelection() {
    if (redirect === "main") {
      navigate("/");
    } else if (redirect === "level-choice") {
      navigate("/level-choice");
    } else {
      navigate(`/level/${levelId + 1}`);
    }
  }


  return (
    <Background image={questionData.image}>
      <Question
        key={questionData.id}
        questionData={questionData}
        questionIndex={questionData.id}
        onSelect={handleAnswerSelection}
        saveAnswers={redirect === null}
      />
    </Background>
  );
}

export function loader({ params }) {
  const levelId = +params.levelId;

  return levelId;
}
