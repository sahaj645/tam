const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, survival } = require('../controllers/authController');
const { joinTeam } = require('../controllers/jointeamController'); // Correct path to the controller
const {CreateC}=require('../controllers/CreateCodeCortex');
const{joinCodeCortex}=require('../controllers/JoinCodeCortexController.js');
// Middleware setup
router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

// Route for testing the server
router.get('/', test);

// Route for handling Survival Showdown team creation
router.post('/survival', survival); // For creating a new team
//router.post('/CreatCodeCortex',createCodeCortex);
// Route for handling joining a team
router.post('/createCortex',CreateC);
router.post('/joinTeam', joinTeam); // For joining a in survival showdown 
router.post('/joinCortex',joinCodeCortex);
module.exports = router;
