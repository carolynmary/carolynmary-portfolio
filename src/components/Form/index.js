import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
	return (
		<div className='form-group'>
			<input className='form-control' {...props} />
		</div>
	);
}

// forwarding ref (alternatively you can also prop drill it): https://reactjs.org/docs/forwarding-refs.html)
export const ForwardRefInput = React.forwardRef((props, ref) => (
	<div className='form-group'>
		<input className='form-control' ref={ref} {...props} />
	</div>
));

export function TextArea(props) {
	return (
		<div className='form-group'>
			<input className='form-control' {...props} />
		</div>
	);
}

export function FormBtn(props) {
	return (
		<button
			{...props}
			style={{ marginLeft: 10 }}
			className='btn-dark-overrides btn btn-dark rounded-3'>
			{props.children}
		</button>
	);
}

export function FormBtnSecondary(props) {
	return (
		<button
			{...props}
			style={{ marginLeft: 10 }}
			className='btn-secondary-overrides btn btn-secondary rounded-3'>
			{props.children}
		</button>
	);
}