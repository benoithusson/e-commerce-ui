import styles from "./BrandLogo.module.scss";

export default function BrandLogo() {
  return (
    <div className={styles["brand-icon-container"]}>
      <img src="../../icons/brand.svg" width={44} height={44} />
    </div>
  );
}
