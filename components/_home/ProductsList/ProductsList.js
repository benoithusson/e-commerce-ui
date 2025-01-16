import styles from "./ProductsList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../../Button/Button";
import Link from "next/link";

export default async function ProductsList() {
  const res = await fetch("http://localhost:3000/api/products");
  const productsList = await res.json();

  return (
    <section className={styles["product-list-container"]}>
      <div className={styles["heading"]}>
        <h3>New Arrivals</h3>
      </div>
      <div className={styles["products"]}>
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            path={product.path}
          />
        ))}
      </div>
      <div className={styles["see-all-btn"]}>
        <Button label="See all" />
      </div>
    </section>
  );
}
