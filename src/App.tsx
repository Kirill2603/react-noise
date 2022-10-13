import React, { useState } from 'react'
import { AudioGrid } from './components/AudioGrid'
import styles from './App.module.css'
import { Header } from './components/Header'

export const App = () => {

	type initialPlayType = Array<{title: string, volume: number}> | []

	const [ambients, setAmbients] = useState<initialPlayType>([])

	const onSetAmbient = (title: string) => {
		if (ambients.length >= 3) {
			setAmbients(ambients.filter(ambient => ambient.title !== title))
		}
		if (ambients.find(ambient => ambient.title === title)) {
			setAmbients(ambients.filter(ambient => ambient.title !== title))
		}
		if (!ambients.find(ambient => ambient.title === title) && ambients.length < 3) {
			setAmbients([...ambients, {title, volume: 1} ])
		}
	}

	console.log(ambients)

	return (
		<div className={styles.app}>
			{ambients && ambients.map(ambient => <div className='text-amber-50' key={ambient.title}>{ambient.title}</div>)}
			<Header />
			<AudioGrid onSetAmbient={onSetAmbient} ambients={ambients}/>
		</div>
	)
}
