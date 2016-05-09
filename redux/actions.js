let actions = {
	addContact: function(contact) {
		return {
			type: 'ADD',			
			name: contact.name,
			phone: contact.phone,
			address: contact.address					
		}
	},

	removeContact: function(id) {
		return {
			type: 'REMOVE',
			id: id
		}
	},


	editContact: function(contact) {
		return {
			type: 'EDIT',			
			id: contact.id,
			name: contact.name,
			phone: contact.phone,
			address: contact.address					
		}
	},

	updateContact: function(contact) {
		return {
			type: 'UPDATE',
			id: contact.id,
			name: contact.name,
			phone: contact.phone,
			address: contact.address									
		}
	},

	readContacts: function() {
		return {
			type: 'READ'
		}
	}
}

export default actions
