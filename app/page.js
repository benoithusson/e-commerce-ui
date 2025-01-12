import styles from "./page.module.scss";
import ProductsList from "../components/ProductsList/ProductsList";

export default async function Home() {
  return (
    <main className={styles["page-container"]}>
      {/* <ProductsList productsList={productsList} /> */}
      <ProductsList />
    </main>
  );
}
