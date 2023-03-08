import styles from "../styles/skillsSection.module.css";
import Image from "next/image";
import imageJs from "./../images//imagesSkills/js.png";
import imageReact from "./../images/imagesSkills/react.png";
import imageNext from "./../images/imagesSkills/nextjs-icon.png";
import imageGit from "./../images/imagesSkills/git.png";
import imageHtml from "./../images/imagesSkills/html-icon.png";
import imageCss from "./../images/imagesSkills/css-icon.png";
import imageNpm from "./../images/imagesSkills/npm-icon.png";
import imageVisual from "./../images/imagesSkills/visual-studio-code-icon.png";
import { useScroll, animated } from '@react-spring/web';
import { useState } from 'react';
export default function SkillItems() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked)
  }
  const { scrollYProgress } = useScroll()
  return (
    <>
    <div className={styles.containerSection}>
      <animated.section style={{ opacity: scrollYProgress }} className={styles.containerSection1}>
        <h2 className={styles.title} id="skills">My Skills</h2>
        <ul className={styles.ulList}>
            <li className={styles.itemLi}>
              <Image
                onClick={handleClick}
                className={styles.logos}
                src={imageJs}
                alt="Logo javascript"
                width={150}
              />
              <p className={styles.itemLiExperience}>⭐⭐⭐⭐</p>
            </li>
            <li className={styles.itemLi}>
              <Image
                className={styles.logos}
                src={imageReact}
                alt="logo reactjs"
                width={150}
              />
               <p className={styles.itemLiExperience}>⭐⭐⭐</p>
            </li>
            <li className={styles.itemLi}>
              <Image
                className={`${styles.logos} ${styles.logoNext}`}
                src={imageNext}
                alt="logo next"
                width={150}
              />
               <p className={styles.itemLiExperience}>⭐⭐⭐</p>
            </li>
            <li className={styles.itemLi}>
              <Image
                className={styles.logos}
                src={imageGit}
                alt="logo Git"
                width={150}
              />
               <p className={styles.itemLiExperience}>⭐⭐⭐⭐</p>
            </li>
            <li className={styles.itemLi}>
              <Image
                className={styles.logos}
                src={imageHtml}
                alt="logo HTML"
                width={150}
                priority
              />
               <p className={styles.itemLiExperience}>⭐⭐⭐⭐⭐</p>
            </li>
            <li className={styles.itemLi}>
              <Image
                className={styles.logos}
                src={imageCss}
                alt="logo CSS"
                width={150}
              />
               <p className={styles.itemLiExperience}>⭐⭐⭐⭐</p>
            </li>
            <li className={styles.itemLi}>
              <Image
                className={`${styles.logos} ${styles.logoNpm}`}
                src={imageNpm}
                alt="logo npm"
                width={150}
              />
               <p className={styles.itemLiExperience}>⭐⭐⭐⭐</p>
            </li>
            <li className={styles.itemLi}>
              <Image
                className={styles.logos}
                src={imageVisual}
                alt="logo VSCODE"
                width={150}
              />
               <p className={styles.itemLiExperience}>⭐⭐⭐⭐⭐</p>
            </li>
        </ul>
      </animated.section>
      </div>
    </>
  );
}
