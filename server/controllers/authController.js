const SurvivalModel = require('../models/survialuser');
const test =(req,res)=>{
    res.json('test is working')
}

const survival = async (req, res) => {
    try {
      const { ParticipantName, RegNo, VITEmail, TeamName, TeamMembers } = req.body;
  
      // Check if ParticipantName was entered
      if (!ParticipantName) {
        return res.status(400).json({ error: "Name is required" });
      }
  
      // Check if RegNo has exactly 8 characters
      if (RegNo.length !== 8) {
        return res.status(400).json({ error: "Registration number must be exactly 8 characters long" });
      }
  
      // Check if VITEmail is already registered
      const emailExists = await SurvivalModel.findOne({ VITEmail });
      if (emailExists) {
        return res.status(400).json({ error: "Email is already registered" });
      }
  
      // Check if TeamName is already taken
      const teamNameExists = await SurvivalModel.findOne({ TeamName });
      if (teamNameExists) {
        return res.status(400).json({ error: "Team name is already taken" });
      }
  
      // Check if TeamMembers is between 2 and 4 (inclusive)
      if (TeamMembers < 2 || TeamMembers > 4) {
        return res.status(400).json({ error: "Team members must be between 2 and 4 (inclusive)" });
      }
  
      // Create a new participant using the validated data
      const newParticipant = new SurvivalModel({
        ParticipantName,
        RegNo,
        VITEmail,
        TeamName,
        TeamMembers
      });
  
      // Save the participant to the database
      const savedParticipant = await newParticipant.save();
  
      // Send a response with the saved participant data
      res.status(201).json({
        success: true,
        message: 'Participant registered successfully',
        data: savedParticipant
      });
  
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while registering the participant',
        error: error.message
      });
    }
  };
  

module.exports={
    test,survival
}