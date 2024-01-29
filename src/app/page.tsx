import s from "./page.module.scss";
import { Header } from "./widgets/header/ui";

export default function Home() {
  return (
    <main className={s.main}>
      <Header />
      <div>Футер</div>
    </main>
  );
}
