import styles from "./CardSingleContent.module.scss";
import Link from "next/link";

export default function CardSingleContent({
  title,
  bgImage,
  color,
  minWidth,
  minHeight,
  clipPath,
}) {
  return (
    <Link href="" legacyBehavior>
      <a
        href=""
        className={styles["card-container"]}
        style={{
          "--bg-image": `url(${bgImage})`,
          "--color": `${color}`,
          "--min-width": `${minWidth}`,
          "--min-height": `${minHeight}`,
        }}
      >
        <h2>{title}</h2>
      </a>
    </Link>
  );
}
