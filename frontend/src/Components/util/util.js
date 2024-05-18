export function getPoints(question, diff = 1) {
    let points = 3;
    question.map((answer) => {
      if (!answer.isCorrect) {
        points -= diff;
      }
      return;
    });
    return points < 0 ? 0 : points;
  }