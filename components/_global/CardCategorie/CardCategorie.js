"use client";

import styles from "./CardCategorie.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CardCategorie({
  width,
  height,
  imgUrl,
  CategorieName,
}) {
  const hoverState = useState(false);

  return (
    <Link
      href=""
      className={styles["card-categorie-container"]}
      onMouseEnter={hoverState(!hoverState)}
      onMouseLeave={hoverState(!hoverState)}
    >
      <div
        className={styles["card-categorie"]}
        style={{
          "--width": width || "100%",
          "--height": height || "100%",
        }}
      >
        {hoverState ? (
          <>
            <Image src={imgUrl} fill objectFit="cover" />
            <h5>{CategorieName}</h5>
          </>
        ) : (
          <div>YOLO</div>
        )}
      </div>
    </Link>
  );
}
