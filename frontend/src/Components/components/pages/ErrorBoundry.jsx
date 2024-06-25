import "../../styles/MainSideContent.css";

import { useRouteError, useNavigate } from "react-router-dom";
import Button from "../../../UI/Button";

export default function ErrorBoundry() {
  const error = useRouteError();
  const navigate = useNavigate();

  function redirectToMain(){
    navigate("/");
  }

  return (
    <div className="main-side-container">
      <h1>Ups, coś poszlo nie tak 😥</h1>
      <p>{error.message}</p>
      <Button onClick={redirectToMain} color="yellow">Wróc do strony głównej</Button>
    </div>
  );
}
