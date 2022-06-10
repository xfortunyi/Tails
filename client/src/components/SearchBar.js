import React from 'react';
import { useState } from 'react';

function SearchBar({ kennelList, setKennelList }) {
	const [searchbar, setSearchBar] = useState('');
	const [kenArr, setKenArr] = useState([]);

	// console.log(kennelList);
	// const [filter, setFilter] = useState(kennelInfo);

	const handleChange = (value) => {
		setSearchBar(value);
		// console.log(
		// 	kennelList.map((e) => {
		// 		return e.Dogs.filter((e) => {
		// 			return e.breed === value;
		// 		});
		// 	})
		// );
	};

	const SubmitForm = () => {
		// console.log('hello');
		setKennelList((prev) => {
			// let kenArr = [];
			// console.log(prev);
			prev.map((e) => {
				// console.log(e);
				return e.Dogs.filter((a) => {
					if (a.breed.toLowerCase() === searchbar.toLowerCase()) setKenArr(e);
				});
			});
			console.log(kenArr);
			setKenArr(kenArr);
			return kenArr;

			// return prev.map((e) => {

			// 	e.Dogs.filter((e)=>{
			// 	return e.id === kennel[0][0].KennelId;
			// 	})
			// });
		});
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
		</div>
	);
}

export default SearchBar;
