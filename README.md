# Quiz App React

A simple and interactive **Quiz Application built with React, TypeScript, and Vite**.  
This project presents multiple-choice questions, tracks user answers, handles unanswered questions through a timer, and shows a final performance summary.

## Preview

This quiz app allows users to:

- Answer React-related multiple-choice questions
- Move through questions one by one
- Automatically skip a question if time runs out
- View a final summary with:
  - Correct answers
  - Wrong answers
  - Unanswered questions
- Retry the quiz again after completion

## Features

- Built with **React**
- Written in **TypeScript**
- Bundled with **Vite**
- Clean and colorful custom UI
- Timer support for each question
- Randomized answer order
- Quiz result summary screen
- Retry functionality

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **CSS**
- **ESLint**

## Project Structure

```bash
quiz-app-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Quiz.tsx
│   │   └── QuestionTimer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── questions.ts
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## How It Works

- The app loads a list of quiz questions from questions.ts
- One question is displayed at a time
- A timer runs for each question
- If the user selects an answer, it is stored
- If the timer ends before selection, the question is marked as unanswered
- After all questions are completed, a summary screen is displayed
- The user can click Retry to start the quiz again

## Deployment

**This project is deployed using Firebase Hosting.**

## Live Demo
[Click here to view the app](https://quiz-app-react-1.web.app/)

***Author: Karthi***

***GitHub: karthi-mr***

## Support

If you like this project, consider giving it a star on GitHub.

Built with React, TypeScript, and Vite.
