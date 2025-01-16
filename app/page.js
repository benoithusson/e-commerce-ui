import styles from "./page.module.scss";
import LayoutBlock from "../components/_home/LayoutBlock/LayoutBlock";

export default function Home() {
  return (
    <main className={styles["home-page-container"]}>
      <LayoutBlock name="products-new-arrival" />
      <LayoutBlock name="men-women-collection" />
    </main>
  );
}
