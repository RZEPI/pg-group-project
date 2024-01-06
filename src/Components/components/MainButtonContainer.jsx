import Button from "../../UI/Button";
import {Link} from "react-router-dom";
import styles from "../styles/MainButtonContainer.module.css";

export default function MainButtonContainer({isMainPage = true}) {
  return(
    <div className={styles["button-container"]}>
        {isMainPage ? <Link to='/level'><Button color="yellow" side="main">Zagraj <br/> od początku</Button></Link> : <Link to='/'><Button color="yellow" side="main">Wróć do menu głównego</Button></Link>}
        <Button color="blue" side="main">Losowy <br/> poziom</Button>
        <Button color="red" side="main">Wybierz <br/> poziom</Button>
    </div>
  )
} 