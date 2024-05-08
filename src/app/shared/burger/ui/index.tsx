import s from './style.module.scss'
import classNames from 'classnames'

interface IBurgerProps {
	onClick: () => void
	isOpen: boolean | null
}

export const Burger = ({ onClick, isOpen }: IBurgerProps) => {
	const burderCount = [1, 2, 3]

	return (
		<button
			type='button'
			className={classNames(s.menuBtn, { [s.open]: isOpen })}
			onClick={onClick}>
			{burderCount.map((_, i) => {
				return (
					<div
						className={classNames(
							i === 0 ? s.burgerTop : i === 1 ? s.burgerMid : s.burgerBot,
							{ [s.burgerOpen]: isOpen },
							{ [s.burgerClose]: !isOpen && isOpen !== null }
						)}
					/>
				)
			})}
		</button>
	)
}

