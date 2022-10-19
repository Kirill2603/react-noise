import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/store'
import { setPreset } from '../../store/playerSlice'
import styles from './PresetsList.module.css'


export const PresetsList = () => {

	const dispatch = useAppDispatch()
	const { presets } = useAppSelector(state => state.player)
	const presetsMap = []

	for (const presetsKey in presets) {
		presetsMap.push(presetsKey)
	}

	const onSelectPreset = (name: string) => {
		dispatch(setPreset(name))
	}

	return (
		<div className={styles.presetsList}>
			{presetsMap.map(preset =>
				<div
					onClick={() => onSelectPreset(preset)}
					key={preset + 'preset'}
					className={styles.preset}>
					<h4 className={styles.presetTitle}>{preset}</h4>
					<ul className={styles.tracksList}>
						{presets[preset].map(track =>
							<li key={track.title + 'presetTrack'}
									className={`${styles.trackTitle} ${styles[track.title.split(' ').join('')]}`}>{track.title}</li>
						)}
					</ul>
				</div>)
			}
		</div>
	)
}
