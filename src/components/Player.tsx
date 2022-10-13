import { FC, useState } from 'react'

type PlayerProps = {
	audioTrack: { audio: string, title: string, img: string }
}

export const Player: FC<PlayerProps> = ({ audioTrack }) => {

	const [play, setPlay] = useState(false)
	const [audio] = useState(new Audio(audioTrack.audio))
	audio.loop = true

	const onSetPlay = () => {
		if (play) {
			audio.pause()
		} else if (!play) {
			audio.play()
		}
		setPlay(!play)
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