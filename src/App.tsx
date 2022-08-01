import { lazy } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import FallbackWrapper from './components/FallbackWrapper';

const Main = lazy(() => import('./components/pages/Main'));
const Character = lazy(() => import('./components/pages/Character'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<FallbackWrapper><Main /></FallbackWrapper>} />
        <Route path="/character/:id" element={<FallbackWrapper><Character /></FallbackWrapper>} />
        <Route path="*" element={<Navigate to="/characters" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
