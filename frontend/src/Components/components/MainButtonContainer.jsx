import { useContext } from "react";

import styles from "../styles/MainButtonContainer.module.css";
import UserContext from "../store/user-context";
import Button from "../../UI/Button";

export default function MainButtonContainer({ isMainPage = true }) {
  const { setDefault } = useContext(UserContext);
  return (
    <div className={styles["button-container"]}>
      {isMainPage ? (
          <Button color="yellow" onClick={setDefault} href="/level/0">
            Zagraj <br /> od początku
          </Button>
      ) : (
          <Button color="yellow" href="/">
            Wróć do menu głównego
          </Button>
      )}
      <Button color="blue">
        Losowy <br /> poziom
      </Button>
      <Button color="red" href="/level-choice">
        Wybierz <br /> poziom
      </Button>
    </div>
  );
}
