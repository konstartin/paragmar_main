// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import App from './App';
import './index.css';
import GlobalBackground from './components/GlobalBackground';
import SoundManager from './components/SoundManager';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="aspect-wrapper">
      <BrowserRouter>
        <QuizProvider>
          <GlobalBackground />
          <div className="content-on-top">
          <SoundManager />
          <App />
          </div>
        </QuizProvider>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);