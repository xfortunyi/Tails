const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');
const sequelize = require('./models/db');
const router = require('./router');
const session = require('express-session');

const SECRET = process.env.SECRET || 'this is not very secure';

const corsConfig = {
	origin: 'http://localhost:3000',
	credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());

app.use(
	session({
		// the store property, if not specified, defaults to the in-memory store
		name: 'sid',
		saveUninitialized: false,
		resave: false,
		secret: SECRET,
		cookie: {
			maxAge: 1000 * 60 * 60, // 1hr
			sameSite: true,
			httpOnly: false,
			// we would want to set secure=true in a production environment
			secure: false,
		},
	})
);

app.use(router);

(async () => {
	await sequelize.sync();
	app.listen(PORT, () => {
		console.log(` 🚀 Server up and running on http://localhost:${PORT} 🚀`);
	});
})();
