import React, { Suspense } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import QuizLayout from './layouts/QuizLayout.jsx';

import WelcomePage from './pages/WelcomePage.jsx';
const BackgroundSelectionPage = React.lazy(() => import('./pages/BackgroundSelectionPage'));
const QuestionPage = React.lazy(() => import('./pages/QuestionPage'));
const DecodingPage = React.lazy(() => import('./pages/DecodingPage'));

const SimpleLoader = () => <div>Loading Page…</div>;

function QuestionRouter() {
  const { id } = useParams();
  return id === '1' ? <BackgroundSelectionPage /> : <QuestionPage />;
}

export default function App() {
  return (
    <Suspense fallback={<SimpleLoader />}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route element={<QuizLayout />}>
          <Route path="/question/:id" element={<QuestionRouter />} />
          <Route path="/decoding" element={<DecodingPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}