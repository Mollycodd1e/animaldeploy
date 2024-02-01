import s from './page.module.scss'
import { Content } from './widgets/content/ui'
import { SideMenu } from './widgets/sideMenu/ui'

export default function Home() {
	return (
		<main className={s.main}>
			<SideMenu />
			<Content />
		</main>
	)
}

