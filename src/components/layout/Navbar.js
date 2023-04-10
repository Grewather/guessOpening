import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [navState, setNavState] = useState(false);
  let handleClick = () => {
    setNavState((navState) => !navState);
    console.log(navState);
  };

  let toggleNav = navState ? styles.active : styles.unactive;
  return (
    <nav className={styles.navs}>
      <h3 className={styles.brandText}>Guess Opening</h3>
      <ul className={`${toggleNav} navmenu`}>
        <li>
          <Link className={styles.liTxt} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.liTxt} to="/quiz">
            Play
          </Link>
        </li>
        <li>
          <Link className={styles.liTxt} to="/credits">
            Credits
          </Link>
        </li>
      </ul>
      <RxHamburgerMenu onClick={handleClick} className={styles.hamburgerIcon} />
    </nav>
  );
}

export default Navbar;
