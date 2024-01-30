import s from './style.module.scss'

interface IBurgerProps {
	children?: React.ReactNode
	onClick: () => void
}

export const Burger = ({ children, onClick }: IBurgerProps) => {

	return (
		<div className={s.menuBtn} onClick={onClick}>
			<button type="button" className={s.burgerToggle}>
				<div className={s.burgerTop}></div>
				<div className={s.burgerMid}></div>
				<div className={s.burgerBot}></div>
			</button>
		</div>
	)
}

