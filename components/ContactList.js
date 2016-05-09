import React, {Component} from 'react'
import Contact from './Contact'

class ContactList extends Component {

	refresh() {
		this.props.actions.readContacts();
	}


	render() {
		var _self = this;

		return(
			<div>
				<h3>Contacts</h3>
				<button className="btn btn-primary" onClick={this.refresh.bind(this)}>Refresh List</button>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Phone</th>
							<th>Address</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.contacts.map(function(contact, index) {
								return (
									<Contact contact={contact} 
										key={index} 
										actions={_self.props.actions}
									/>
								)
							})
						}
					</tbody>
				</table>
			</div>
		);
	}
}

export default ContactList
