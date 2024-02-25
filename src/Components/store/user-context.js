import { createContext, useReducer } from "react";

const UserContext = createContext({
  points: 0,
  answers: [],
  levelAmount: 0,
  addAnswer: () => {},
  addTextAnswer: () => {},
  setDefault: () => {},
});

function userReducer(state, action) {
  if (action.type === "ADD_ANSWER") {
    const gottenAnswer = action.payload.answer;
    let gottenPoints = 0;
    if (gottenAnswer.isCorrect) {
      gottenPoints += 3;
    } else {
      if (action.payload.questionType === "trueFalse") gottenPoints -= 3;
      else if (action.payload.questionType === "abc") gottenPoints -= 1;
    }

    const newPoints = state.points + gottenPoints;
    const newAnswers = [...state.answers, gottenAnswer];
    const newLevelAmount = gottenAnswer.isCorrect
      ? state.levelAmount + 1
      : state.levelAmount;
    return {
      ...state,
      levelAmount: newLevelAmount,
      points: newPoints,
      answers: newAnswers,
    };
  }
  if (action.type === "ADD_ANSWER_TEXT") {
    const newAnswers = [...state.answers, action.payload.answer];
    const newPoints = state.points + action.payload.points;

    return {
      ...state,
      levelAmount: state.levelAmount + 1,
      points: newPoints,
      answers: newAnswers,
    };
  }
  if (action.type === "SET_DEFAULT") {
    return {
      points: 0,
      levelAmount: 0,
      answers: [],
    };
  }
  return state;
}

export function UserContextProvider({ children }) {
  const [userState, userDispacher] = useReducer(userReducer, {
    points: 0,
    levelAmount: 0,
    answers: [],
  });

  function addAnswerHandler(answer, questionType) {
    userDispacher({
      type: "ADD_ANSWER",
      payload: { answer, questionType },
    });
  }
  function addAnswerTextHandler(answer, points) {
    userDispacher({
      type: "ADD_ANSWER_TEXT",
      payload: { answer, points },
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
    levelAmount: userState.levelAmount,
    addAnswer: addAnswerHandler,
    addTextAnswer: addAnswerTextHandler,
    setDefault: setDefaultHandler,
  };
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}

export default UserContext;
