const { Router } = require('express')
const uController = require('../views/userController')

const router = Router()

router.post('/signup',uController.signup_post)
router.post('/login',uController.login_post)
router.get('/logout', uController.logout_get);
router.get('/about', uController.about);

module.exports = router;