import { useNavigate, useSearchParams, useLoaderData } from "react-router-dom";

import { queryClient, fetchQuestion } from "../../util/http";

import Background from "../Background";
import Question from "../Question";
import tempimage from "../../../assets/farm.jpg";

export default function Level() {
  const { questionData } = useLoaderData();

  const [queryParams] = useSearchParams();
  const redirect = queryParams.get("back");
  const navigate = useNavigate();

  if (questionData === null) {
    navigate("/results");
  }

  function handleAnswerSelection() {
    if (redirect === "main") {
      navigate("/");
    } else if (redirect === "level-choice") {
      navigate("/level-choice");
    } else {
      navigate(`/level/${questionData.id + 1}`);
    }
  }

  return (
    <Background image={tempimage}>
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

  const questionData = queryClient.fetchQuery({
    queryKey: ["question", { id: levelId }],
    queryFn: ({signal})=> fetchQuestion({signal, id: levelId}),
  });

  console.log(questionData);

  return questionData;
}
