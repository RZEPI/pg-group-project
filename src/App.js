import './App.css';
import MainSideContent from './Components/components/MainSideContent';
import Logo from './Components/components/Logo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';
import Level from './pages/levels';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="level" element={<Level />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
