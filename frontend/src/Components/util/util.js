export function getPoints(question, diff = 1) {
    let points = 3;
    question.map((answer) => {
      if (!answer.isCorrect) {
        points -= diff;
      }
      return true;
    });
    return points < 0 ? 0 : points;
  }

export function filterQuestions(questions, activeClass) {
    return questions.filter((question) => question.level === activeClass);
  }