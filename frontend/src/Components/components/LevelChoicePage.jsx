import {useState} from "react";
import styles from "../styles/LevelChoicePage.module.css";

import LevelList from "./LevelList";
import LevelDescription from "./LevelDescription";

import questions from "../../assets/questions";

export default function LevelChoicePage() {
    const [chosenLvl, setChosenLvl] = useState(undefined);

    function levelChoiceHandler(level) {
        setChosenLvl(level);
    }

  return (
    <>
      <h1 className={styles.headline}>Wybierz poziom</h1>
      <div className={styles["main-container"]}>
        <LevelList onLevelChoise={levelChoiceHandler} levels={questions}/>
        <LevelDescription chosenLvl={chosenLvl}/>
      </div>
    </>
  );
}
