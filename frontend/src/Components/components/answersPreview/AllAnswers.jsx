import { motion } from "framer-motion";

import styles from "../../styles/AllAnswers.module.css";

import UsersAnswers from "./UsersAnswers";
import { useContext } from "react";
import UserContext from "../../store/user-context";

export default function AllAnswers() {
  const { answers: allAnswers } = useContext(UserContext);

  return (
    <motion.div
      className={styles["all-answers-container"]}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 1, staggerDirection: 1 },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {Object.keys(allAnswers).map((questionKey, questionIndex) => {
        const answersForQuestion = allAnswers[questionKey].answers;
        const points = allAnswers[questionKey].points;
        return (
          <motion.div
            key={questionIndex}
            initial={{ y: -60 * (questionIndex + 1), zIndex: questionIndex }}
            animate={{ y: 0 }}
          >
            <div className={styles["question-header"]}>
              <h3>{`${questionIndex}.`}</h3>
              <h3></h3>
              <h3>{`${points}pkt.`}</h3>
            </div>
            <UsersAnswers
              answersForQuestion={answersForQuestion}
              questionIndex={questionKey}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
