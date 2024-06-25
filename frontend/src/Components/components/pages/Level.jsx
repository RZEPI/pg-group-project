import {
  useNavigate,
  useSearchParams,
  useLoaderData
} from "react-router-dom";

import Background from "../Background";
import Question from "../Question";
import {
  fetchFirstQuestion,
  fetchQuestion,
  getClassIdFromUrl,
  fetchRandomQuestion,
} from "../../util/http";

export default function Level() {
  const question = useLoaderData();

  const [queryParams] = useSearchParams();
  const redirect = queryParams.get("back");
  const navigate = useNavigate();
  const doSave = redirect === null;

  function handleAnswerSelection() {
    if (redirect === "main") {
      navigate("/");
    } else if (redirect === "level-choice") {
      navigate("/level-choice");
    } else if (question.next_question_id) {
      navigate(`/level/${question.next_question_id}`);
    } else {
      navigate("/results");
    }
  }

  return (
    <Background image={question.img_url}>
      <Question
        key={question.id}
        questionData={question}
        questionIndex={question.id}
        onSelect={handleAnswerSelection}
        saveAnswers={doSave}
      />
    </Background>
  );
}

export function startLoader({ request }) {
  const classId = getClassIdFromUrl(request.url);
  return fetchFirstQuestion({ classId });
}

export function loader({ params }) {
  const levelId = +params.levelId;

  return fetchQuestion({ id: levelId });
}

export function randomLoader({ request }) {
  const classId = getClassIdFromUrl(request.url);
  return fetchRandomQuestion({ classId });
}
