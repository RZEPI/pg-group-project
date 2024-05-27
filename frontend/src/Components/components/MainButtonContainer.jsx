import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import styles from "../styles/MainButtonContainer.module.css";
import UserContext from "../store/user-context";
import Button from "../../UI/Button";

import questions from "../../assets/questions";
import { filterQuestions } from "../util/util";

export default function MainButtonContainer({ isMainPage = true }) {
  const { setDefault, activeClass } = useContext(UserContext);
  const navigate = useNavigate();
  function handleRandomLevelClick()
  {
    const maxQuestion = filterQuestions(questions, activeClass).length;
    const randomLevelId = Math.floor(Math.random() * maxQuestion);
    if(maxQuestion > 0)
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
          <Button color="yellow" onClick={setDefault} href="/">
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
