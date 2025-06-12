import styles from "./CardCategorie.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function CardCategorie({
  widthProps,
  heightProps,
  bgColorProps,
  imgUrlProps,
  CategorieNameProps,
}) {
  return (
    <Link href="" className={styles["card-categorie-container"]}>
      <div
        className={styles["card-categorie"]}
        style={{
          "--width": widthProps || "100%",
          "--height": heightProps || "100%",
          "--bgColor": bgColorProps || "transparent",
        }}
      >
        <Image src={imgUrlProps} fill objectFit="cover" />
        <h5>{CategorieNameProps}</h5>
      </div>
    </Link>
  );
}
