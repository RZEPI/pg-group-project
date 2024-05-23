import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import styles from "../styles/MainButtonContainer.module.css";
import UserContext from "../store/user-context";
import Button from "../../UI/Button";

import DUMMY_QUESTIONS from "../../assets/questions";

export default function MainButtonContainer({ isMainPage = true }) {
  const { setDefault } = useContext(UserContext);
  const navigate = useNavigate();
  function handleRandomLevelClick()
  {
    const randomLevelId = Math.floor(Math.random() * DUMMY_QUESTIONS.length);
    navigate(`/level/${randomLevelId}?back=main`);
  }

  let classes = styles["button-container"];

  if(!isMainPage)
  {
    classes += " " + styles["button-container__results"];
  }
  return (
    <div className={classes}>
      {isMainPage ? (
          <Button color="yellow" onClick={setDefault} href="/level/0">
            Zagraj <br /> od początku
          </Button>
      ) : (
          <Button color="yellow" href="/">
            Wróć do menu głównego
          </Button>
      )}
      <Button color="blue" onClick={handleRandomLevelClick}>
        Losowy <br /> poziom
      </Button>
      <Button color="red" href="/level-choice">
        Wybierz <br /> poziom
      </Button>
    </div>
  );
}
