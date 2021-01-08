const { Router } = require('express')
const uController = require('../views/userController')
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

const router = Router()

router.post('/signup',uController.signup_post)
router.post('/login',uController.login_post)
router.get('/logout', uController.logout_get);
router.get('/about', uController.about);
router.get('/account', uController.account);
router.get('/products',requireAuth, uController.product);
router.get('/projects',requireAuth, uController.project);

module.exports = router;