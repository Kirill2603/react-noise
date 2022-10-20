import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	airport, beach,
	cat,
	cicadas,
	fireplace, forestRiver,
	heavyRain,
	meadow,
	nightForestCicadas, piano,
	rain,
	rainRoof,
	rainThunder, seaWaves,
	train, waterfall
} from '../audios'
import {
	airportImg, beachImg,
	catImg, cicadasImg,
	fireplaceImg,
	forestRiverImg, heavyRainImg,
	meadowImg, nightForestCicadasImg, pianoImg,
	rainImg, rainRoofImg,
	rainThunderImg, seaWavesImg,
	trainImg, waterfallImg
} from '../assets/images'

export type TrackType = {
	audio: string, title: string, volume: number, img: string
}

interface InitialState {
	playNow: TrackType[],
	presets: {
		[key: string]: TrackType[]
	},
	userPresets: {
		[key: string]: TrackType[]
	}
	tracks: TrackType[]
}

const initialState: InitialState = {
	playNow: [],
	presets: {
		'Home': [
			{ audio: cat, title: 'Cat', volume: 0.5, img: catImg },
			{ audio: fireplace, title: 'Fireplace', volume: 0.5, img: fireplaceImg }
		],
		'Rain': [
			{ audio: rain, title: 'Rain', volume: 0.5, img: rainImg },
			{ audio: rainRoof, title: 'Rain roof', volume: 0.4, img: rainRoofImg },
			{ audio: rainThunder, title: 'Thunder', volume: 0.7, img: rainThunderImg }
		],
		'Field': [
			{ audio: meadow, title: 'Meadow', volume: 0.7, img: meadowImg },
			{ audio: cicadas, title: 'Cicadas', volume: 0.7, img: cicadasImg },
			{ audio: forestRiver, title: 'Forest river', volume: 0.2, img: forestRiverImg }
		]
	},
	userPresets: {},
	tracks: [
		{ audio: cat, title: 'Cat', volume: 0.5, img: catImg },
		{ audio: cicadas, title: 'Cicadas', volume: 0.5, img: cicadasImg },
		{ audio: seaWaves, title: 'Sea waves', volume: 0.5, img: seaWavesImg },
		{ audio: beach, title: 'Beach', volume: 0.5, img: beachImg },
		{ audio: rain, title: 'Rain', volume: 0.5, img: rainImg },
		{ audio: piano, title: 'Piano', volume: 0.5, img: pianoImg },
		{ audio: train, title: 'Train', volume: 0.5, img: trainImg },
		{ audio: fireplace, title: 'Fireplace', volume: 0.5, img: fireplaceImg },
		{ audio: rainThunder, title: 'Thunder', volume: 0.5, img: rainThunderImg },
		{ audio: airport, title: 'Airport', volume: 0.5, img: airportImg },
		{ audio: waterfall, title: 'Waterfall', volume: 0.5, img: waterfallImg },
		{ audio: meadow, title: 'Meadow', volume: 0.5, img: meadowImg },
		{ audio: rainRoof, title: 'Rain roof', volume: 0.5, img: rainRoofImg },
		{ audio: heavyRain, title: 'Heavy rain', volume: 0.5, img: heavyRainImg },
		{ audio: nightForestCicadas, title: 'Night forest', volume: 0.5, img: nightForestCicadasImg },
		{ audio: forestRiver, title: 'Forest river', volume: 0.5, img: forestRiverImg }
	]
}

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		toggleTrack: (state, action: PayloadAction<TrackType>) => {
			if (state.playNow.find(track => track.title === action.payload.title)) {
				state.playNow = state.playNow.filter(track => track.title !== action.payload.title)
			} else if (state.playNow.length < 3) {
				state.playNow = [...state.playNow, action.payload]
			}
		},
		setVolume: (state, action: PayloadAction<TrackType>) => {
			state.playNow = state.playNow.map(track => track.title === action.payload.title ? action.payload : track)
		},
		setPreset: (state, action: PayloadAction<string>) => {
			state.playNow = state.presets[action.payload] || state.userPresets[action.payload]
		},
		savePreset: (state, action: PayloadAction<{ preset: TrackType[], title: string }>) => {
			state.userPresets = { [action.payload.title]: [...action.payload.preset], ...state.userPresets }
		},
		deletePreset: (state, action: PayloadAction<{ presetName: string }>) => {
			delete state.userPresets[action.payload.presetName]
		}
	}
})

export const { toggleTrack, setVolume, setPreset, savePreset, deletePreset } = playerSlice.actions