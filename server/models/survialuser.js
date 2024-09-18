const mongoose = require('mongoose');
const { Schema } = mongoose;

const survivalSchema = new Schema({
  ParticipantName: {
    type: String,
    required: true,
  },
  RegNo: {
    type: String,
    required: true,
    unique: true,
  },
  VITEmail: {
    type: String,
    required: true,
    unique: true,
  },
  TeamName: {
    type: String,
    required: true,
  },
  TeamMembers: {
    type: Number,
    required: true,
  
  },
});

const SurvivalModel = mongoose.model('survival', survivalSchema);
module.exports = SurvivalModel;
