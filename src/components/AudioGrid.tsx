import React from 'react'
import { audios } from '../audios'
import { Player } from './Player'

export const AudioGrid = () => {
	return (
		<>
			{audios.map(audio =>
				<Player key={audio.title} playableAudio={audio}/>
			)}
		</>
	)
}
