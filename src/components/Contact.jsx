import { useState } from 'react';
import emailjs from 'emailjs-com';
import FormSuccessMessage from './FormSuccessMessage';

export default function Contact() {
	const [message, setMessage] = useState(false);

	// handleSubmit method is passed to the form and NOT the button
	const handleSumbit = (e) => {
		e.preventDefault();
		// if the user completes the form then setMessage is true so it can be passed in the return as a successful completion
		setMessage(true);
		emailjs
			.sendForm(
				'service_74q0t8q', //service ID
				'template_2jwok08', // template ID of the email
				e.target,
				'user_3yYhsLEErpppBJO57fmAS' //userID
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<div className='contact' id='contact'>
			<div className='form-container'>
				<form onSubmit={handleSumbit}>
					{/* method that handles the form */}
					<h1>Contact Me</h1>
					<input type='text' placeholder='Subject' name='name' required />
					<input type='email' placeholder='Email' name='email' required />
					<textarea placeholder='Message' name='message' required></textarea>
					<button type='submit'>send</button>
					{/* if the message exists then go ahead and display it, otherwise do nothing */}
					{message && <FormSuccessMessage />}
				</form>
			</div>
		</div>
	);
}
