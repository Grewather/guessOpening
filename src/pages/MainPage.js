import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";
function MainPage() {
  return (
    <>
      <main>
        <h1>Guess Opening</h1>
        <h2>Test your chess knowledge by playing opening quiz</h2>
        {/* <button className={styles.startButton} role="button">
        Start
      </button> */}
        <Link to="/guessOpening/quiz" className={styles.startButton}>
          Start
        </Link>
      </main>
    </>
  );
}
export default MainPage;
