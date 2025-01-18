import styles from "./CardSingleContent.module.scss";
import Link from "next/link";

export default function CardSingleContent({
  title,
  bgImage,
  color,
  bgColor,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
}) {
  return (
    <Link href="" legacyBehavior>
      <a
        href=""
        className={styles["card-container"]}
        style={{
          "--bg-image": `url(${bgImage})`,
          "--bg-color": `${bgColor}`,
          "--color": `${color}`,
          "--min-width": `${minWidth}`,
          "--min-height": `${minHeight}`,
          "--max-width": `${maxWidth}`,
          "--max-height": `${maxHeight}`,
        }}
      >
        <h2>{title}</h2>
      </a>
    </Link>
  );
}
