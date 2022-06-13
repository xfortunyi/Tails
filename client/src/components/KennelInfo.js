import React from 'react';
import { Link } from 'react-router-dom';
import cancelIcon from './../assets/cancelIcon.png';
import adressIcon from './../assets/adress2.png';
import descriptionIcon from './../assets/information2.png';
import phoneIcon from './../assets/phone.png';
import websiteIcon from './../assets/website.png';

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
				<div className="wrappedKennelInfo">
					<img src={adressIcon} />
					<h3 className="kennelMainInfo">
						{kennelInfo.adress}. {kennelInfo.city}
					</h3>
				</div>
				<div className="wrappedKennelInfo">
					<img src={phoneIcon} />
					<h3 className="kennelMainInfo">{kennelInfo.telephone}</h3>
				</div>
				<div className="wrappedKennelInfo">
					<img src={websiteIcon} />
					<h3 className="kennelMainInfo">{kennelInfo.website}</h3>
				</div>
				<div className="wrappedKennelInfo">
					<img src={descriptionIcon} />
					<h3 className="kennelMainInfo">{kennelInfo.description}</h3>
				</div>
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
