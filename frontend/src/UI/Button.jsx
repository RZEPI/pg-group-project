import styles from "./Button.module.css";

export default function Button({ children, ...props }) {
  function getColor(colorName) {
    if (colorName === "yellow") return styles.lightyellow;
    else if (colorName === "red") return styles.tomatopink;
    else if (colorName === "blue") return styles.lightblue;
    else return "";
  }
  function getSide(side)
  { 
    if(side === "main" )
        return styles["main-side"];
    else
        return styles["sub-side"];
  }

  const classes = `${styles["main-button"]} ${getColor(props.color)} ${getSide(props.side)} ${props.className}`;

  return <button className={classes} {...props}>{children}</button>;
}
