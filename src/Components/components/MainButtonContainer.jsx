import Button from "../../UI/Button";
import styles from "../styles/MainButtonContainer.module.css";

export default function MainButtonContainer() {
  return(
    <div className={styles["button-container"]}>
        <Button color="yellow" side="main">Zagraj <br/> od początku</Button>
        <Button color="blue" side="main">Losowy <br/> poziom</Button>
        <Button color="red" side="main">Wybierz <br/> poziom</Button>
    </div>
  )
} 