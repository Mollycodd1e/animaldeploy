import { useState } from 'react'
import s from './style.module.scss'
import classNames from 'classnames'

interface IBurgerProps {
	onClick: () => void
}

export const Burger = ({ onClick }: IBurgerProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div
			className={s.menuBtn}
			onClick={onClick}>
			<button
				type='button'
				className={classNames(s.burgerToggle, { [s.open]: isOpen })}>
				<div className={s.burgerTop} />
				<div className={s.burgerMid} />
				<div className={s.burgerBot} />
			</button>
		</div>
	)
}

