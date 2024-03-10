import styles from "../styles/LevelList.module.css";

import LevelItem from "./LevelItem";

export default function LevelList({onLevelChoise, levels, chosenLevel}) {
    return(<div>
        <div className={`${styles.blur} ${styles["blur-top"]}`}></div>
        <ul className={styles["list-container"]}>
            {levels.map((level) => {
                let className = undefined;
                if(chosenLevel?.id === level.id) {
                    className = styles["chosen"];
                }
                return <LevelItem key={level.id} levelData={level} onLevelChoise={onLevelChoise} className={className}/>
            })}
        </ul>
        <div className={styles.blur}></div>
    </div>)
}