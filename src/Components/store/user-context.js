import { createContext, useReducer } from "react";

const UserContext = createContext({
  points: 0,
  answers: [],
  addAnswer: () => {},
});

function userReducer(state, action) {
  if (action.type === "ADD_ANSWER") {
    if (action.payload.questionType === "abc") {
      const gottenAnswer = action.payload.answer;
      let gottenPoints = 0;
        if (gottenAnswer.isCorrect) {
          gottenPoints += 3;
        } else gottenPoints -= 1;

      const newPoints = state.points + gottenPoints;
      const newAnswers = [...state.answers, gottenAnswer];
      return {
        ...state,
        points: newPoints,
        answers: newAnswers,
      };
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
  const context = {
    points: userState.points,
    answers: userState.answers,
    addAnswer: addAnswerHandler,
  };
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}

export default UserContext;
