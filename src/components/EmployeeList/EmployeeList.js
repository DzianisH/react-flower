import React, {Component} from 'react';
import Employee from '../Employee/Employee';
import DeleteEmployee from '../DeleteEmployee/DeleteEmployee'
import './EmployeeList.css'

class EmployeeList extends Component {

	render() {
		return (
			<div>
				{this.props.list.map(employee => (
					<div key={employee.id}>
						<Employee employee={employee} handler={this.props.updateHandler}/>
						<DeleteEmployee id={employee.id} handler={this.props.deleteHandler}/>
					</div>
				))}
			</div>
		);
	};
}

export default EmployeeList;