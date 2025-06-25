import ProductsList from "../ProductsList/ProductsList";
import CardSingleContent from "../../_global/CardGender/CardGender";
import CategoriesList from "../CategoriesList/CategoriesList";
import styles from "./LayoutBlock.module.scss";

export default function LayoutBlock({ name }) {
  return (
    <>
      <section className={styles["layoutblock-container"]}>
        {name === "products-new-arrival" && <ProductsList />}
        {name === "men-women-collection" && (
          <div className={styles["men-women-collection"]}>
            <CardSingleContent
              title="Men"
              bgImageUrl="/images/img1.webp"
              color="#242424"
              minWidth="50%"
              minHeight="500px"
            />
            <CardSingleContent
              title="Women"
              bgImageUrl="/images/img4.webp"
              color="#242424"
              minWidth="50%"
              minHeight="500px"
            />
          </div>
        )}
        {name === "categories" && <CategoriesList />}
      </section>
    </>
  );
}
