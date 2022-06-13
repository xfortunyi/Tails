import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneKennel } from './../services/apiService';

function Profile() {
	const [kennelData, setKennelData] = useState({});

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
			<section>
				<div className="profileDogs">
					{kennelData.Dogs.map((dog) => (
						<section key={dog.id}>
							<div>{dog.name}</div>
							<div>
								<div>{dog.breed}</div>
								<div>{dog.size}</div>
								<div>{dog.age}</div>
							</div>
							<div>Picture?</div>
						</section>
					))}
				</div>
			</section>
		</>
	);
}

export default Profile;
