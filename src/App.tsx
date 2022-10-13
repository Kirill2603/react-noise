import React from 'react'
import { AudioGrid } from './components/AudioGrid'
import styles from './App.module.css'

export const App = () => {
	return (
		<div className={styles.app}>
			<AudioGrid />
		</div>
	)
}
