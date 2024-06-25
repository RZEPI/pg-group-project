import { createContext, useReducer } from "react";
import { getPoints } from "../util/util";

const UserContext = createContext({
  points: 0,
  answers: {},
  addAnswer: () => {},
  setDefault: () => {},
});

function userReducer(state, action) {
  if (action.type === "ADD_ANSWER") {
    const { answer, questionType, questionIndex } = action.payload;

    const isQuestionInitiated = state.answers[questionIndex];
    let questionAnswers;
    let points;

    let newAnswers = { ...state.answers };

    if (isQuestionInitiated) {
      questionAnswers = newAnswers[questionIndex].answers;
      const isAnswerInserted = questionAnswers.find(
        (ans) => ans.answer === answer.answer
      );
      if (!isAnswerInserted) questionAnswers.push(answer);
    } else {
      newAnswers = {
        ...newAnswers,
        [questionIndex]: { questionType: questionType, answers: [answer], points: undefined },
      };
      questionAnswers = newAnswers[questionIndex].answers;
    }

    if (answer.isCorrect) {
      if (questionType === "text") {
        points = getPoints(questionAnswers, 0.5);
      } else {
        const diff = questionType === "abc" ? 1 : 3;
        points = getPoints(questionAnswers, diff);
      }
    } else {
      return { ...state, answers: newAnswers };
    }

    const newPoints = state.points + points;
    newAnswers[questionIndex].points = points;

    return {
      ...state,
      points: newPoints,
      answers: newAnswers,
    };
  }

  if (action.type === "SET_DEFAULT") {
    return {
      ...state,
      points: 0,
      answers: [],
    };
  }
  return state;
}

export function UserContextProvider({ children }) {
  const [userState, userDispacher] = useReducer(userReducer, {
    points: 0,
    answers: {},
  });

  function addAnswerHandler(answer, questionType, questionIndex) {
    userDispacher({
      type: "ADD_ANSWER",
      payload: { answer, questionType, questionIndex },
    });
  }

  function setDefaultHandler() {
    userDispacher({
      type: "SET_DEFAULT",
    });
  }

  const context = {
    points: userState.points,
    answers: userState.answers,
    addAnswer: addAnswerHandler,
    setDefault: setDefaultHandler,
  };
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}

export default UserContext;
