import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './../components/Loader';
import { getOneKennel } from './../services/apiService';
import DogForm from './DogForm';

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
						<div>{kennelData.name}</div>
						<div>
							{kennelData.adress}
							{kennelData.city}
						</div>
						<div>
							{kennelData.telephone}
							{kennelData.email}
						</div>
						<div>{kennelData.description}</div>
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
