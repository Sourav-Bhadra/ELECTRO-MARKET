const { Router } = require('express')
const uController = require('../controllers/userController')
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

const router = Router()

router.post('/signup',uController.signup_post)
router.post('/login',uController.login_post)
router.get('/logout', uController.logout_get);
router.get('/about', uController.about);
router.get('/account', uController.account);
router.get('/products',requireAuth, uController.product);
router.get('/projects',requireAuth, uController.project);
router.get('/cart',requireAuth, uController.cart);
router.get('/products-detail',requireAuth, uController.detail);
router.get('/products-detail-1',requireAuth, uController.detail1);
router.get('/products-detail-2',requireAuth, uController.detail2);
router.get('/products-detail-3',requireAuth, uController.detail3);
router.get('/products-detail-4',requireAuth, uController.detail4);
router.get('/project1',requireAuth, uController.projectone);
router.get('/project2',requireAuth, uController.projecttwo);
router.get('/customproject',requireAuth, uController.customproject);
router.post('/customprojectreq',requireAuth, uController.customprojectreq);

module.exports = router;