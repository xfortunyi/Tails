import React from 'react';
import { useState } from 'react';
import resetIcon1 from './../assets/resetIcon1.png';
import searchIcon from './../assets/searchIcon.png';

function SearchBar({ kennelList, setKennelList, mainKennList }) {
	const [searchbar, setSearchBar] = useState('');
	const [kenArr, setKenArr] = useState([]);

	const handleChange = (value) => {
		setSearchBar(value);
		console.log(
			kennelList.map((e) => {
				return e.Dogs.filter((e) => {
					return e.breed === value;
				});
			})
		);
	};

	const SubmitForm = () => {
		console.log('hello');
		setKennelList((prev) => {
			let kenArr = [];
			console.log(prev);
			mainKennList.map((e) => {
				console.log(e);
				return e.Dogs.filter((a) => {
					if (a.breed.toLowerCase() === searchbar.toLowerCase()) kenArr.push(e);
				});
			});
			setKenArr(kenArr);
			return kenArr;
		});
	};

	const Reset = () => {
		setKennelList(mainKennList);
	};

	return (
		<div className="searchBar">
			<div className="searchCont">
				<input
					className="inputs"
					type="text"
					placeholder="Filter by breed..."
					onChange={(e) => handleChange(e.target.value)}
				/>
				<div className="searchBtn" onClick={() => SubmitForm()}>
					<img src={searchIcon} />
				</div>
			</div>

			<div className="resetBtn" onClick={() => Reset()}>
				<img src={resetIcon1} />
			</div>
		</div>
	);
}

export default SearchBar;
