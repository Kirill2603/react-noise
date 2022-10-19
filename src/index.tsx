import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { index } from './store'
import { App } from './App'
import './index.css'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<Provider store={index}>
			<App />
		</Provider>
	</React.StrictMode>
)
