import styles from "./Nav.module.scss";
import Link from "next/link";
import BrandLogo from "../BrandLogo/BrandLogo";

export default function Nav(props) {
  return (
    <nav className={styles["nav-container"]}>
      <ul className={styles["main-nav"]}>
        <li>
          <Link href="">Shop</Link>
        </li>
        <li>
          <Link href="">Blog</Link>
        </li>
        <li>
          <Link href="">Find store</Link>
        </li>
      </ul>
      <ul>
        <li>
          <BrandLogo />
        </li>
      </ul>
      <ul className={styles["secondary-nav"]}>
        <li>
          <img src="../../icons/search.svg" width={24} height={24} />
        </li>
        <li>
          <img src="../../icons/bag.svg" width={24} height={24} />
        </li>
        <li>
          <img src="../../icons/user.svg" width={24} height={24} />
        </li>
      </ul>
    </nav>
  );
}
