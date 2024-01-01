import DUMMY_QUESTIONS from '../../assets/questions';
import { useState } from 'react';
import Question from './Question';

export default function Level()
{
    //TODO: change this logic to fetching questions from the server and reconsider pointing system
    const [userAnswers, setUserAnswers] = useState([]);
    const userActiveQuestionIdx = userAnswers.length;
    if(userActiveQuestionIdx >= DUMMY_QUESTIONS.length)
    {
        //TODO: show the results 
    }
    const activeQuestion = DUMMY_QUESTIONS[userActiveQuestionIdx];

    //TODO: think about handling with reducer
    function handleAnswerSelection(answer)
    {
        setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    }

    return (
        <Question key={activeQuestion.id} questionData={activeQuestion} onSelect={handleAnswerSelection} />
    );
}