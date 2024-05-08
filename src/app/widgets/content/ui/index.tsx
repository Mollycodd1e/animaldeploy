'use client'
import { useContext } from 'react'
import { Header } from '../../header/ui'
import s from './style.module.scss'
import {
	IClientContextProps,
	SupabaseDataContext,
} from '@/app/providers/supabaseProvider/supabaseProvider'

export const Content = () => {
	const headerContent = {
		title: 'Главная',
		description: 'описание',
		image: 'кря-кря',
	}

	const { clientData }: IClientContextProps = useContext(SupabaseDataContext)
	if (!clientData) return null

	console.log(clientData)
	return (
		<div className={s.content}>
			<Header content={headerContent} />
			<div>{'Футер'}</div>
		</div>
	)
}
