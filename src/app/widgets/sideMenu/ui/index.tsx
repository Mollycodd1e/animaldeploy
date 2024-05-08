'use client'

import classNames from 'classnames'
import s from './style.module.scss'
import { useState } from 'react'
import { Burger } from '@/app/shared/burger'
import { Socials } from '../../socials/ui'
import { MenuList } from '../../menuList/menuList'

export const SideMenu = ({}) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(null)

	const menuToggleHandler = () => {
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
			<Burger
				onClick={menuToggleHandler}
				isOpen={isMenuOpen}
			/>
			<MenuList isOpen={isMenuOpen} />
			<Socials isMenuOpen={isMenuOpen} />
		</div>
	)
}
