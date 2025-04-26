# React Quiz App

This is a React-based quiz application designed to test your knowledge of React concepts. The app features a dynamic quiz interface with multiple-choice questions, a timer, and a scoring system. It also demonstrates the use of React hooks like `useReducer` for state management.

## What I Learned

While building this project, I gained a deeper understanding of the following concepts:

- **`useReducer` Hook**:

  - Learned how to manage complex state logic using the `useReducer` hook.
  - Implemented actions like `start`, `newAnswer`, `newQuestion`, `finish`, and `restart` to handle different states of the quiz.
  - Used `useReducer` to manage state transitions in a predictable and scalable way.

- **React Component Composition**:

  - Built reusable components like `Header`, `Footer`, `Progress`, `Question`, and `Timer`.
  - Learned how to pass props and manage state across components.

- **Asynchronous Data Fetching**:

  - Used `useEffect` to fetch quiz questions from a local JSON server.
  - Handled loading and error states effectively.

- **CSS Styling**:
  - Styled the app using a custom CSS file to create a responsive and visually appealing UI.

## Features

- Dynamic quiz with multiple-choice questions.
- Timer to track the time remaining for the quiz.
- Scoring system with a high score tracker.
- Restart functionality to replay the quiz.

## Steps to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. **Install Dependencies**:
   Make sure you have Node.js installed, then run:

   ```bash
   npm install

   ```

3. **_Start the JSON Server_**:
   The quiz questions are served from a local JSON server. Start the server using:

   ```bash
   npm run server
   This will serve the questions from questions.json on http://localhost:8000.

   ```

4. **Start the React App**:
   Run the following command to start the React development server:
   ```bash
   npm start
   ```
