import Image from "next/image";
import styles from "./page.module.css";
import Letter from "./Letter";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mailbox}>
        <Letter />
      </div>
      <div className={styles.mailboxPole}></div>
    </div>
  );
};

export default Home;
