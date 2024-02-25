import { Link } from "react-router-dom";
import { useContext } from "react";

import styles from "../styles/MainButtonContainer.module.css";
import UserContext from "../store/user-context";
import Button from "../../UI/Button";

export default function MainButtonContainer({ isMainPage = true }) {
  const { setDefault } = useContext(UserContext);
  return (
    <div className={styles["button-container"]}>
      {isMainPage ? (
        <Link to="/level/0">
          <Button color="yellow" side="main" onClick={setDefault}>
            Zagraj <br /> od początku
          </Button>
        </Link>
      ) : (
        <Link to="/">
          <Button color="yellow" side="main">
            Wróć do menu głównego
          </Button>
        </Link>
      )}
      <Button color="blue" side="main">
        Losowy <br /> poziom
      </Button>
      <Button color="red" side="main">
        Wybierz <br /> poziom
      </Button>
    </div>
  );
}
