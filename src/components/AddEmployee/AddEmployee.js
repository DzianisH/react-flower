import React, {Component} from 'react';

class AddEmployee extends Component {

	state = {
		name: '',
		email: ''
	};

	resetState = () => {
		this.setState({name: '', email: ''})
	};

	updateEmployee = (field, newValue) => {
		const state = this.state;
		state[field] = newValue;
		this.setState(state);
	};

	addEmployee = () => {
		this.resetState();
		this.props.handler(this.state);
	};

	render() {

		return (
			<span className="AddEmployee-wrapper">
				<div>Add New Employee</div>
				<span className="AddEmployee-column">
					name: <input type="text" value={this.state.name}
											 onChange={event => this.updateEmployee('name', event.target.value)}/>
				</span>
				<span className="AddEmployee-column">
						email: <input type="text" value={this.state.email}
													onChange={event => this.updateEmployee('email', event.target.value)}/>
				</span>
				<button className="AddEmployee-column"
								onClick={this.addEmployee}>ADD</button>
				<button className="AddEmployee-column"
								onClick={this.resetState}>RESET</button>
			</span>
		)
	}
}

export default AddEmployee;