import styles from "../styles/LevelDescription.module.css";

import zdj from "../../assets/zdj.jpg";

import Button from "../../UI/Button";

export default function LevelDescription({ chosenLvl }) {
  if (chosenLvl === undefined) {
    return <p>Wybierz poziom, aby zobaczyć jego opis</p>;
  }

  return (
    <div className={styles["level-container"]}>
      <h1>{chosenLvl.title}</h1>
      <img src={zdj /*chosenLvl.image*/} alt={chosenLvl.title} />
      <Button color="yellow" href={`/level/${chosenLvl.id}`}>
        Rozpocznij Grę
      </Button>
    </div>
  );
}
