import styles from "./CategoriesList.module.scss";
import CardSingleContent from "../../CardSingleContent/CardSingleContent";

export default function CategoriesList() {
  return (
    <div className={styles["categories-list"]}>
      <div className={styles["heading"]}>
        <h3>Categories</h3>
      </div>
      <div className={styles["categories"]}>
        <div className="column">
          <div>Bloc 1</div>
          <div>Bloc 2</div>
        </div>
        <div className="column">
          <div>Bloc 1</div>
          <div>Bloc 2</div>
        </div>
        <div className="column">
          <div>Bloc 1</div>
          <div>Bloc 2</div>
        </div>
      </div>
    </div>
  );
}

{
  /* <CardSingleContent title="TITRE" color="white" bgColor="red" />
        <CardSingleContent title="TITRE" color="white" bgColor="green" />
        <CardSingleContent title="TITRE" color="white" bgColor="gray" />
        <CardSingleContent title="TITRE" color="white" bgColor="salmon" />
        <CardSingleContent title="TITRE" color="white" bgColor="black" />
        <CardSingleContent title="TITRE" color="white" bgColor="purple" /> */
}
