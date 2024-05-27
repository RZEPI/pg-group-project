import { useState, useContext } from "react";
import { Link, useNavigate, useLoaderData } from "react-router-dom";
import styles from "../../styles/LevelChoicePage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import LevelList from "../LevelList";
import LevelDescription from "../LevelDescription";
import UserContext from "../../store/user-context";

import { queryClient, fetchAllQuestions } from "../../util/http";
import questions from "../../../assets/questions";
import { filterQuestions } from "../../util/util";

export default function LevelChoicePage() {
  const [chosenLvl, setChosenLvl] = useState(undefined);

  const context = useContext(UserContext);
  const filteredQuestions = filterQuestions(questions, context.activeClass);

  const navigate = useNavigate();

  function levelChoiceHandler(level) {
    const idx = filteredQuestions.indexOf(level)
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
          levels={filteredQuestions}
          chosenLevel={chosenLvl}
        />
        <LevelDescription chosenLevel={chosenLvl} />
      </div>
    </>
  );
}

export function loader() {
  const questions = queryClient.fetchQuery({
    queryKey: "questions",
    queryFn: ({ signal }) => fetchAllQuestions({ signal }),
  });
  return questions;
}
