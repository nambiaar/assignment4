import React, {Component} from 'react'
import EmpInput from './EmpInput'

class EmpForm extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			nameInput: '',
			phoneInput: '',
			addressInput: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			nameInput: nextProps.editThisContact && nextProps.editThisContact.name,
			phoneInput: nextProps.editThisContact && nextProps.editThisContact.phone,
			addressInput: nextProps.editThisContact && nextProps.editThisContact.address
		});
	}

	handleChange(event) {

		switch(event.target.id) {
			case 'name':
				this.setState({
					nameInput: event.target.value,	
				});	
				break;
			case 'phone':				
				this.setState({
					phoneInput: event.target.value,	
				});	
				break;
			case 'address':
				this.setState({
					addressInput: event.target.value,	
				});	

				break;
			default:
				break;
		}
	}

	handleSubmit(event) {
		event.preventDefault();

		var contact = {
			id: this.props.editThisContact && this.props.editThisContact.id,
			name: this.state.nameInput,
			phone: this.state.phoneInput,
			address: this.state.addressInput
		}

		this.props.handleSubmitAction(contact)
	}


	render() {
		return (		
			<div className="well">
				<h3>{this.props.title}</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					
					<div className="form-group">
					<label className="control-label"/>
					<input 
						defaultValue={this.state,nameInput}
						type="text"
						name="username"
						className="form-control"
					/>

					
					<button type="submit" className="btn btn-primary">{this.props.buttonText}</button>
					</div>
				</form>
			</div>
		);
	}
}

export default EmpForm
