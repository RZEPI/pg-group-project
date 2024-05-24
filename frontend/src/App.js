import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LevelChoicePage from "./Components/components/pages/LevelChoicePage";
import PageLayout from "./Components/components/pages/PageLayout";
import MainSideContent from "./Components/components/pages/MainSideContent";
import Level from "./Components/components/pages/Level";
import Results from "./Components/components/pages/Results";

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
