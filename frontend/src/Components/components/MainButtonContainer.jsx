import { useContext } from "react";

import styles from "../styles/MainButtonContainer.module.css";
import UserContext from "../store/user-context";
import Button from "../../UI/Button";
import { getClassIdFromUrl } from "../util/http";

export default function MainButtonContainer({ isMainPage = true }) {
  const classId = getClassIdFromUrl(window.location.href);
  const { setDefault } = useContext(UserContext);

  let classes = styles["button-container"];

  if(!isMainPage)
  {
    classes += " " + styles["button-container__results"];
  }
  return (
    <div className={classes}>
      {isMainPage ? (
          <Button color="yellow" onClick={setDefault} href={`/level/first/?classId=${classId}`}>
            Zagraj <br/> od początku
          </Button>
      ) : (
          <Button color="yellow" onClick={setDefault} href={`/?classId=${classId}`}>
            Wróć do menu głównego
          </Button>
      )}
      <Button color="blue" onClick={setDefault} href={`/level/random?classId=${classId}&back=main`}>
        Losowy <br/> poziom
      </Button>
      <Button color="red" href={`/level-choice?classId=${classId}`}>
        Wybierz <br/> poziom
      </Button>
    </div>
  );
}
