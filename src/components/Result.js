import Score from "./Score";
import styles from "./Result.module.css";
function Result(props) {
  let tryAgain = () => {
    props.setIsEnd(false);
    props.setRound(1);
    props.setCorrect(0);
    props.setIncorrect(0);
  };
  return (
    <div>
      <h1>Results</h1>
      <Score correct={props.correct} incorrect={props.incorrect} />
      <button onClick={tryAgain} className={styles.restartButton}>
        {" "}
        Try Again
      </button>
    </div>
  );
}

export default Result;
