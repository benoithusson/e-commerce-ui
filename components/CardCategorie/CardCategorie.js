import styles from "./CardCategorie.module.scss";
import Link from "next/link";

export default function CardCategorie({
  widthProps,
  heightProps,
  bgColorProps,
}) {
  console.log(widthProps, heightProps, bgColorProps);
  return (
    <Link href="" className={styles["card-categorie-container"]}>
      <div
        className={styles["card-categorie"]}
        style={{
          "--width": widthProps || "100%",
          "--height": heightProps || "auto",
          "--bgColor": bgColorProps || "transparent",
        }}
      >
        TITLE
      </div>
    </Link>
  );
}
