import styles from "./Score.module.css";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

function Score(props) {
  return (
    <div className={styles.results}>
      <div className={styles.numberResult}>
        <AiOutlineCheck />
        <div> Correct: {props.correct}</div>
      </div>
      <div className={styles.numberResult}>
        <RxCross1 />
        <div> Incorrect: {props.incorrect}</div>
      </div>
    </div>
  );
}

export default Score;
