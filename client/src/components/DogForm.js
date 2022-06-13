import React from 'react';
import { createDog } from './../services/apiService';
import { useParams } from 'react-router-dom';

function DogForm({ setKennelData }) {
	const asyncNewDog = async (newDog) => {
		return await createDog(newDog);
	};
	const { id } = useParams();

	function handleSubmit(e) {
		e.preventDefault();
		const newDog = {
			name: e.target.name.value,
			breed: e.target.breed.value,
			size: e.target.size.value,
			age: e.target.age.value,
			description: e.target.description.value,
			kennelId: id,
		};
		asyncNewDog(newDog);
		setKennelData((prev) => {
			let newState = [...prev.Dogs, newDog];
			return { ...prev, Dogs: newState };
		});
		e.target.reset();
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			Add a new Dog
			<div className="containerForm">
				<label className="labels">Name</label>
				<input
					className="inputs"
					type="text"
					name="name"
					placeholder="Insert a name..."
				></input>
				<label className="labels">Breed</label>
				<input
					className="inputs"
					type="text"
					name="breed"
					placeholder="Insert a breed.."
				></input>
				<label className="labels">Size</label>
				<select className="inputs" type="text" name="size">
					<option>Small</option>
					<option>Medium</option>
					<option>Large</option>
				</select>
				<label className="labels">Age</label>
				<select className="inputs" type="text" name="age">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
					<option>11</option>
					<option>12</option>
					<option>13</option>
					<option>14</option>
					<option>15</option>
				</select>
				<label className="labels">Description</label>
				<input
					className="inputs"
					type="text"
					name="description"
					placeholder="Insert a description..."
				></input>
			</div>
			<button className="btnNewDog" type="submit">
				Submit
			</button>
		</form>
	);
}

export default DogForm;
