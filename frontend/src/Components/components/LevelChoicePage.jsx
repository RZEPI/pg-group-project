import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LevelChoicePage.module.css";

import backArrow from "../../assets/arrow-back.png";
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
      <Link to="/">
        <div className={styles["back-home"]}>
          <img src={backArrow} alt="wroc do strony glownej" />
        </div>
      </Link>
      <h1 className={styles.headline}>Wybierz poziom</h1>
      <div className={styles["main-container"]}>
        <LevelList
          onLevelChoise={levelChoiceHandler}
          levels={questions}
          chosenLevel={chosenLvl}
        />
        <LevelDescription chosenLevel={chosenLvl} />
      </div>
    </>
  );
}
