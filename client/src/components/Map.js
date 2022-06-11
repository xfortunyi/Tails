import React from 'react';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import { getKennels } from '../services/apiService';
import yourPosition from '../assets/location_icon.png';
import kennelsPos from '../assets/pngwing.com.png';
import 'leaflet/dist/leaflet.css';
import KennelInfo from './KennelInfo';
import SearchBar from './SearchBar';
import Loader from './Loader';

function Map() {
	const [location, setLocation] = useState(null);
	const [kennelList, setKennelList] = useState([]);
	const [kennelInfo, setKennelInfo] = useState({});
	const [mainKennList, setmainKennelList] = useState([]);

	const [info, setInfo] = useState(false);

	const getAllKennels = async () => {
		const data = await getKennels();
		console.log(data);
		setKennelList(data);
		setKennelInfo(data);
		setmainKennelList(data);
	};

	useEffect(() => {
		getAllKennels();
	}, []);

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

	let userPosition = L.icon({
		iconUrl: yourPosition,
		iconSize: [40, 40],
	});

	let kennelsPosition = L.icon({
		iconUrl: kennelsPos,
		iconSize: [25, 35],
	});

	const showInfo = (id) => {
		setKennelInfo(() => {
			return kennelList.find((el) => {
				return el.id === id;
			});
		});
	};

	return location ? (
		<div className="mapPageContainer">
			<MapContainer
				className="Map"
				center={[location.latitude, location.longitude]}
				zoom={14}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker
					position={{ lat: location.latitude, lng: location.longitude }}
					icon={userPosition}
				/>
				{kennelList.map((kennel) => (
					<Marker
						key={kennel.id}
						position={{ lat: `${kennel.latitude}`, lng: `${kennel.longitude}` }}
						icon={kennelsPosition}
						eventHandlers={{
							click: () => {
								showInfo(kennel.id);
								setInfo(true);
							},
						}}
					/>
				))}
			</MapContainer>

			{info && (
				<KennelInfo
					kennelInfo={kennelInfo}
					setInfo={setInfo}
					setKennelInfo={setKennelInfo}
				/>
			)}

			<SearchBar
				kennelList={kennelList}
				setKennelList={setKennelList}
				mainKennList={mainKennList}
			></SearchBar>
		</div>
	) : (
		<Loader />
	);
}

export default Map;
