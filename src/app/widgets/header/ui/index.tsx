import { Button } from '@/app/shared/ui/button/ui'
import s from './style.module.scss'

export const Header = ({}) => {
	return (
		<div className={s.header}>
			<div>Картинка</div>
			<h2>Title</h2>
			<Button text={'Войти'} />
		</div>
	)
}
