import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { savePreset } from '../../store/playerSlice'
import styles from './AddPreset.module.css'

export const AddPreset = () => {

	const playNow = useAppSelector(state => state.player.playNow)
	const dispatch = useAppDispatch()
	const [presetName, setPresetName] = useState<string>('')

	const onSavePreset = () => {
		dispatch(savePreset({ preset: playNow, title: presetName }))
	}

	return (
		<div className={styles.addPreset}>
			<input
				className={styles.addPresetInput}
				type='text'
				value={presetName}
				onChange={(event) => setPresetName(event.currentTarget.value)} />
			<button
				className={styles.addPresetButton}
				onClick={onSavePreset}>Save
			</button>
		</div>
	)
}
