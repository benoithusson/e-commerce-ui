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
            heightProps="400px"
            imgUrlProps="/images/ski.jpg"
            CategorieNameProps="Ski"
          />
          <CardCategorie
            imgUrlProps="/images/parapente.jpg"
            CategorieNameProps="Parapente"
          />
        </div>
        {/* Column 2 */}
        <div className={styles["column"]}>
          <CardCategorie
            imgUrlProps="/images/hiking.jpg"
            CategorieNameProps="Hiking"
          />
          <CardCategorie
            heightProps="330px"
            imgUrlProps="/images/snowboard.jpg"
            CategorieNameProps="Snowboard"
          />
        </div>
        {/* Column 3 */}
        <div className={styles["column"]}>
          <CardCategorie
            heightProps="380px"
            imgUrlProps="/images/climbing.jpg"
            CategorieNameProps="Climbing"
          />
          <CardCategorie
            imgUrlProps="/images/snowmobile.jpg"
            CategorieNameProps="Snowmobile"
          />
        </div>
      </div>
    </div>
  );
}
