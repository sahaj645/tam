const CodeCortexModel = require('../models/CodeCortex.js'); // Ensure the correct model file is used

// Function to test server
const test = (req, res) => {
    res.json('test is working');
};

// Function to handle team creation for CodeCortex
const CreateC = async (req, res) => {
    try {
        const { ParticipantName, RegNo, VITEmail, TeamName } = req.body;

        // Validate input
        if (!ParticipantName || !RegNo || !VITEmail || !TeamName) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (RegNo.length !== 9) {
            return res.status(400).json({ error: "Registration number must be exactly 9 characters long" });
        }

        // Check if TeamName is already taken (case-insensitive)
        const teamNameExists = await CodeCortexModel.findOne({ TeamName: { $regex: new RegExp(`^${TeamName}$`, 'i') } }).exec();
        if (teamNameExists) {
            return res.status(400).json({ error: "Team name is already taken" });
        }

        // Generate a unique team ID
        const generatedTeamId = await generateUniqueTeamId();

        // Create new team entry
        const newTeam = new CodeCortexModel({
            teamId: generatedTeamId,
            TeamName,
            TeamMembers: [{
                ParticipantName,
                RegNo,
                VITEmail
            }]
        });

        // Save the new team to the database
        const savedTeam = await newTeam.save();

        // Send success response
        return res.status(201).json({
            success: true,
            message: 'Team created successfully',
            data: savedTeam,
            teamId: generatedTeamId
        });

    } catch (error) {
        console.error('Error in CreateC function:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: error.errors
            });
        }
        res.status(500).json({
            success: false,
            message: 'An error occurred while processing the request',
            error: error.message
        });
    }
};

// Function to generate a unique 7-digit team ID
const generateUniqueTeamId = async () => {
    let teamId;
    let isUnique = false;

    while (!isUnique) {
        teamId = (Math.floor(1000000 + Math.random() * 9000000)).toString();
        const existingTeam = await CodeCortexModel.findOne({ teamId }).exec();
        if (!existingTeam) {
            isUnique = true;
        }
    }

    return teamId;
};

module.exports = {
    test,
    CreateC
};
