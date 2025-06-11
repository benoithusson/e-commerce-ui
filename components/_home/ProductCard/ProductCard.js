import styles from "./ProductCard.module.scss";
import Image from "next/image";

export default function ProductCard({ name, price, path }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]}>
        <Image
          src={`/images/products/${path}`}
          style={{ width: "100%", height: "auto" }}
          width={100}
          height={200}
          quality={10}
          priority
          alt=""
        />
        <div className={styles["icon"]}>
          <img src="../../icons/heart.svg" width={24} height={24} />
        </div>
      </div>
      <div className={styles["product-details-container"]}>
        <div className={styles["name-and-price"]}>
          <p className={styles["name"]}>{name}</p>
          <p className={styles["price"]}>€ {price}</p>
        </div>
      </div>
    </div>
  );
}
