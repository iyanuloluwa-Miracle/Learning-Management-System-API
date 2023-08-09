const router = require('express').Router();
const authController = require('../controllers/authController')
const lmsController = require('../controllers/lmsController')
const { authenticateToken }  = require('../middlewares/authMiddleware')


router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

//Routes for the authentication
router.post('/signup', authController.Register);
router.post('/login', authController.Login);

//Route for the Learning Platform
router.post('/courses',  authenticateToken, lmsController.Course)
router.post('/enroll',  authenticateToken, lmsController.Enrollment)
router.post('/reg-student',authenticateToken, lmsController.RegisterStudent)


module.exports = router;
