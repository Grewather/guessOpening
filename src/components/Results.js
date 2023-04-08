import styles from "./Results.module.css";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

function Results(props) {
  return (
    <div className={styles.results}>
      <div className={styles.numberResult}>
        <AiOutlineCheck size="30" />
        <div>{props.correct}</div>
      </div>
      <div className={styles.numberResult}>
        <RxCross1 />
        <div>{props.incorrect}</div>
      </div>
    </div>
  );
}

export default Results;
