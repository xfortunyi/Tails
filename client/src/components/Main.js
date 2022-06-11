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
		<div className="mainContainer">
			<h1 className="title">Tails</h1>
			<p className="description">
				Many dogs are looking for a second chance. <br></br> Do you want a new
				best friend?
			</p>
			<div className="mapPath">
				<Link
					to={{
						pathname: '/map',
						location: location,
					}}
				>
					<button className="btnGo">
						Let's go!
						<div className="arrowContainer">
							<div className="arrow"></div>
						</div>
					</button>
				</Link>
			</div>

			<section className="KennelSection">
				<h3 className="title_Kennel">Are you a Kennel?</h3>
				<div className="btnSection">
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
				</div>
			</section>
		</div>
	);
}

export default Main;