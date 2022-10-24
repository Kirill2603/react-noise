import React, { FC, useEffect } from 'react'
import { AddPreset } from 'components'
import { PresetsList } from './PresetsList/PresetsList'
import { useAppSelector } from 'store'
import styles from './PresetsModal.module.css'


type PresetsModalProps = {
	setIsOpenPresets: () => void
}

export const PresetsModal: FC<PresetsModalProps> = ({ setIsOpenPresets }) => {

	const { presets, userPresets } = useAppSelector(state => state.player)

	const onCloseModal = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
		event.stopPropagation()
		setIsOpenPresets()
	}

	useEffect(() => {
		localStorage.setItem('userPresets', JSON.stringify(userPresets))
	},[userPresets])

	return (
		<div className={styles.presetsModal} onClick={(event) => onCloseModal(event)}>
			<div className={styles.modalBody} onClick={event => event.stopPropagation()}>
				<div className={styles.modalHeader}>
					<span>Presets</span>
					<button onClick={(event) => onCloseModal(event)}>x</button>
				</div>
				<AddPreset />
				<PresetsList presets={userPresets} type={'user'} />
				<PresetsList presets={presets} type={'base'} />
			</div>
		</div>
	)
}