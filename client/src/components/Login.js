import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../services/apiService';
import Steps from './../assets/steps.png';

const Login = () => {
	function handleSubmit(e) {
		e.preventDefault();
		const kennel = {
			email: e.target.email.value,
			password: e.target.password.value,
		};
		login(kennel).then((res) => {
			console.log(res);
		});
		e.target.reset();
	}

	return (
		<>
			<div className="wrapper1">
				<img className="steps" src={Steps} />
				<img className="steps1" src={Steps} />
			</div>
			<form className="LoginForm" onSubmit={handleSubmit}>
				<div className="Logincontainer">
					<div className="InfoLog">
						<label className="labels1">Email</label>
						<input
							className="inputs1"
							type="email"
							name="email"
							placeholder="Insert your email..."
						></input>
						<label className="labels1">Password</label>
						<input
							className="inputs1"
							type="password"
							name="password"
							placeholder="Insert your password.."
						></input>
					</div>
					{/* <Link
						to={{
							pathname: `/profile/${id}`,
						}}
					> */}
					<button className="btnNewLogin" type="submit">
						Sign In
					</button>
					{/* </Link> */}
				</div>
			</form>
		</>
	);
};

export default Login;
