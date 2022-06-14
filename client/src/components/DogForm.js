import React, { useEffect } from 'react';
import { useState } from 'react';
import { createDog } from './../services/apiService';
import { useParams } from 'react-router-dom';
import { storage } from './../services/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

function DogForm({ setKennelData }) {
	const [imageUpload, setImageUpload] = useState(null);
	const [url, setUrl] = useState(null);
	const [name, setName] = useState('');
	const [breed, setBreed] = useState('');
	const [size, setSize] = useState('');
	const [age, setAge] = useState('');
	const [description, setDescription] = useState('');

	const uploadImage = (e) => {
		console.log('entering ifiajf');
		if (imageUpload == null) return;
		const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
		console.log(imageRef);
		uploadBytes(imageRef, imageUpload)
			.then((snapshot) => {
				snapshot.ref.toString();
				console.log(snapshot.ref.toString());
				console.log('here', snapshot);
				alert('Image uploaded');
			})
			.then(() => {
				getDownloadURL(imageRef).then((url) => {
					setUrl(url);
				});
			});
	};

	const asyncNewDog = async (newDog) => {
		const dog = await createDog(newDog);
		console.log('promise', dog);
		return dog;
		// return await createDog(newDog);
	};
	const { id } = useParams();

	async function handleSubmit(e) {
		console.log('submiting');

		const newDog = {
			name: name,
			breed: breed,
			size: size,
			age: age,
			description: description,
			image: url,
			kennelId: id,
		};
		console.log(newDog);
		const newDogWithId = await asyncNewDog(newDog);
		setKennelData((prev) => {
			let newState = [...prev.Dogs, newDogWithId];
			console.log('prova', newState);
			return { ...prev, Dogs: newState };
		});
		// e.target.reset();
	}

	return (
		<div className="form">
			Add a new Dog
			<div className="containerForm">
				<label className="labels">Name</label>
				<input
					onChange={(e) => {
						setName(e.target.value);
					}}
					className="inputs"
					type="text"
					name="name"
					placeholder="Insert a name..."
				></input>
				<label className="labels">Breed</label>
				<input
					onChange={(e) => {
						setBreed(e.target.value);
					}}
					className="inputs"
					type="text"
					name="breed"
					placeholder="Insert a breed.."
				></input>
				<label className="labels">Size</label>
				<select
					className="inputs"
					type="text"
					name="size"
					onChange={(e) => {
						setSize(e.target.value);
					}}
				>
					<option>Small</option>
					<option>Medium</option>
					<option>Large</option>
				</select>
				<label className="labels">Age</label>
				<select
					className="inputs"
					type="text"
					name="age"
					onChange={(e) => {
						setAge(e.target.value);
					}}
				>
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
					onChange={(e) => {
						setDescription(e.target.value);
					}}
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
				<button
					onClick={() => {
						uploadImage();
					}}
					type="button"
				>
					Upload image
				</button>
			</div>
			<button
				className="btnNewDog"
				type="submit"
				onClick={() => {
					handleSubmit();
				}}
			>
				Submit
			</button>
		</div>
	);
}

export default DogForm;
