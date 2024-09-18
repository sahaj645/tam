const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the team and participant management for CodeCortex
const codeCortexSchema = new Schema({
  teamId: {
    type: String,
    required: true,
    unique: true, // Ensure that the team ID is unique
  },
  TeamName: {
    type: String,
    required: true,
  },
  TeamMembers: {
    type: [{ 
      ParticipantName: { type: String, required: true },
      RegNo: { type: String, required: true },
      VITEmail: { type: String, required: true }
    }],
    validate: [teamMembersLimit, 'Team cannot have more than 4 members.'], // Custom validator for max team members
  }
});

// Custom validator to ensure team members do not exceed 4
function teamMembersLimit(val) {
  return val.length <= 4;
}

// Compile the schema into a model
const CodeCortexModel = mongoose.model('CodeCortex', codeCortexSchema);

module.exports = CodeCortexModel;
