import { Burger } from '@/app/shared/burger/ui'
import s from './style.module.scss'

interface IHeaderProps {
	className?: string
}

export const Header = ({}: IHeaderProps) => {
	return (
		<div className={s.root}>
			<Burger></Burger>
			<h2>Кошак</h2>
		</div>
	)
}

