function getId(state) {
	return state.contacts.reduce((maxId, contact) => {
		return Math.max(contact.id, maxId)
	}, -1) + 1
}

let reducer = function(state, action) {

	switch(action.type) {

		case 'ADD':
			return Object.assign({}, state, {
				contacts: [{
					id: getId(state),
					name: action.name,
					phone: action.phone,
					address: action.address					
				}, ...state.contacts]
			})

		case 'EDIT':
			return Object.assign({}, state, {
				contact_edit: {
					id: action.id,
					name: action.name,
					phone: action.phone,
					address: action.address					
				},
			})

		case 'UPDATE':
			return Object.assign({}, state, {
				contact_edit: '',
				contacts: [{
					id: action.id,
					name: action.name,
					phone: action.phone,
					address: action.address					
				}, ...state.contacts.filter((contact) => {
						return contact.id !== action.id
					})
				]				
			})
		
		case 'REMOVE':
			return Object.assign({}, state, {
				contacts: state.contacts.filter((contact) => {
					return contact.id !== action.id
				})
			})
					
		case 'READ': 
			return Object.assign({}, state, {
				contacts: [...state.contacts]
			})

		default:
			return state;
	}
}

export default reducer
