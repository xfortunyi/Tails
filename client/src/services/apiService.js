const BASE_URL = 'http://localhost:3001';

export const getKennels = async () => {
	const res = await fetch(`${BASE_URL}/map`);
	const json = await res.json();
	return json;
};

export const getOneKennel = async (id) => {
	const res = await fetch(`${BASE_URL}/profile/${id}`);
	const json = await res.json(id);
	return json;
};

export const createKennel = async (kennel) => {
	const post = await fetch(`${BASE_URL}/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(kennel),
	});
	const json = await post.json();
	return json;
};

export const login = (kennel) => {
	const kennelLog = fetch(`${BASE_URL}/login`, {
		method: 'POST',
		mode: 'cors',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(kennel),
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));
	return kennelLog;
};

export const logout = async () => {
	const logout = fetch(`${BASE_URL}/logout`, {
		method: 'POST',
		credentials: 'include',
		mode: 'cors',
		headers: { 'Content-Type': 'application/json' },
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));
};

// 		method: 'POST',
// 		credentials: 'include',
// 		mode: 'cors',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify(user),
// 	})
// 		.then((res) => res.json())
// 		.catch((err) => console.log(err));
// };

// const apiService = {};

// apiService.register = (user) => {
// 	return fetch(`${BASE_URL}/register`, {
// 		method: 'POST',
// 		credentials: 'include',
// 		mode: 'cors',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify(user),
// 	})
// 		.then((res) => res.json())
// 		.catch((err) => console.log(err));
// };

// apiService.login = (user) => {
// 	return fetch(`${BASE_URL}/login`, {
// 		method: 'POST',
// 		credentials: 'include',
// 		mode: 'cors',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify(user),
// 	})
// 		.then((res) => res.json())
// 		.catch((err) => console.log(err));
// };

// apiService.profile = () => {
// 	return fetch(`${BASE_URL}/me`, {
// 		method: 'GET',
// 		credentials: 'include',
// 		mode: 'cors',
// 		headers: { 'Content-Type': 'application/json' },
// 	})
// 		.then((res) => res.json())
// 		.catch((err) => console.log(err));
// };

// apiService.logout = () => {
// 	return fetch(`${BASE_URL}/logout`, {
// 		method: 'POST',
// 		credentials: 'include',
// 		mode: 'cors',
// 		headers: { 'Content-Type': 'application/json' },
// 	})
// 		.then((res) => res.json())
// 		.catch((err) => console.log(err));
// };

// export default apiService;
