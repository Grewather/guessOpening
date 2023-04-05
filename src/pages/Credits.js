import styles from "./Credits.module.css";

function CreditsPage() {
  return (
    <>
      <main>
        <p className={styles.txt}>
          Library:
          <a
            href="https://chessboardjsx.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chessboardjsx
          </a>
        </p>
        <p className={styles.txt}>
          Github:
          <a
            href="https://github.com/Grewather/guessopening"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>
        </p>
      </main>
    </>
  );
}

export default CreditsPage;
