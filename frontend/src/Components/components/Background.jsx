import styles from '../styles/Background.module.css';

export default function Background({ image, children }) {
  let shift;
  if( image === "/assets/Artboard3.png")
    shift = 40;
  else if( image === "/assets/Artboard2.png")
    shift = 45;
  else if( image === "/assets/Artboard1.png")
    shift = 55;
  else if( image === "/assets/Artboard4.png")
    shift = 60;
  else 
    shift = 0;
  return (
    <div className={styles.background} >
        <img src={image} alt="background" style={{objectPosition: `0 ${shift}%`}}/>
      {children}
    </div>
  );
}