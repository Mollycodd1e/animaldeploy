'use client'

import { useState } from 'react'
import s from './page.module.scss'
import { Burger } from './shared/burger'
import { Header } from './widgets/header/header'
import classNames from 'classnames'

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const menuToggleHandleer = () => {
		setIsMenuOpen(prev => !prev)
	}

	return (
		<main className={s.main}>
			<div className={classNames(s.left, {[s.leftOpen]: isMenuOpen})}>
				<Burger onClick={menuToggleHandleer}/>
				<div className={s.socials}>
					<div>VK</div>
					<div>Tg</div>
				</div>
				{/* <ul>
					<li>Приветики</li>
					<li>Приветики</li>
					<li>Приветики</li>
					<li>Приветики</li>
					<li>Приветики</li>
					<li>Приветики</li>
					<li>Приветики</li>
					<li>Приветики</li>
					<li>Приветики</li>
					<li>Приветики</li>
				</ul> */}
			</div>
			<div className={s.right}>
				<Header />
				<div>Футер</div>
			</div>
		</main>
	)
}

