import s from './style.module.scss'

interface IBurgerProps {
	children?: React.ReactNode
}

export const Burger = ({ children }: IBurgerProps) => {
	return (
		<div className={s.root}>
			<button className={s.burgerToggle}>
				<span className={s.burgerTop}></span>
				<span className={s.burgerMid}></span>
				<span className={s.burgerBot}></span>
			</button>
		</div>
	)
}

