import React from 'react';
import './Employee.css'

const employee = (props) => {
	return (
		<span>
			<span className="Employee-column">
				id: <label>{props.employee.id}</label>
			</span>
			<span className="Employee-column">
				name:  <input type="text" value={props.employee.name} placeholder="name..."
											onChange={event => props.handler(props.employee.id, "name", event.target.value)}/>
			</span>
			<span className="Employee-column">
				email: <input type="text" value={props.employee.email} placeholder="email..."
											onChange={event => props.handler(props.employee.id, "email", event.target.value)}/>
			</span>
		</span>

	);
};

export default employee;