import styles from "./ProductsList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import Link from "next/link";

export default async function ProductsList() {
  try {
    const res = await fetch("http://localhost:3000/api/products");

    if (!res.ok) {
      throw new Error("La requête a échoué");
    }

    const productsList = await res.json();

    return (
      <div className={styles["products-list"]}>
        <div className={styles["heading"]}>
          <h3>New Arrivals</h3>
          <Link href="">See all</Link>
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
      </div>
    );
  } catch (error) {
    console.error("Erreur lors de la récupération:", error);
    return null;
  }
}
