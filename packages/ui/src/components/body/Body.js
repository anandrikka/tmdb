import styles from './body.module.css';

function Body({ children }) {
  return <div className={`${styles.appContainer} container`}>{children}</div>;
}

export default Body;
