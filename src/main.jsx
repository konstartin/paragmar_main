// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext'; 
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <div className="aspect-wrapper">
      <BrowserRouter>
        <QuizProvider>
          <App />
        </QuizProvider>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);