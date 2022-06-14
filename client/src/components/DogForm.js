import React, { useEffect } from 'react';
import { useState } from 'react';
import { createDog } from './../services/apiService';
import { useParams } from 'react-router-dom';
import { storage } from './../services/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

function DogForm({ setKennelData }) {
	const [imageUpload, setImageUpload] = useState(null);

	const uploadImage = () => {
		if (imageUpload == null) return;
		const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
		uploadBytes(imageRef, imageUpload).then(() => {
			alert('Image uploaded');
		});
	};

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
			// image: state
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
				<label className="labels">Add a picture</label>
				<input
					className="inputs2"
					type="file"
					name="picture"
					onChange={(event) => {
						setImageUpload(event.target.files[0]);
					}}
				/>
				{/* <button onClick={uploadImage}>Upload image</button> */}
			</div>
			<button className="btnNewDog" type="submit" onClick={uploadImage}>
				Submit
			</button>
		</form>
	);
}

export default DogForm;
