import styles from "./QuizPage.module.css";
import Chessboard from "chessboardjsx";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

function QuizPage() {
  let [correct, setCorrect] = useState(0);
  let [incorrect, setIncorrect] = useState(0);
  const openings = [
    {
      id: 1,
      openingName: "Sicilian Defense",
      Fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2",
    },
    {
      id: 2,
      openingName: "French Defense",
      Fen: "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    },
    {
      id: 3,
      openingName: "Ruy López Opening",
      Fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    },
    {
      id: 4,
      openingName: "Caro-Kann Defense",
      Fen: "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    },
    {
      id: 5,
      openingName: "Italian Game",
      Fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    },
    {
      id: 6,
      openingName: "Scandinavian Defense",
      Fen: "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2",
    },
    {
      id: 7,
      openingName: "Pirc Defense",
      Fen: "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
    },
    {
      id: 8,
      openingName: "Alekhine's Defense",
      Fen: "rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2",
    },
    {
      id: 9,
      openingName: "King's Gambit",
      Fen: "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq f3 0 2",
    },
    {
      id: 10,
      openingName: "Scotch Game",
      Fen: "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3",
    },

    {
      id: 11,
      openingName: "Vienna Game",
      Fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2",
    },
    {
      id: 12,
      openingName: "Queen's Gambit",
      Fen: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2",
    },
    {
      id: 13,
      openingName: "Slav Defense",
      Fen: "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    },
    {
      id: 14,
      openingName: "King's Indian Defense",
      Fen: "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    },
    {
      id: 15,
      openingName: "Nimzo-Indian Defense",
      Fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
    },
    {
      id: 17,
      openingName: "Queen's Indian Defense",
      Fen: "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    },
    {
      id: 18,
      openingName: "Catalan Opening",
      Fen: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3",
    },
    {
      id: 19,
      openingName: "Bogo-Indian Defense",
      Fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
    },
    {
      id: 20,
      openingName: "Grünfeld Defense",
      Fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq d6 0 4",
    },
    {
      id: 21,
      openingName: "Dutch Defense",
      Fen: "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq f6 0 2",
    },
    {
      id: 22,
      openingName: "Trompowsky Attack",
      Fen: "rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq - 2 2",
    },
    {
      id: 23,
      openingName: "Benko Gambit",
      Fen: "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq b6 0 4",
    },
    {
      id: 24,
      openingName: "London System",
      Fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 3 3",
    },
    {
      id: 25,
      openingName: "Benoni Defense: Modern Variation",
      Fen: "rnbqkb1r/pp3ppp/3p1n2/2pP4/8/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 6",
    },
    {
      id: 26,
      openingName: "Réti Opening",
      Fen: "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 1 1",
    },
    {
      id: 27,
      openingName: "English Opening",
      Fen: "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq c3 0 1",
    },
    {
      id: 28,
      openingName: "Bird's Opening",
      Fen: "rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq f3 0 1",
    },
    {
      id: 29,
      openingName: "King's Indian Attack",
      Fen: "rnbqkbnr/ppp1pppp/8/3p4/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq - 0 2",
    },
    {
      id: 30,
      openingName: "King's Fianchetto Opening",
      Fen: "rnbqkbnr/pppppppp/8/8/8/6P1/PPPPPP1P/RNBQKBNR b KQkq - 0 1",
    },
    {
      id: 31,
      openingName: "Nimzowitsch-Larsen Attack",
      Fen: "rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
    },
    {
      id: 32,
      openingName: "Polish Opening",
      Fen: "rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR b KQkq b3 0 1",
    },
    {
      id: 33,
      openingName: "Grob Opening",
      Fen: "rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR b KQkq g3 0 1",
    },
  ];
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

  let randomOpening = () => {
    let randomNumber = Math.floor(Math.random() * openings.length);
    let choosenOpening = openings[randomNumber];
    return choosenOpening;
  };
  let [openingState, setOpeningState] = useState(randomOpening);
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
    let answers = [openingState.openingName];
    let used = [openingState.openingName];
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
    if (answer === openingState.openingName) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
    setOpeningState(randomOpening);

    console.log("correct: ", correct, " incorrect: ", incorrect);
  };

  return (
    <main>
      <h1>Guess Opening!</h1>
      <div className={styles.results}>
        <div className={styles.numberResult}>
          <AiOutlineCheck size="30" />
          <div>{correct}</div>
        </div>
        <div className={styles.numberResult}>
          <RxCross1 />
          <div>{incorrect}</div>
        </div>
      </div>
      <Chessboard
        className={styles.answersContainer}
        width={300}
        position={openingState.Fen}
      />
      <div className={styles.answersContainer}>
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
      </div>
      <div className="result"></div>
    </main>
  );
}

export default QuizPage;
