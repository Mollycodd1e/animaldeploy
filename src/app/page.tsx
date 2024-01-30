import s from './page.module.scss'
import { Header } from './widgets/header/header'

export default function Home() {
	return (
		<main className={s.main}>
			<Header />
			<div>Футер</div>
		</main>
	)
}

