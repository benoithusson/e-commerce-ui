import Nav from "../Nav/Nav";
import HeroSection from "../HeroSection/HeroSection";
import styles from "./Header.module.scss";

export default function Header(props) {
  return (
    <header className={styles["header-container"]}>
      <Nav />
      <HeroSection />
    </header>
  );
}
