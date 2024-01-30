'use client'

import { Burger } from '@/app/shared/burger'
import s from './style.module.scss'
import { useState } from 'react'
import classNames from 'classnames'

interface IHeaderProps {
	className?: string
}

export const Header = ({}: IHeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	const onBurgerHandler = () => {
		setIsMenuOpen((prev) => !prev)
	}

	return (
		<div className={s.header}>
			<Burger onClick={onBurgerHandler} />
			<h2>Заголовок</h2>
			<div>Форма логина</div>
			<div className={classNames(s.leftMenu, { [s.leftMenuOpen]: isMenuOpen })}>
				<div onClick={onBurgerHandler}>Close</div>
				<ul>
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
				</ul>
			</div>
		</div>
	)
}

