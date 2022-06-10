import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getKennels } from '../services/apiService';

function Main() {
	const [location, setLocation] = useState({
		longitude: 0,
		latitude: 0,
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function (position) {
				setLocation({
					longitude: position.coords.longitude,
					latitude: position.coords.latitude,
				});
			},
			function (error) {
				console.log(error);
			},
			{ enableHighAccuracy: true }
		);
	}, []);

	return (
		<>
			<div>Looking for a new best friend?</div>

			<Link
				to={{
					pathname: '/map',
					location: location,
				}}
			>
				<button>Let's go!</button>
			</Link>

			<section className="KennelSection">
				<h2 className="title_Kennel">Are you a Kennel?</h2>
				<Link
					to={{
						pathname: '/login',
					}}
				>
					<button
						className="loginBtn"
						// onClick={(e) => {
						// 	handleClick('login');
						// }}
					>
						Login
					</button>
				</Link>
				<Link
					to={{
						pathname: '/register',
					}}
				>
					<button
					// className="registerBtn"
					// onClick={(e) => {
					// 	handleClick('register');
					// }}
					>
						Register
					</button>
				</Link>
			</section>
		</>
	);
}

export default Main;
