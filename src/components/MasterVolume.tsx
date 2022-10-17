import React, { FC } from 'react'
import styles from 'styles/TrackControl.module.css'

type MasterVolumeProps = {
	masterVolume: number
	onSetMasterVolume: (volume: number) => void
}

export const MasterVolume: FC<MasterVolumeProps> = ({ masterVolume, onSetMasterVolume }) => {

	return (
		<div className={styles.trackControl}>
			<span>Master volume</span>
			<input
				className={styles.volumeControl}
				type='range'
				min={0}
				max={1}
				step={0.05}
				defaultValue={masterVolume}
				onChange={(event) => onSetMasterVolume(Number(event.currentTarget.value))} />
		</div>
	)
}
