import styles from "./ProductsList.module.scss";
import ProductCard from "../ProductCard/ProductCard";

export default async function ProductsList() {
  const res = await fetch("http://localhost:3000/api/products");
  const productsList = await res.json();
  console.log("Liste products API", productsList);

  return (
    <section>
      <h2>New Arrivals</h2>
      <h5>Gear Up for the Outdoors: Fresh Arrivals for Every Adventure</h5>
      <div className={styles["products-list-container"]}>
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            path={product.path}
          />
        ))}
      </div>
    </section>
  );
}
