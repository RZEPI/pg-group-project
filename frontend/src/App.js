import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSideContent from "./Components/components/MainSideContent";
import MainLevelComponent from "./Components/components/MainLevelComponent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSideContent/>} />
        <Route path="/level" element={<MainLevelComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
