import s from './style.module.scss'

interface IButtonProps {
	text: string
}

export const Button = ({text}: IButtonProps) => {
	return <button className={s.button}>{text}</button>
}

