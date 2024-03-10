import styles from "../styles/LevelDescription.module.css";
import { AnimatePresence, motion } from "framer-motion";
import zdj from "../../assets/zdj.jpg";

import Button from "../../UI/Button";

export default function LevelDescription({ chosenLevel }) {
  return (
    <AnimatePresence mode="wait">
      {chosenLevel ? (
        <motion.div
          key={chosenLevel.id}
          transition={{ duration: 0.5 }}
          initial={{ scale: 0.3 }}
          exit={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          className={styles["level-container"]}
        >
          <h1>{chosenLevel.title}</h1>
          <img src={zdj /*chosenLevel.image*/} alt={chosenLevel.title} />
          <Button color="yellow" href={`/level/${chosenLevel.id}`}>
            Rozpocznij Grę
          </Button>
        </motion.div>
      ) : (
        <p>Wybierz poziom, aby zobaczyć jego opis</p>
      )}
    </AnimatePresence>
  );
}
