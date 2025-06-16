import styles from "../CategoriesList/CategoriesList.module.scss";
import CardCategorie from "../../_global/CardCategorie/CardCategorie";

export default function CategoriesList() {
  return (
    <div className={styles["list-container"]}>
      <div className={styles["heading"]}>
        <h3>Categories</h3>
      </div>
      <div className={styles["categories"]}>
        {/* Column 1 */}
        <div className={styles["column"]}>
          <CardCategorie
            height="400px"
            imgUrl="/images/ski.jpg"
            CategorieName="Ski"
          />
          <CardCategorie
            imgUrl="/images/parapente.jpg"
            CategorieName="Parapente"
          />
        </div>
        {/* Column 2 */}
        <div className={styles["column"]}>
          <CardCategorie imgUrl="/images/hiking.jpg" CategorieName="Hiking" />
          <CardCategorie
            height="330px"
            imgUrl="/images/snowboard.jpg"
            CategorieName="Snowboard"
          />
        </div>
        {/* Column 3 */}
        <div className={styles["column"]}>
          <CardCategorie
            height="380px"
            imgUrl="/images/climbing.jpg"
            CategorieName="Climbing"
          />
          <CardCategorie
            imgUrl="/images/snowmobile.jpg"
            CategorieName="Snowmobile"
          />
        </div>
      </div>
    </div>
  );
}
