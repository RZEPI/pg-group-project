import styles from "../styles/LevelList.module.css";

import LevelItem from "./LevelItem";

export default function LevelList({onLevelChoise, levels}) {
    return(<div>
        <div className={`${styles.blur} ${styles["blur-top"]}`}></div>
        <ul className={styles["list-container"]}>
            {levels.map((level) => {
                return <LevelItem key={level.id} levelData={level} onLevelChoise={onLevelChoise}/>
            })}
        </ul>
        <div className={styles.blur}></div>
    </div>)
}