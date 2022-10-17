import React, { FC, useCallback, useState } from 'react'
import { TrackControl } from './TrackControl'
import { useAppSelector } from '../store/store'
import { MasterVolume } from './MasterVolume'
import { PlayButton } from './PlayButton'
import { EmptyControl } from './EmptyControl'

type HeaderProps = {}

export const Header: FC<HeaderProps> = () => {

	const playNow = useAppSelector(state => state.player.playNow)
	const [isPlay, setIsPlay] = useState(true)
	const [masterVolume, setMasterVolume] = useState(0.5)

	const onSetPlay = useCallback(() => {
		setIsPlay(!isPlay)
	},[isPlay])

	const onSetMasterVolume = (volume: number) => {
		setMasterVolume(volume)
	}

	return (
		<header className='flex flex-row p-5'>
			<PlayButton isPlay={isPlay} onSetPlay={onSetPlay}/>
			<MasterVolume masterVolume={masterVolume} onSetMasterVolume={onSetMasterVolume}/>
			{playNow[0] ? <TrackControl isPlay={isPlay} masterVolume={masterVolume} track={playNow[0]} /> : <EmptyControl />}
			{playNow[1] ? <TrackControl isPlay={isPlay} masterVolume={masterVolume} track={playNow[1]} /> : <EmptyControl />}
			{playNow[2] ? <TrackControl isPlay={isPlay} masterVolume={masterVolume} track={playNow[2]} /> : <EmptyControl />}
		</header>
	)
}
