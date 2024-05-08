import { Button } from '@/app/shared/ui/button/ui'
import s from './style.module.scss'

interface IHeaderProps {
	content: {
		title: string
		description: string
		image: string
	}
}

export const Header = ({ content }: IHeaderProps) => {
	const { title, image } = content

	return (
		<div className={s.header}>
			<div>{image}</div>
			<h2>{title}</h2>
			<Button text={'Войти'} />
		</div>
	)
}
