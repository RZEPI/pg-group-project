import styles from '../styles/Background.module.css';

export default function Background({ image, children }) {
  return (
    <div className={styles.background}>
        <img src={image} alt="background"/>
      {children}
    </div>
  );
}