import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from './../components/Loader';
import { getOneKennel } from './../services/apiService';
import DogForm from './DogForm';
import adressIcon from './../assets/adress2.png';
import phoneIcon from './../assets/phone.png';
import websiteIcon from './../assets/website.png';
import descriptionIcon from './../assets/information2.png';

function Profile() {
	const [kennelData, setKennelData] = useState();

	const { id } = useParams();

	const getKennel = async function () {
		const data = await getOneKennel(id);
		console.log(data);
		setKennelData(data);
	};

	useEffect(() => {
		getKennel();
	}, []);

	return (
		<>
			{kennelData ? (
				<>
					<section className="profileInfo">
						<Link
							to={{
								pathname: '/',
							}}
						>
							<button className="logoutBtn">Logout</button>
						</Link>
						<div className="profileTitle">{kennelData.name}</div>
						<div className="profileInformation">
							<div className="profilewithPictures">
								<img src={adressIcon} />
								{kennelData.adress}. {kennelData.city}
							</div>
							<div className="profilewithPictures">
								<img src={phoneIcon} />
								{kennelData.telephone}
							</div>
							<div className="profilewithPictures">
								<img src={websiteIcon} />
								{kennelData.email}
							</div>
							<div className="profilewithPictures">
								<img src={descriptionIcon} />
								{kennelData.description}
							</div>
						</div>
					</section>
					<DogForm setKennelData={setKennelData} />

					<div className="profileDogs">
						{kennelData.Dogs.map((dog) => (
							<>
								<section key={dog.id} className="dogContainer">
									<div className="dogMainInfo">
										<div className="dogNameProfile">{dog.name}</div>
										<div className="dogbreedProfile">{dog.breed}</div>
										<div className="dogsizeProfile">{dog.size}</div>
										<div className="dogageProfile">{dog.age}</div>
										<div className="dogdescriptionProfile">
											{dog.description}
										</div>
									</div>
								</section>
							</>
						))}
					</div>
				</>
			) : (
				<Loader />
			)}
		</>
	);
}

export default Profile;
