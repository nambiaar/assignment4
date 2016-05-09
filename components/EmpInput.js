import React, {Component} from 'react'

class EmpInput extends Component {
	
	render() {		
		return(
			<div className="form-group">
				<input
					{...this.props}
					type="text" 
					className="form-control"
					onChange={this.props.handleChange}/>
			</div>
		)	
	}
}

export default EmpInput
