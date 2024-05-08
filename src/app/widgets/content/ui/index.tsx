'use client'

import { useEffect, useState } from 'react'
import supabaseData from '../../../../../supabaseConfig'
import { Header } from '../../header/ui'
import s from './style.module.scss'

export const Content = () => {
	const headerContent = {
		title: 'Главная',
		description: 'описание',
		image: 'кря-кря',
	}
	interface IClientDataProps {
		id: number
		created_at: string
		author: string | null
		news: string | null
	}

	const [clientData, setClientData] = useState<IClientDataProps[]>()

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await supabaseData.from('AnimalTesting').select()

			if (error) return
			if (data) setClientData(data)
		}
		fetchData()
	}, [supabaseData])

	if (!clientData) return null

	return (
		<div className={s.content}>
			<Header content={headerContent} />
			<div>{clientData[0].author}</div>
			<div>{'Футер'}</div>
		</div>
	)
}
