'use client'
import React, { useEffect, useState } from 'react'
import supabaseData from './supabaseConfig'

interface IClientDataProps {
	id: number
	created_at: string
	author: string | null
	news: string | null
}

export interface IClientContextProps {
	clientData: IClientDataProps[] | null
}

export const SupabaseDataContext = React.createContext<IClientContextProps>({ clientData: null })

const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
	const [clientData, setClientData] = useState<IClientDataProps[] | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await supabaseData.from('AnimalTesting').select()

			if (error) return
			if (data) setClientData(data)
		}
		fetchData()
	}, [supabaseData])

	return (
		<SupabaseDataContext.Provider value={{ clientData: clientData }}>
			{children}
		</SupabaseDataContext.Provider>
	)
}

export default SupabaseProvider

