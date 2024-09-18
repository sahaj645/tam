const express= require('express');
const router =express.Router();
const cors=require('cors');
const { test,survival }= require('../controllers/authController')


//middleware
router.use(
  cors ({
    credentials:true,
    origin: 'http://localhost:5173'
    })
)
router.get('/',test)
router.post('/SurvivalShowdown',survival)
module.exports= router