import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import {Provider} from 'react-redux'

let initialState = {
	contacts: [{
		id: 1,
		name:'James Smith',
		phone: '4047401388',
		address:'3350 chartwell lane'
	}],
	contact_edit : '',
}

let store = configureStore(initialState);

render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById('app')
); 