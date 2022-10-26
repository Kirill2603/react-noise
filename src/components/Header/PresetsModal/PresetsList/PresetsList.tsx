import React, { FC, useState } from 'react'
import { useAppDispatch } from 'store'
import { deletePreset, setPreset, TrackType } from 'store/playerSlice'
import { ReactComponent as DeleteIcon } from 'assets/deleteIcon.svg'
import styles from './PresetsList.module.css'

type PresetListProps = {
	type: 'user' | 'base'
	presets: { [key: string]: TrackType[] }
}

export const PresetsList: FC<PresetListProps> = ({ type, presets }) => {

	const [deleteConfirm, setDeleteConfirm] = useState<string>('')
	const dispatch = useAppDispatch()
	const presetsMap = []

	for (const presetKey in presets) {
		presetsMap.push(presetKey)
	}

	const onSelectPreset = (name: string) => {
		dispatch(setPreset(name))
	}

	const onClickDeletePreset = (event: React.MouseEvent<SVGSVGElement>, presetName: string) => {
		event.stopPropagation()
		setDeleteConfirm(presetName)
	}

	const onConfirmDeletePreset = (event: React.MouseEvent<HTMLButtonElement>, presetName: string, confirm: boolean) => {
		event.stopPropagation()
		if (confirm) {
			dispatch(deletePreset({ presetName }))
		}
		setDeleteConfirm('')
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
						{deleteConfirm !== preset ?
							<>
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
									<DeleteIcon key={preset + 'delete'} onClick={(event) => onClickDeletePreset(event, preset)}>x</DeleteIcon>}
							</>
						:
							<div className={styles.deleteConfirm}>
								<span>Delete preset?</span>
								<button onClick={(event) => onConfirmDeletePreset(event, preset, true)}>Yes</button>
								<button onClick={(event) => onConfirmDeletePreset(event, preset, false)}>No</button>
							</div>
						}
					</div>
				</ul>)
			}
		</div>
	)
}
