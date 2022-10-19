import React, { FC } from 'react'
import { AddPreset } from 'components/index'
import styles from './PresetsModal.module.css'
import { PresetsList } from './PresetsList/PresetsList'
import { useAppSelector } from '../../../store/store'


type PresetsModalProps = {
	setIsOpenPresets: () => void
}

export const PresetsModal: FC<PresetsModalProps> = ({ setIsOpenPresets }) => {

	const { presets, userPresets } = useAppSelector(state => state.player)

	return (
		<div className={styles.presetsModal}>
			<div className={styles.modalHeader}>
				<span>Presets</span>
				<button onClick={setIsOpenPresets}>x</button>
			</div>
			<AddPreset />
			<PresetsList presets={userPresets} type={'user'} />
			<PresetsList presets={presets} type={'base'} />
		</div>
	)
}