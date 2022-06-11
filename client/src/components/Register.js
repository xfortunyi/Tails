import React from 'react';
import { Link } from 'react-router-dom';
import { createKennel } from '../services/apiService';

function Register() {
	const asyncNewKennel = async (newKennel) => {
		return await createKennel(newKennel);
	};
	function handleSubmit(e) {
		e.preventDefault();
		const newKennel = {
			name: e.target.name.value,
			adress: e.target.adress.value,
			city: e.target.city.value,
			email: e.target.email.value,
			password: e.target.password.value,
			website: e.target.website.value,
			description: e.target.description.value,
			latitude: e.target.latitude.value,
			longitude: e.target.longitude.value,
		};
		let test = asyncNewKennel(newKennel);
		e.target.reset();
	}

	return (
		<form className="registerForm" onSubmit={handleSubmit}>
			<div className="container">
				<h2>Create a new Kennel</h2>
				<label className="labels">Name</label>
				<input
					className="inputs"
					type="text"
					name="name"
					placeholder="Insert a name..."
				></input>
				<label className="labels">Adress</label>
				<input
					className="inputs"
					type="text"
					placeholder="Insert an adress..."
					name="adress"
				></input>
				<label className="labels">City</label>
				<input
					className="inputs"
					type="text"
					name="city"
					placeholder="Insert a city..."
				></input>
				<label className="labels">Email</label>
				<input
					className="inputs"
					type="email"
					name="email"
					placeholder="Insert an email..."
				></input>
				<label className="labels">Password</label>
				<input
					className="inputs"
					type="password"
					name="password"
					placeholder="Insert a password.."
				></input>
				<label className="labels">Website</label>
				<input
					className="inputs"
					type="text"
					name="website"
					placeholder="Insert a website..."
				></input>
				<label className="labels">Description</label>
				<input
					className="inputs"
					type="text"
					name="description"
					placeholder="Insert a description..."
				></input>
				<label className="labels">Longitude</label>
				<input
					className="inputs"
					type="text"
					name="longitude"
					placeholder="Insert a longitude..."
				></input>
				<label className="labels">Latitude</label>
				<input
					className="inputs"
					type="text"
					name="latitude"
					placeholder="Insert a latitude..."
				></input>
				<Link
					to={{
						pathname: '/profile',
					}}
				>
					<button className="btn" type="submit">
						Create new Kennel
					</button>
				</Link>
			</div>
		</form>
	);
}

export default Register;