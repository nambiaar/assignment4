import React, {Component} from 'react'

class Contact extends Component {

	handleRemove(i, j) {
		this.props.actions.removeContact(i);
	}

	handleEdit(i, j) {
		this.props.actions.editContact(i);
	}

	render() {
		return(
			<tr>
				<td>{this.props.contact.name}</td>
				<td>{this.props.contact.phone}</td>
				<td>{this.props.contact.address}</td>
				<td><a href="#" className="btn btn-default" onClick={this.handleEdit.bind(this, this.props.contact)}>Edit</a> <a href="#" className="btn btn-danger"
					onClick={this.handleRemove.bind(this, this.props.contact.id)}>Remove</a></td>
			</tr>
		);
	}

}

export default Contact
