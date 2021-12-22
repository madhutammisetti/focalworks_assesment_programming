const compareResponse = (correctAnswer, response) => {
  const answerWords = correctAnswer.split(/[ ,.,!,;,?,",:,,]/);
  console.log(answerWords);

  let answerWordValues = [];
  let maxPossibleScore = 0;

  for (let word of answerWords) {
    if (word.length > 7) {
      answerWordValues.push({ key: `${word.toUpperCase()}`, value: 3 });
      maxPossibleScore += 3;
      console.log(`${word} = 3 points, totalScore = `, maxPossibleScore);
    } else if (parseInt(`${word}`, 10)) {
      answerWordValues.push({ key: `${word.toUpperCase()}`, value: 4 });
      maxPossibleScore += 4;
      console.log(`${word} = 4 points, totalScore = `, maxPossibleScore);
    } else if (word.length > 4) {
      answerWordValues.push({ key: `${word.toUpperCase()}`, value: 1 });
      maxPossibleScore += 1;
      console.log(`${word} = 1 point, totalScore = `, maxPossibleScore);
    }
  }

  console.log("Max Possible Score = ", maxPossibleScore);

  const responseWords = response.split(/[ ,.,!,;,?,",:,,]/);
  let responseScore = 0;
  console.log("responseWords = ", responseWords);
  for (let responseWord of responseWords) {
    for (let i = 0; i < answerWordValues.length; i++) {
      if (answerWordValues[i].key == responseWord.toUpperCase()) {
        responseScore += answerWordValues[i].value;
        console.log(
          `\"${responseWord}\" is a match, responseScore is now: `,
          responseScore
        );
      }
    }
  }

  console.log("Points scored = ", responseScore);
  console.log(
    "Percentage score = ",
    (responseScore / maxPossibleScore) * 100,
    "%"
  );
};

const correctAnswer =
  "There are twenty-four hours in a day, 30 days in a month, and 12 months in a calendar year";
const response = "There are Twenty-Four hours in a day, a year has 14 months";

compareResponse(correctAnswer, response);
