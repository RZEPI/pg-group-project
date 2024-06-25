import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LevelChoicePage, {loader as choiceLoader} from "./Components/components/pages/LevelChoicePage";
import PageLayout from "./Components/components/pages/PageLayout";
import MainSideContent from "./Components/components/pages/MainSideContent";
import Level, {startLoader, randomLoader, loader as levelLoader} from "./Components/components/pages/Level";
import Results from "./Components/components/pages/Results";
import ErrorBoundry from "./Components/components/pages/ErrorBoundry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorBoundry />,
    children: [
      { index: true, element: <MainSideContent /> },
      {path: "level/first", element: <Level />, loader: startLoader},
      {path: "level/random", element: <Level />, loader: randomLoader},
      { path: "level/:levelId", element: <Level />, loader: levelLoader},
      { path: "results", element: <Results /> },
      { path: "level-choice", element: <LevelChoicePage />, loader: choiceLoader },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
