import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './components/Map';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/map" element={<Map />} />
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	);
}

export default App;
