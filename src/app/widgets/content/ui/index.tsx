import { Header } from '../../header/ui'
import s from './style.module.scss'

export const Content = () => {
	const headerContent = {
		title: 'Главная',
		description: 'описание',
		image: 'кря-кря',
	}

	// const { clientData }: IClientContextProps = useContext(SupabaseDataContext)
	// if (!clientData) return null

	return (
		<div className={s.content}>
			<Header content={headerContent} />
			<div>{'Футер'}</div>
		</div>
	)
}
