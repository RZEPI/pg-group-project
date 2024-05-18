import { CLASSES } from "./classes";
import { createContext, useReducer } from "react";
import { getPoints } from "../util/util";

const UserContext = createContext({
  points: 0,
  answers: [],
  levelAmount: 0,
  activeClass: CLASSES.THIRD,
  addAnswer: () => {},
  addTextAnswer: () => {},
  setDefault: () => {},
  setClass: () => {},
});


function userReducer(state, action) {
  if (action.type === "ADD_ANSWER") {
    const { answer, questionType, questionIndex } = action.payload;

    const isQuestionInitiated = state.answers.length > questionIndex;
    let questionAnswers;
    let points;

    let newAnswers = [...state.answers];

    if (isQuestionInitiated) {
      questionAnswers = newAnswers[questionIndex];
      const isAnswerInserted = questionAnswers.find(
        (ans) => ans.answer === answer.answer
      );
      if(!isAnswerInserted)
        questionAnswers.push(answer);
    } else {
      const idx = newAnswers.length;
      newAnswers = [...newAnswers, [answer]];
      questionAnswers = newAnswers[idx];
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
    const newLevelAmount = answer.isCorrect
      ? state.levelAmount + 1
      : state.levelAmount;
    return {
      ...state,
      levelAmount: newLevelAmount,
      points: newPoints,
      answers: newAnswers,
    };
  }

  if (action.type === "SET_DEFAULT") {
    return {
      class: CLASSES.THIRD,
      points: 0,
      levelAmount: 0,
      answers: [],
    };
  }
  if (action.type === "SET_CLASS") {
    return {
      ...state,
      class: action.payload.class,
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

  function setClassHandler(newClass) {
    userDispacher({
      type: "SET_CLASS",
      payload: { class: newClass },
    });
  }

  const context = {
    points: userState.points,
    answers: userState.answers,
    levelAmount: userState.levelAmount,
    activeClass: userState.class,
    addAnswer: addAnswerHandler,
    setDefault: setDefaultHandler,
    setClass: setClassHandler,
  };
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}

export default UserContext;
