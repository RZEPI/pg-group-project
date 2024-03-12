import styles from "../styles/LevelDescription.module.css";
import { AnimatePresence, motion } from "framer-motion";
import picture from "../../assets/farm.jpg";

import Button from "../../UI/Button";

export default function LevelDescription({ chosenLevel }) {
  const animation_duration = 0.25;
  const animation_scaling = 0.6;

  return (
    <AnimatePresence mode="wait">
      {chosenLevel ? (
        <motion.div
          key={chosenLevel.id}
          transition={{ duration: animation_duration }}
          initial={{ scale: animation_scaling }}
          exit={{ scale: animation_scaling }}
          animate={{ scale: 1 }}
          className={styles["level-container"]}
        >
          <h1>{chosenLevel.title}</h1>
          <motion.img
            exit={{ opacity: 0 }}
            transition={{ duration: animation_duration }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={picture /*chosenLevel.image*/}
            alt={chosenLevel.title}
          />
          <Button color="yellow" href={`/level/${chosenLevel.id[1]}`}>
            Rozpocznij Grę
          </Button>
        </motion.div>
      ) : (
        <div className={styles.unchosen}>
          <p>
            Wybierz poziom,
            <br /> aby zobaczyć jego opis
          </p>
        </div>
      )}
    </AnimatePresence>
  );
}
