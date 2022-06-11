import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function KennelInfo({ kennelInfo, setKennelInfo, setInfo }) {
	return (
		<div className="kennelInfo">
			You clicked:
			<section className="mainInfo">
				<button
					className="btnCancel"
					onClick={() => {
						setInfo(false);
					}}
				>
					X
				</button>
				<h1 className="kennelName">{kennelInfo.name}</h1>
				<h3 className="kennelLocation">
					{kennelInfo.adress}. {kennelInfo.city}
				</h3>
				<h3 className="kennelWebsite">{kennelInfo.website}</h3>
				<h3 className="kennelDescription">{kennelInfo.description}</h3>
			</section>
			<section className="kennelDogs">
				Our Dogs:
				<>
					<div className="KennelDogsMap">
						{kennelInfo.Dogs.map((dog) => (
							<section className="dogInfo" key={dog.id}>
								<div>{dog.name}</div>
								<div>{dog.breed}</div>
								<div>{dog.size}</div>
								<div>{dog.age}</div>
							</section>
						))}
					</div>
				</>
				<Link
					to={{
						pathname: `/profile/${kennelInfo.id}`,
					}}
				>
					<button className="btnContact">Contact Us</button>
				</Link>
			</section>
		</div>
	);
}

export default KennelInfo;
