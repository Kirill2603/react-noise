import { FC, useEffect, useState } from 'react'

type PlayerProps = {
	audioTrack: { audio: string, title: string, img: string }
	ambients: Array<{ title: string, volume: number }> | []
	onSetAmbient: (title: string) => void
}

export const Player: FC<PlayerProps> = ({ audioTrack, ambients, onSetAmbient }) => {

	const [play, setPlay] = useState(false)
	const [audio] = useState(new Audio(audioTrack.audio))
	audio.loop = true




	const onSetPlay = () => {
		// if (ambients.length === 3) {
		// 	return
		// }
		if (!ambients.find(ambient => ambient.title === audioTrack.title)) {
			onSetAmbient(audioTrack.title)
			setPlay(true)
			audio.play()
		}
		if (!!ambients.find(ambient => ambient.title === audioTrack.title) || ambients.length === 3) {
			onSetAmbient(audioTrack.title)
			setPlay(false)
			audio.pause()
		}


	}

	return (
		<div onClick={onSetPlay}
				 className={`${play ? 'shadow-xl shadow-neutral-500 ring-4  ring-gray-700' : ''} 
				 rounded-3xl hover:ring-2 ring-gray-700 cursor-pointer overflow-hidden`}>
			<div className={`w-full h-full`}
					 style={{ backgroundImage: `url(${audioTrack.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
				<h3 className={`
				${play ? 'backdrop-saturate-150 backdrop-blur-0 text-shadow shadow-neutral-900' : 'backdrop-blur-sm'}
				hover:text-shadow shadow-black text-4xl text-cyan-50 
				font-bold flex flex-col text-center justify-center h-full drop-shadow-2xl shadow-neutral-50 `}>
					{audioTrack.title}
				</h3>
			</div>
		</div>
	)
}