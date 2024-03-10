import {motion} from "framer-motion";

export default function LevelItem({levelData, onLevelChoise, className}) {

    //dummy content
    const newLevelData = {
        ...levelData,
        title: "Poziom " + levelData.id,
    }

    return (
        <motion.li whileHover={{scale:1.1}} className={className} onClick={() => onLevelChoise(newLevelData)}><p>{newLevelData.title}</p></motion.li>
    );
}