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
					<EmpInput 
						placeholder="Add Name..." 
						value={this.state.nameInput ? this.state.nameInput : ''}							
						id="name" 
						handleChange={this.handleChange}/>				
					<EmpInput 
						placeholder="Add Phone..." 	
						value={this.state.phoneInput ? this.state.phoneInput : ''}						
						id="phone" 
						handleChange={this.handleChange}/>
					<EmpInput
						placeholder="Add Address..." 	
						value={this.state.addressInput ? this.state.addressInput : ''}						
						id="address" 
						handleChange={this.handleChange}/>
					<button type="submit" className="btn btn-primary">{this.props.buttonText}</button>
				</form>
			</div>
		);
	}
}

export default EmpForm
