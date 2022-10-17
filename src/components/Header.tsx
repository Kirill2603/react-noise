import React, { FC } from 'react'
import { TrackControl } from './TrackControl'
import { useAppSelector } from '../store/store'

type HeaderProps = {}

export const Header: FC<HeaderProps> = () => {
	const { playNow } = useAppSelector(state => state.player)
	return (
		<header>
			{playNow.map(track => <TrackControl key={track.title + 'pn'} track={track} />)}
		</header>
	)
}
