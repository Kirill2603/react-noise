import React, { FC, useCallback, useState } from 'react'
import { TrackControl } from './TrackControl'
import { useAppSelector } from '../store/store'
import { PlayButton } from './PlayButton'

type HeaderProps = {}

export const Header: FC<HeaderProps> = () => {

	const playNow = useAppSelector(state => state.player.playNow)
	const [isPlay, setIsPlay] = useState(true)

	const onSetPlay = useCallback(() => {
		setIsPlay(!isPlay)
	},[isPlay])

	return (
		<header className='flex flex-row p-5'>
			<PlayButton isPlay={isPlay} onSetPlay={onSetPlay}/>
			{playNow.map(track => <TrackControl isPlay={isPlay} key={track.title + 'pn'} track={track} />)}
		</header>
	)
}
