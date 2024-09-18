import React, { useState } from 'react';
import axios from 'axios';



export default function SurvivalShowdown() {
  const [data, setData] = useState({
    ParticipantName: '',
    RegNo: '',
    VITEmail: '',
    TeamName: '',
    TeamMembers: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { ParticipantName, VITEmail, RegNo, TeamName, TeamMembers } = data;
    try {
      const response = await axios.post('/survival', { ParticipantName, VITEmail, RegNo, TeamName, TeamMembers });
      console.log('Registration successful:', response.data);
      // Optionally perform further actions here, such as redirecting or updating state
    } catch (error) {
      console.error('Error registering participant:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Participant Name</label>
        <input
          type="text"
          placeholder="Enter participant name"
          value={data.ParticipantName}
          onChange={(e) =>
            setData({ ...data, ParticipantName: e.target.value })
          }
        />

        <label>Reg No</label>
        <input
          type="text"
          placeholder="Enter registration number"
          value={data.RegNo}
          onChange={(e) => setData({ ...data, RegNo: e.target.value })}
        />

        <label>VIT Email-id</label>
        <input
          type="email"
          placeholder="Enter VIT email"
          value={data.VITEmail}
          onChange={(e) => setData({ ...data, VITEmail: e.target.value })}
        />

        <label>Team Name</label>
        <input
          type="text"
          placeholder="Enter team name"
          value={data.TeamName}
          onChange={(e) => setData({ ...data, TeamName: e.target.value })}
        />

        <label>No of Team Members</label>
        <input
          type="number"
          placeholder="Enter number of team members"
          value={data.TeamMembers}
          onChange={(e) => setData({ ...data, TeamMembers: e.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
