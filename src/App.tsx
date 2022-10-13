import React from 'react'
import { AudioGrid } from './components/AudioGrid'
import styles from './App.module.css'
import { Header } from './components/Header'

export const App = () => {
	return (
		<div className={styles.app}>
			<Header />
			<AudioGrid />
		</div>
	)
}
