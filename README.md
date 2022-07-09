# Tails
Welcome to Tails. A web application to adopt dogs according to your location that you can filter by age, size or breed.


# Tech stack
The app runs on React on the front-end where is used Leaflet library for the map. 
An Express Node server is running the back-end, connected to a PostgreSQL database on Sequelize ORM.
Also it uses Firebase to upload the pictures.

<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a>
 <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="36" height="36" alt="Firebase" /></a>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>


# How to use it?
Fork this repo and clone it on your local machine. Once in the folder, run npm install on the root folder, and also on /server and /client.
Make sure Nodemon is installed globaly, and run nodemon index.js on /server, to initialize the server.
To initialize the client, run npm start from the /client folder.

You will need to create your own database and hook it. Be sure to use a .env file to write your private database information.
Once that is done, you are ready to populate the database. Register a new user through the app interface. You will need to provide the required files. All info can be, of course, fake.
Once this is done, you should be able to see an empty kennel profile.

If you enter as a user, you will find your current location in the map with the kennels that are closest to you.

If you want to upload dogs photos, you will need to create a Firebase account and hook the necessary information on your .env file.


# What can be improved?
A lot of things yet! I would like to continue implementing features, such as a good user integration, and a communication channel between the user and the kennel.

As well as making a general review of the CSS and adapting it to a new, more modern and responsive style.

Also refactor the code to Typescript and finally deploy the app.

# Author
<a href=www.github/xfortunyi.com> Xavi Fortuny </a>
