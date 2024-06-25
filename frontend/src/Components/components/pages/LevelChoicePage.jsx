import { useState } from "react";
import { Link, useNavigate, useLoaderData } from "react-router-dom";
import styles from "../../styles/LevelChoicePage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import LevelList from "../LevelList";
import LevelDescription from "../LevelDescription";

import { fetchQuestionsForClass } from "../../util/http";

export default function LevelChoicePage() {
  const [chosenLvl, setChosenLvl] = useState(undefined);

  const navigate = useNavigate();

  const {questions} = useLoaderData();

  function levelChoiceHandler(level) {
    const idx = questions.indexOf(level)
    if (window.innerWidth < 1000) {
      navigate(`/level/${idx}?back=level-choice`);
    } else setChosenLvl({...level, idx});
  }

  return (
    <>
      <Link to="/">
        <div className={styles["back-home"]}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
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

export function loader({request}) {
  const classId = new URL(request.url).searchParams.get("classId");
  return fetchQuestionsForClass({classId});
}
