import { Header } from '../../header/ui'
import s from './style.module.scss'

export const Content = ({}) => {
	return (
		<div className={s.content}>
			<Header />
			<div>Футер</div>
		</div>
	)
}
