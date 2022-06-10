import React from 'react';
import { useState } from 'react';

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
		<div>
			<input
				type="text"
				placeholder="Filter by breed, size or age"
				onChange={(e) => handleChange(e.target.value)}
			/>
			<button onClick={() => SubmitForm()} className="btnSearch">
				Search
			</button>
			<button onClick={() => Reset()} className="btnReset">
				Reset
			</button>
		</div>
	);
}

export default SearchBar;
