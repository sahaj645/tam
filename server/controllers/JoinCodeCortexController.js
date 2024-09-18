const CodeCortexModel = require('../models/CodeCortex.js'); // Ensure the correct model file is used

// Function to handle team joining for CodeCortex
const joinCodeCortex = async (req, res) => {
    try {
        const { ParticipantName, RegNo, VITEmail, teamId } = req.body;

        // Validate input
        if (!ParticipantName || !RegNo || !VITEmail || !teamId) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (RegNo.length !== 9) {
            return res.status(400).json({ error: "Registration number must be exactly 9 characters long" });
        }

        // Check if the team exists
        const team = await CodeCortexModel.findOne({ teamId }).exec();
        if (!team) {
            return res.status(400).json({ error: "Invalid team ID" });
        }

        // Check if the team is full
        if (team.TeamMembers.length >= 4) {
            return res.status(400).json({ error: "Team is already full" });
        }

        // Check if the participant is already registered
        const participantExists = team.TeamMembers.some(member => member.VITEmail === VITEmail);
        if (participantExists) {
            return res.status(400).json({ error: "Participant is already registered in this team" });
        }

        // Add new participant to the team
        team.TeamMembers.push({
            ParticipantName,
            RegNo,
            VITEmail
        });

        // Save the updated team
        await team.save();

        // Send success response
        return res.status(200).json({
            success: true,
            message: 'Joined team successfully',
            data: team
        });

    } catch (error) {
        console.error('Error in joinCodeCortex function:', error);
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

module.exports = {
    joinCodeCortex
};
