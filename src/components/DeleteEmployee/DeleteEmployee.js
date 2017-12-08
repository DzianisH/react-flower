import React from 'react';

const deleteEmployee = (props) => {
	return (
		<button onClick={() => props.handler(props.id)}>X</button>
	)
};


export default deleteEmployee;