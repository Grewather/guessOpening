import styles from "./Answers.module.css";

function Answers(props) {
  const openingsForAnswers = [
    "Sicilian Defense",
    "Ruy López Opening",
    "Caro-Kann Defense",
    "Italian Game",
    "Scandinavian Defense",
    "Pirc Defense",
    "Alekhine's Defense",
    "King's Gambit",
    "Scotch Game",
    "Vienna Game",
    "Queen's Gambit",
    "Slav Defense",
    "King's Indian Defense",
    "Nimzo-Indian Defense",
    "Queen's Indian Defense",
    "Catalan Opening",
    "Bogo-Indian Defense",
    "Grünfeld Defense",
    "Dutch Defense",
    "Trompowsky Attack",
    "Benko Gambit",
    "London System",
    "Benoni Defense: Modern Variation",
    "Réti Opening",
    "English Opening",
    "Bird's Opening",
    "King's Indian Attack",
    "King's Fianchetto Opening",
    "Nimzowitsch-Larsen Attack",
    "Polish Opening",
    "Grob Opening",
  ];
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }
  function generateAnswers() {
    let answers = [props.openingState.openingName];
    let used = [props.openingState.openingName];
    for (let i = 1; i <= 2; i++) {
      let randomNumber = Math.floor(Math.random() * 31);

      if (used.includes(openingsForAnswers[randomNumber])) {
        console.log(used);
        continue;
      } else {
        answers.push(openingsForAnswers[randomNumber]);
        used.push(openingsForAnswers[randomNumber]);
      }
    }
    // console.log(answers);
    // console.log("used", used);
    // console.log(openingsForAnswers);
    // console.log("answers", answers);
    return shuffleArray(answers);
  }

  let answersOpening = generateAnswers();
  let checkAnswer = (answer) => {
    if (answer === props.openingState.openingName) {
      props.setCorrect(props.correct + 1);
    } else {
      props.setIncorrect(props.incorrect + 1);
    }
    props.setOpeningState(props.randomOpening);

    // console.log("correct: ", correct, " incorrect: ", incorrect);
  };
  return (
    <div>
      {answersOpening.map((element) => (
        <button
          onClick={(e) => checkAnswer(element)}
          className={styles.blockButton}
        >
          {element}
        </button>
      ))}
    </div>
  );
}

export default Answers;
