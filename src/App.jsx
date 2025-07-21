
import React, { Suspense, useRef, useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { useQuiz } from './context/QuizContext'
import soundFile from './assets/mp3/backgroundSound.mp3'
import WelcomePage from './pages/WelcomePage.jsx'

const BackgroundSelectionPage = React.lazy(() => import('./pages/BackgroundSelectionPage'))
const QuestionPage = React.lazy(() => import('./pages/QuestionPage'))

const SimpleLoader = () => <div>Loading Page…</div>

function QuestionRouter() {
  const { id } = useParams()
  return id === '1' ? <BackgroundSelectionPage /> : <QuestionPage />
}

export default function App() {
  const { isSoundOn } = useQuiz()
  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) return
    isSoundOn ? audioRef.current.play().catch(() => { }) : audioRef.current.pause()
  }, [isSoundOn])

  return (
    <>
      <audio ref={audioRef} src={soundFile} loop />
      <Suspense fallback={<SimpleLoader />}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/question/:id" element={<QuestionRouter />} />
        </Routes>
      </Suspense>
    </>
  )
}
