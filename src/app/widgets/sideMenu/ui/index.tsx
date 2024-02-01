'use client'

import classNames from 'classnames'
import s from './style.module.scss'
import { useState } from 'react'
import { Burger } from '@/app/shared/burger'
import { Socials } from '../../socials/ui'

export const SideMenu = ({}) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(null)

	const menuToggleHandleer = () => {
		if (isMenuOpen === null) setIsMenuOpen(true)
		else setIsMenuOpen((prev) => !prev)
	}

	return (
		<div
			className={classNames(
				s.sideMenu,
				{ [s.sideMenuOpen]: isMenuOpen },
				{ [s.sideMenuClose]: !isMenuOpen && isMenuOpen !== null }
			)}>
			<Burger onClick={menuToggleHandleer} />
			<ul className={classNames(s.list, { [s.listOpen]: isMenuOpen })}>
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
			<Socials isMenuOpen={isMenuOpen} />
		</div>
	)
}

