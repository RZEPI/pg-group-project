import { createContext, useReducer } from "react";

const UserContext = createContext({
  points: 0,
  answers: [],
  addAnswer: () => {},
  addTextAnswer: () => {},
});

function userReducer(state, action) {
  if (action.type === "ADD_ANSWER") {
      const gottenAnswer = action.payload.answer;
      let gottenPoints = 0;
        if (gottenAnswer.isCorrect) {
          gottenPoints += 3;
        } else
        { 
          if(action.payload.questionType === "trueFalse") gottenPoints -= 3;
          else if(action.payload.questionType === "abc") gottenPoints -= 1;
        }

      const newPoints = state.points + gottenPoints;
      const newAnswers = [...state.answers, gottenAnswer];
      return {
        ...state,
        points: newPoints,
        answers: newAnswers,
      };
  }
  if(action.type === "ADD_ANSWER_TEXT") {
      const newAnswers = [...state.answers, action.payload.answer];
      const newPoints = state.points + action.payload.points;

      return{
        ...state,
        points: newPoints,
        answers: newAnswers,
      }
  } 
  return state;
}

export function UserContextProvider({ children }) {
  const [userState, userDispacher] = useReducer(userReducer, {
    points: 0,
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


  const context = {
    points: userState.points,
    answers: userState.answers,
    addAnswer: addAnswerHandler,
    addTextAnswer: addAnswerTextHandler,
  };
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}

export default UserContext;
