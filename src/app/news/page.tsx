import { Header } from "../widgets/header/ui";
import styles from "./page.module.scss";

export default function News() {
  const headerContent = {
    title: "Новости",
    description: "Описание новостей",
    image: 'ку-ку'
  }

  return (
    <main className={styles.main}>
      <Header content={headerContent}/>
      <div>Пивтетывпвпвап</div>
      <div>Футер</div>
    </main>
  );
}