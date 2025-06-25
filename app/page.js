import styles from "./page.module.scss";
import LayoutBlock from "../components/_home/LayoutBlock/LayoutBlock";
import HeroSection from "../components/_home/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className={styles["home-page-container"]}>
      <HeroSection
        title="Ride the moutains."
        subTitle="Get ready to dive into winter with everything you need."
        label="Shop now"
        bgImageUrl="/images/img1.webp"
      />
      <LayoutBlock name="products-new-arrival" />
      <LayoutBlock name="men-women-collection" />
      <LayoutBlock name="categories" />
    </main>
  );
}
