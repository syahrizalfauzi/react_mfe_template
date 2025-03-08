import styles from './style.module.css';

export type ContainerProps = {
  children?: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
