const express = require('express');
const auth = require('../middlewares/auth');
const {
	postSignUpAuthenticationHandler,
	postSignInAuthenticationHandler,
	deleteSignOutAuthenticationHandler,
} = require('../controllers/authentication-controller');

const router = express.Router();

router.route('/sign-in').post(postSignInAuthenticationHandler);
router.route('/sign-up').post(postSignUpAuthenticationHandler);
router.route('/sign-out').delete(auth, deleteSignOutAuthenticationHandler);

module.exports = router;
