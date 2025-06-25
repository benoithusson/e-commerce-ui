import styles from "./CardGender.module.scss";
import Link from "next/link";

export default function CardGender({
  title,
  bgImageUrl,
  color,
  bgColor,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
}) {
  return (
    <Link
      href=""
      className={styles["card-container"]}
      style={{
        "--bg-image-url": `url(${bgImageUrl})`,
        "--bg-color": bgColor,
        "--color": color,
        "--min-width": minWidth,
        "--min-height": minHeight,
        "--max-width": maxWidth,
        "--max-height": maxHeight,
      }}
    >
      <h4>{title}</h4>
    </Link>
  );
}
