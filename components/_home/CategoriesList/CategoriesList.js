import styles from "./CategoriesList.module.scss";
import CardSingleContent from "../../CardSingleContent/CardSingleContent";

export default function CategoriesList() {
  return (
    <div className={styles["categories-list"]}>
      <div className={styles["heading"]}>
        <h4>CategoriesList</h4>
      </div>
      <div className={styles["categories"]}>
        <CardSingleContent title="TITRE" color="white" bgColor="red" />
        <CardSingleContent title="TITRE" color="white" bgColor="green" />
        <CardSingleContent title="TITRE" color="white" bgColor="gray" />
        <CardSingleContent title="TITRE" color="white" bgColor="salmon" />
        <CardSingleContent title="TITRE" color="white" bgColor="black" />
        <CardSingleContent title="TITRE" color="white" bgColor="purple" />
      </div>
    </div>
  );
}
