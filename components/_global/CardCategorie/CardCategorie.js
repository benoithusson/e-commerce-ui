"use client";

import styles from "./CardCategorie.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function CardCategorie({
  width,
  height,
  imgUrl,
  CategorieName,
}) {
  function handleHover() {}

  return (
    <Link href="" className={styles["card-categorie-container"]}>
      <div
        className={styles["card-categorie"]}
        style={{
          "--width": width || "100%",
          "--height": height || "100%",
        }}
      >
        <Image src={imgUrl} fill style={{ objectFit: "cover" }} alt="" />
        <h5>{CategorieName}</h5>
      </div>
    </Link>
  );
}
