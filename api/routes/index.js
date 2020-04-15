const express = require('express');
const jwt = require('express-jwt');
const ctrlAuth = require('../controllers/authentication');
const ctrlProfile = require('../controllers/profile');
// const ctrlReference = require('../controllers/reference');

const router = express.Router();

const auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload',
});

// profile
router.get('/profile', auth, ctrlProfile.profileRead);
// router.get('/reference', auth, ctrlReference.getReferences);
// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
