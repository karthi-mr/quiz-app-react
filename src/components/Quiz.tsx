import type { ReactElement } from "react";
import { useState } from 'react';
import { QUESTIONS } from '../questions';
import QuestionTimer from './QuestionTimer';

type AnswersSummary = {
  correct: number;
  wrong: number;
  unAnswer: number;
}

function Quiz(): ReactElement {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const activeQuestionIndex = userAnswers.length;
  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer: string) {
    setUserAnswers((prevUserAnswers: string[]) => {
      return [...prevUserAnswers, selectedAnswer]
    });
  }

  function onhandleSummary(): AnswersSummary {
    let correctAnswersCount: number = 0;
    let unAnswersCount: number = 0;

    for (let i = 0; i < QUESTIONS.length; i++) {
      const correctAnswer: string = QUESTIONS[i].options[QUESTIONS[i].answerIndex];
      const userAnswer: string = userAnswers[i];

      if (correctAnswer === userAnswer) {
        correctAnswersCount++;
      } else if (userAnswer === "") {
        unAnswersCount++;
      }
    }

    console.log(`
      correct: ${correctAnswersCount},  
      wrong: ${QUESTIONS.length - correctAnswersCount - unAnswersCount},  
      unanswer: ${unAnswersCount},  
    `);

    return {
      correct: correctAnswersCount,
      wrong: QUESTIONS.length - correctAnswersCount - unAnswersCount,
      unAnswer: unAnswersCount
    };
  }

  if (isQuizCompleted) {
    const {correct, wrong, unAnswer} = onhandleSummary();
    return <div id="summary">
      <h2>Quiz completed!</h2>
      <ul id="results">
        <li>
          <h3>Correctly Answered</h3>
          <p>{correct}</p>
        </li>
        <li>
          <h3>Wrongly Answered</h3>
          <p>{wrong}</p>
        </li>
        <li>
          <h3>UnAnswered</h3>
          <p>{unAnswer}</p>
        </li>
      </ul>
      <button className="retry-btn" onClick={() => {setUserAnswers([])}}>Retry</button>
    </div>
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].options];
  // eslint-disable-next-line react-hooks/purity
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
      <div id="quiz">
        <div id="question">
          <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={() => handleSelectAnswer("")} />
          <h2>{QUESTIONS[activeQuestionIndex].question}</h2>
          <ul id="answers">
            {shuffledAnswers.map(option => (
              <li key={option} className="answer">
                <button className="" onClick={() => handleSelectAnswer(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
}

export default Quiz;
