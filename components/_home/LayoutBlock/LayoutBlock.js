import ProductsList from "../ProductsList/ProductsList";
import styles from "./LayoutBlock.module.scss";
import CardSingleContent from "../CardSingleContent/CardSingleContent";
import CategoriesList from "../CategoriesList/CategoriesList";

export default function LayoutBlock({ name }) {
  return (
    <>
      <section className={styles["layoutblock-container"]}>
        {name === "products-new-arrival" && <ProductsList />}
        {name === "men-women-collection" && (
          <div className={styles["men-women-collection"]}>
            <CardSingleContent
              title="Men"
              bgImage="/images/ski1.jpg"
              color="#242424"
            />
            <CardSingleContent
              title="Women"
              bgImage="/images/ski10.jpg"
              color="white"
            />
          </div>
        )}
        {name === "categories" && <CategoriesList />}
      </section>
    </>
  );
}
