import React from 'react'
import styles from './VolumeControl.module.css'

export const VolumeControl = () => {
	return (
		<div className='flex flex-col'>
			<span>Ambient #1</span>
			<input type='range' min={0} max={1} step={0.1} className={styles.volumeControl} />
		</div>
		)
}
