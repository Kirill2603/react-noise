import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { savePreset } from 'store/playerSlice'
import styles from './AddPreset.module.css'

export const AddPreset = () => {

	const playNow = useAppSelector(state => state.player.playNow)
	const dispatch = useAppDispatch()
	const [presetName, setPresetName] = useState<string>('')
	const [inputError, setInputError] = useState<'Please select presets' | 'Please enter preset name' | null>()

	const onSavePreset = () => {
		if (playNow.length === 0) {
			setInputError('Please select presets')
		}
		if (!presetName) {
			setInputError('Please enter preset name')
		}
		if (playNow.length !== 0 && presetName !== '') {
			dispatch(savePreset({ preset: playNow, title: presetName }))
			setInputError(null)
			setPresetName('')
		}
	}

	console.log(inputError)

	return (
		<>
			<div className={`${styles.addPreset} ${inputError && styles.error}`}>
				<input
					className={styles.addPresetInput}
					type='text'
					placeholder='Name of your preset?'
					value={presetName}
					onChange={(event) => setPresetName(event.currentTarget.value)} />
				<button
					className={styles.addPresetButton}
					onClick={onSavePreset}>Save
				</button>
			</div>
			<span className={styles.errorLog}>{inputError}</span>
		</>
	)
}
