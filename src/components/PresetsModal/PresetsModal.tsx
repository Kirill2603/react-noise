import React, { FC } from 'react'
import { PresetsList, AddPreset } from 'components'
import styles from './PresetsModal.module.css'

type PresetsModalProps = {
	setIsOpenPresets: () => void
}

export const PresetsModal: FC<PresetsModalProps> = ({ setIsOpenPresets }) => {
	return (
		<div className={styles.presetsModal}>
			<div className={styles.modalHeader}>
				<span>Presets</span>
				<button onClick={setIsOpenPresets}>x</button>
			</div>
			<AddPreset />
			<PresetsList />
		</div>
	)
}