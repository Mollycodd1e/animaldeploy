import s from './style.module.scss'

interface IHeaderProps {
	className?: string
}

export const Header = ({}: IHeaderProps) => {

	return (
		<div className={s.header}>
			<div>Картинка</div>
			<h2>Title</h2>
			<div>Форма логина</div>
		</div>
	)
}

