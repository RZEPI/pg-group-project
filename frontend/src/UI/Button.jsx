import styles from "./Button.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Button({ children, href, ...props }) {
  function getColor(colorName) {
    if (colorName === "yellow") return styles.lightyellow;
    else if (colorName === "red") return styles.tomatopink;
    else if (colorName === "blue") return styles.lightblue;
    else return "";
  }

  const classes = `${styles["main-button"]} ${getColor(props.color)} ${
    props.className
  }`;

  const content = (
    <motion.button
      whileHover={{ scale: props.disabled ? 1 : 1.1 }}
      transition={{ type: "spring", stiffness: 500 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return <Link to={href}>{content}</Link>;
  } else {
    return content;
  }
}
