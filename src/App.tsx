import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { LessonView } from './pages/LessonView';
import { Formality } from './pages/Formality';
import { Conversation } from './pages/Conversation';
import { Reading } from './pages/Reading';
import { Writing } from './pages/Writing';
import { Vocabulary } from './pages/Vocabulary';
import { Quiz } from './pages/Quiz';
import { Progress } from './pages/Progress';
import { Settings } from './pages/Settings';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="learn/:lessonId" element={<LessonView />} />
          <Route path="conversation" element={<Conversation />} />
          <Route path="conversation/:scenarioId" element={<Conversation />} />
          <Route path="formality" element={<Formality />} />
          <Route path="reading" element={<Reading />} />
          <Route path="writing" element={<Writing />} />
          <Route path="vocabulary" element={<Vocabulary />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="progress" element={<Progress />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
