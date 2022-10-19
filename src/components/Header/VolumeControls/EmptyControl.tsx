import React from 'react'
import styles from './VulumeControls.module.css'

export const EmptyControl = () => {
	return (
		<div className={styles.trackControl}>
			<span>Empty</span>
			<div className={styles.emptyControl}></div>
		</div>
	)
}
