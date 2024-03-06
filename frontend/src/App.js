import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LevelChoicePage from "./Components/components/LevelChoicePage";
import PageLayout from "./Components/components/PageLayout";
import MainSideContent from "./Components/components/MainSideContent";
import Level from "./Components/components/Level";
import Results from "./Components/components/Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { index: true, element: <MainSideContent /> },
      { path: "level/:levelId", element: <Level /> },
      { path: "results", element: <Results /> },
      { path: "level-choice", element: <LevelChoicePage />}
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
