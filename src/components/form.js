import React, { useState } from 'react';

const ContactForm = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// submit the form to the server
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<br />
				<input
					type='text'
					name='name'
					className='form_input'
					value={formState.name}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Email:
				<br />
				<input
					type='email'
					name='email'
					className='form_input'
					value={formState.email}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Message:
				<br />
				<textarea
					name='message'
					value={formState.message}
					onChange={handleChange}
				/>
			</label>
			<br />
			<button className='submit_btn' type='submit'>
				Send
			</button>
		</form>
	);
};

export default ContactForm;
