import React, {Component}  from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'
import EmpForm from './EmpForm'
import ContactList from './ContactList'

class App extends Component {

	render() {

 		var form = (this.props.contact_edit == '') ? <EmpForm 
 				handleSubmitAction={this.props.actions.addContact} 
		 		title="Add Contact"
		 		buttonText="Submit"/> 
 		:
 			<EmpForm handleSubmitAction={this.props.actions.updateContact} 
 				editThisContact={this.props.contact_edit}
 				buttonText="Save"
 				title="Edit Contact" 				
			/> ;				

		return (
			<div>
			 	{form}
				<ContactList contacts={this.props.contacts}
					actions={this.props.actions} />
			 </div>
		)
	}
}

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
