import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../services/apiService';
import Steps from './../assets/steps.png';

const Login = ({ kennelInfo }) => {
	console.log('hello', kennelInfo);
	const asyncLogin = async (kennel) => {
		return await login(kennel);
	};
	function handleSubmit(e) {
		e.preventDefault();
		const kennel = {
			email: e.target.email.value,
			password: e.target.password.value,
		};
		let test = asyncLogin(kennel);
		e.target.reset();
	}

	return (
		<>
			<div className="wrapper">
				<img className="steps" src={Steps} />
				<img className="steps1" src={Steps} />
			</div>
			<form className="LoginForm" onSubmit={handleSubmit}>
				<div className="Logincontainer">
					<label className="labels">Email</label>
					<input
						className="inputs"
						type="email"
						name="email"
						placeholder="Insert your email..."
					></input>
					<label className="labels">Password</label>
					<input
						className="inputs"
						type="password"
						name="password"
						placeholder="Insert your password.."
					></input>
					<Link
						to={{
							pathname: `/profile/${kennelInfo.id}`,
						}}
					>
						<button className="btnNewKennel" type="submit">
							Enter
						</button>
					</Link>
				</div>
			</form>
		</>
	);
};

export default Login;
