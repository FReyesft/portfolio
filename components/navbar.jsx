import styles from "../styles/Navbar.module.css";
import ToggleMenu from "./toggleMenu";
import TextLogo from "./textLogo";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      console.log(window.scrollY);
    }, 1000);
  });

  return (
    <>
      <div className={styles.containerNavbar}>
        <ul className={styles.ulItems}>
          <li className={styles.liItems}>
            <p
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Home
            </p>
          </li>
          <li className={styles.liItems}>
            <p
              onClick={() => {
                window.scrollTo(0, 800);
              }}
            >
              My Skills
            </p>
          </li>
          <li className={styles.liItems}>
            <p>Portfolio</p>
          </li>
          <li className={styles.liItems}>
            <p>Contact</p>
          </li>
        </ul>
        <TextLogo></TextLogo>
        <ToggleMenu></ToggleMenu>
      </div>
    </>
  );
}
