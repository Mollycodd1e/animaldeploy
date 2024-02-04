'use client'
import classNames from 'classnames'
import s from './style.module.scss'
import Link from 'next/link'
import { useState } from 'react'

interface IMenuListProps {
	isOpen: boolean | null
}

export const MenuList = ({ isOpen }: IMenuListProps) => {
	const defaultActiveItem = 1
	const [activeItem, setActiveItem] = useState<number>(defaultActiveItem)

	const menuList = [
		{
			name: 'Главная',
			link: '/',
			index: 1,
		},
		{
			name: 'Новости',
			link: '/news',
			index: 2,
		},
	]

	const activeItemHandler = (i: number) => {
		setActiveItem(i + 1)
	}

	return (
		<ul className={classNames(s.menuList, { [s.menuListOpen]: isOpen })}>
			{menuList.map((item, i) => {
				return (
					<li
						key={i}
						className={classNames(s.menuItem, { [s.menuActiveItem]: i + 1 === activeItem })}
						onClick={() => activeItemHandler(i)}>
						<Link href={item.link}>{item.name}</Link>
					</li>
				)
			})}
		</ul>
	)
}

