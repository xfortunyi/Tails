import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import cancelIcon from './../assets/cancelIcon.png';

function KennelInfo({ kennelInfo, setKennelInfo, setInfo }) {
	return (
		<div className="kennelInfo">
			<section className="mainInfo">
				<div
					className="btnCancel"
					onClick={() => {
						setInfo(false);
					}}
				>
					<img src={cancelIcon} />
				</div>
				<h1 className="kennelName">{kennelInfo.name}</h1>
				<h3 className="kennelLocation">
					{kennelInfo.adress}. {kennelInfo.city}
				</h3>
				<h3 className="kennelWebsite">{kennelInfo.website}</h3>
				<h3 className="kennelDescription">{kennelInfo.description}</h3>
			</section>

			<section className="kennelDogs">
				<>
					<div className="KennelDogsMap">
						{kennelInfo.Dogs.map((dog) => (
							<section className="dogInfo" key={dog.id}>
								<div className="dogName">{dog.name}</div>
								<div className="basicInfo">
									<div className="dogBreed">{dog.breed}</div>
									<div className="dogSize">{dog.size}</div>
									<div className="dogAge">{dog.age}</div>
								</div>
								<div>Picture?</div>
							</section>
						))}
					</div>
				</>
			</section>
			<Link
				to={{
					pathname: `/profile/${kennelInfo.id}`,
				}}
			>
				<button className="btnContact">Contact Us</button>
			</Link>
		</div>
	);
}

export default KennelInfo;
