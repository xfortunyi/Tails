import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/apiService';
import Steps from './../assets/steps.png';
import backIcon from './../assets/backIcon.png';

const Login = () => {
	let navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const kennel = {
			email: e.target.email.value,
			password: e.target.password.value,
		};
		login(kennel).then((res) => {
			navigate(`/profile/${res.id}`);
		});
		e.target.reset();
	}

	return (
		<>
			<div className="wrapper1">
				<img className="steps" src={Steps} />
				<img className="steps1" src={Steps} />
			</div>
			<Link
				to={{
					pathname: '/',
				}}
			>
				<img className="backBtnMap2" src={backIcon} />
			</Link>
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
					<button className="btnNewLogin" type="submit">
						Sign In
					</button>
				</div>
			</form>
		</>
	);
};

export default Login;
