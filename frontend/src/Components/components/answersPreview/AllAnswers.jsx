import { motion } from "framer-motion";

import styles from "../../styles/AllAnswers.module.css";

import UsersAnswers from "./UsersAnswers";
import { getPoints } from "../../util/util";
import questions from "../../../assets/questions";

export default function AllAnswers({ allAnswers }) {
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
      {allAnswers.map((answersForQuestion, questionIndex) => {
        const points = getPoints(answersForQuestion);
        return (
          <motion.div
            key={questionIndex}
            initial={{ y: -60 * (questionIndex + 1), zIndex: questionIndex }}
            animate={{ y: 0 }}
          >
            <div className={styles["question-header"]}>
              <h3>{`${questionIndex}.`}</h3>
              <h3>{questions[questionIndex].id}</h3>
              <h3>{`${points}pkt.`}</h3>
            </div>
            <UsersAnswers
              answersForQuestion={answersForQuestion}
              questionIndex={questionIndex}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
