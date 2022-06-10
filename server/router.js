const express = require('express');
const authMiddleware = require('./middlewares/auth');
const router = express.Router();
// const userController = require('./controllers/user');
const kennelController = require('./controllers/kennel');
const dogController = require('./controllers/dog');

// router.post('/register', userController.create);
// router.post('/login', userController.login);
// router.get('/me', authMiddleware, userController.profile);
router.get('/map', kennelController.getKennels);
router.get('/alldogs', kennelController.getKennelsAndDogs);
// router.post('/logout', authMiddleware, userController.logout);
router.post('/register', kennelController.createKennel);
router.post('/dogs', dogController.createDog);
// router.post('/dogsbybreed', kennelController.findDogByBreed);

module.exports = router;
