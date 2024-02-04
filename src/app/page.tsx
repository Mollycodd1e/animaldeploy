import s from './page.module.scss'
import { Content } from './widgets/content/ui'

export default function Home() {
	return (
		<main className={s.main}>
			<Content />
		</main>
	)
}

