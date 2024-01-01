import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainSideContent from './Components/components/MainSideContent';
import Level from './Components/components/Level';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSideContent />} />
        <Route path="/level" element={<Level />} />
      </Routes>
    </BrowserRouter>
  );
}
