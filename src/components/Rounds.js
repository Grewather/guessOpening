import styles from "./Rounds.module.css";

function Rounds(props) {
  return <div className={styles.RoundText}>Round {props.round}/10</div>;
}

export default Rounds;
