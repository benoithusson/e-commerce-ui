import styles from "./CategoriesList.module.scss";
import CardCategorie from "../../CardCategorie/CardCategorie";

export default function CategoriesList() {
  return (
    <div className={styles["list-container"]}>
      <div className={styles["heading"]}>
        <h3>Categories</h3>
      </div>
      <div className={styles["categories"]}>
        {/* Column 1 */}
        <div className="column">
          <CardCategorie bgColorProps="red" />
        </div>
        <div className="column">
          <CardCategorie bgColorProps="green" />
        </div>
        <div className="column">
          <CardCategorie bgColorProps="blue" />
        </div>
      </div>
    </div>
  );
}
