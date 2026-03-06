export type QuestionData = {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
};

export const QUESTIONS: QuestionData[] = [
  {
    id: 1,
    question: 'What is JSX in React?',
    options: [
      'A database query language',
      'A JavaScript syntax extension used to describe UI',
      'A CSS framework',
      'A React server engine',
    ],
    answerIndex: 1,
  },
  {
    id: 2,
    question: 'Which hook is used to manage state in a functional component?',
    options: ['useFetch', 'useState', 'useRoute', 'useClass'],
    answerIndex: 1,
  },
  {
    id: 3,
    question: 'What is the correct way to pass data from parent to child component?',
    options: [
      'Using props',
      'Using state directly',
      'Using DOM manipulation',
      'Using localStorage',
    ],
    answerIndex: 0,
  },
  {
    id: 4,
    question: 'Which hook is used to perform side effects like API calls?',
    options: ['useMemo', 'useEffect', 'useCallback', 'useRef'],
    answerIndex: 1,
  },
  {
    id: 5,
    question: 'What is the key purpose of the key prop in lists?',
    options: [
      'To style list items',
      'To uniquely identify items for efficient rendering',
      'To sort list items',
      'To encrypt list data',
    ],
    answerIndex: 1,
  },
  {
    id: 6,
    question: 'What happens when you update state using setState or setSomething?',
    options: [
      'React updates the UI immediately line-by-line',
      'React reloads the entire page',
      'React schedules a re-render of the component',
      'React deletes the component',
    ],
    answerIndex: 2,
  },
  {
    id: 7,
    question: 'Which statement about React is true?',
    options: [
      'React is a full MVC framework',
      'React uses a Virtual DOM to optimize UI updates',
      'React does not support components',
      'React requires jQuery to work',
    ],
    answerIndex: 1,
  },
  {
    id: 8,
    question: 'Which hook is mainly used to cache a computed value?',
    options: ['useMemo', 'useState', 'useEffect', 'useReducer'],
    answerIndex: 0,
  },
  {
    id: 9,
    question: 'How do you handle events in React?',
    options: ['onclick="myFunc()"', 'onClick={myFunc}', 'onClick="myFunc()"', 'click={myFunc}'],
    answerIndex: 1,
  },
  {
    id: 10,
    question: 'What is the correct way to update state based on previous state?',
    options: [
      'setCount(count + 1) always',
      'setCount(() => count + 1)',
      'setCount(prev => prev + 1)',
      'setCount(++count)',
    ],
    answerIndex: 2,
  },
];
