import { motion } from "framer-motion";

export default function LevelItem({ levelData, onLevelChoise, className }) {

  return (
    <motion.li
      style={{
        backgroundImage: `url(${levelData.img_url})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
      whileHover={{ scale: 1.1 }}
      className={className}
      onClick={() => onLevelChoise(levelData)}
    >
      <p>{levelData.title}</p>
    </motion.li>
  );
}
