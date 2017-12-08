import React, {Component} from 'react';
import EmployeeList from './components/EmployeeList/EmployeeList.js'
import logo from './logo.svg';
import './App.css';
import AddEmployee from "./components/AddEmployee/AddEmployee";

class App extends Component {

	state = {
		employeeList: [
			{
				id: 0,
				name: "Dzianis Haurylavets",
				email: "dzianis.haurylavets@helmes.ee"
			},
			{
				id: 1,
				name: "Arkadz Dobkin",
				email: "arkadz.dobkin@helmes.ee"
			},
			{
				id: 2,
				name: "Leonardo Davincci",
				email: "leonardo.davincci@helmes.ee"
			}
		]
	};

	updateEmployeeHandler = (id, filedName, newValue) => {
		const newList = this.state.employeeList;
		const updatedEmployee = newList.find(employee => employee.id === id);
		if (!updatedEmployee || updatedEmployee[filedName] === newValue) {
			return;
		}

		updatedEmployee[filedName] = newValue;
		console.log(updatedEmployee);
		this.setState({employeeList: newList})
	};

	deleteEmployeeHandler = (id) => {
		const newList = this.state.employeeList.filter(employee => employee.id !== id);

		this.setState({employeeList: newList}, () => console.log(this.state))
	};

	addEmployeeHandler = (employee) => {
		const employeeList = this.state.employeeList;
		employee.id = employeeList[employeeList.length - 1].id + 1;

		console.log(employee);
		employeeList.push(employee);
		this.setState(this.state)
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Helmes Vacation Tracking System</h1>
				</header>
				<EmployeeList list={this.state.employeeList} updateHandler={this.updateEmployeeHandler}
											deleteHandler={this.deleteEmployeeHandler}/>
				<AddEmployee handler={this.addEmployeeHandler}/>
			</div>
		);
	}
}

export default App;
