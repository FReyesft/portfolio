import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import ToggleMenu from '../components/toggleMenu'
export default function Navbar() {
  return (
    <>
      <div className={styles.containerNavbar}>
        <ul className={styles.ulItems}>
            <li className={styles.liItems}>
              <Link href="/blog/hello-world">Home</Link>
            </li>
            <li className={styles.liItems}>
              <Link href="/blog/hello-world">Portfolio</Link>
            </li>
            <li className={styles.liItems}>
              <Link href="/blog/hello-world">Contact</Link>
            </li>
        </ul>
        <ToggleMenu></ToggleMenu>
      </div>
    </>
  );
}
