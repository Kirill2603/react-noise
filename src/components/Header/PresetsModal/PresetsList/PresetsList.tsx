import React, { FC } from 'react'
import { useAppDispatch } from 'store'
import { deletePreset, setPreset, TrackType } from 'store/playerSlice'
import styles from './PresetsList.module.css'

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

	const onClickDeletePreset = (event: React.MouseEvent<HTMLButtonElement>, presetName: string) => {
		event.stopPropagation()
		dispatch(deletePreset({ presetName }))
	}

	return (
		<div className={styles.presetsList}>
			<h3>{type === 'user' ? 'Yours presets' : 'Presets'}</h3>
			{presetsMap.length === 0 && <span>No user presets saved</span>}
			{presetsMap.map(preset =>
				<ul
					onClick={() => onSelectPreset(preset)}
					key={preset + 'preset'}
					className={styles.preset}>
					<h4 className={styles.presetTitle}>{preset}</h4>
					<div className={styles.tracksList}>
						<li>
							{presets[preset].map(track =>
									<span
										key={track.title + 'presetTrack'}
										className={`${styles.trackTitle} ${styles[track.title.split(' ').join('')]}`}>
								{track.title}
							</span>
							)}
						</li>
						{type === 'user' &&
							<button key={preset + 'delete'} onClick={(event) => onClickDeletePreset(event, preset)}>x</button>}
					</div>
				</ul>)
			}
		</div>
	)
}
