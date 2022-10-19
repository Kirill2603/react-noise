import React, { FC } from 'react'
import styles from './PresetsList.module.css'
import { useAppDispatch } from 'store/store'
import { setPreset, TrackType } from 'store/playerSlice'

type PresetListProps = {
	type: 'user' | 'base'
	presets: { [key: string]: TrackType[] }
}

export const PresetsList: FC<PresetListProps> = ({ type, presets }) => {

	const dispatch = useAppDispatch()
	const presetsMap = []

	for (const presetKey in presets) {
		presetsMap.push(presetKey)
	}

	const onSelectPreset = (name: string) => {
		dispatch(setPreset(name))
	}

	return (
		<div>
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
