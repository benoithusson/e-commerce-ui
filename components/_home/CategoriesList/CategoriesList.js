import styles from "./CategoriesList.module.scss";
import CardSingleContent from "../CardSingleContent/CardSingleContent";

export default function CategoriesList() {
  return (
    <div>
      <CardSingleContent title="bloc 1" />
      <CardSingleContent title="bloc 2" />
      <CardSingleContent title="bloc 3" />
    </div>
  );
}
