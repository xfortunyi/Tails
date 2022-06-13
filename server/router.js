const express = require('express');
const authMiddleware = require('./middlewares/auth');
const router = express.Router();
// const userController = require('./controllers/user');
const kennelController = require('./controllers/kennel');
const dogController = require('./controllers/dog');

router.post('/login', kennelController.login);
router.post('/logout', authMiddleware, kennelController.logout);
// router.get('/me', authMiddleware, userController.profile);
router.get('/map', kennelController.getKennels);
router.get('/alldogs', kennelController.getKennelsAndDogs);
router.post('/register', kennelController.createKennel);
router.post('/dogs', dogController.createDog);
// router.delete('/deleteDogs/:id', dogController.deleteDog);

module.exports = router;
