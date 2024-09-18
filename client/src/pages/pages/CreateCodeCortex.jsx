import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function CreateCodeCortex() {
  // State to hold the form data
  const [data, setData] = useState({
    ParticipantName: '',
    RegNo: '',
    VITEmail: '',
    TeamName: '',
    TeamMembers: '',
  });

  // State to hold the generated team ID
  const [uniqueTeamId, setUniqueTeamId] = useState('');

  // Function to generate a random 7-digit unique ID
  const generateUniqueTeamId = () => {
    let id = '';
    for (let i = 0; i < 7; i++) {
      id += Math.floor(Math.random() * 10); // Append a random digit
    }
    return id;
  };

  // Function to handle form submission
  const createTeam = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const { ParticipantName, RegNo, VITEmail, TeamName, TeamMembers } = data;

    // Basic validation
    if (!ParticipantName || !RegNo || !VITEmail || !TeamName || !TeamMembers) {
      toast.error('Please fill all the fields.');
      return;
    }

    if (RegNo.length !== 9) {
      toast.error('Registration number must be exactly 9 characters long.');
      return;
    }

    if (TeamMembers < 2 || TeamMembers > 4) {
      toast.error('Number of team members must be between 2 and 4.');
      return;
    }

    try {
      // Send a POST request to create a new team using the generated team ID
      const response = await axios.post('http://localhost:8000/createCortex', {
        ParticipantName,
        VITEmail,
        RegNo,
        TeamName,
        TeamMembers,
        teamId: uniqueTeamId // Use the generated team ID
      });

      console.log('Team created successfully:', response.data);

      // Display a success message
      toast.success('Team created successfully!');

      // Clear the form fields after successful submission
      setData({
        ParticipantName: '',
        RegNo: '',
        VITEmail: '',
        TeamName: '',
        TeamMembers: '',
      });

      // Optionally, clear the team ID
      setUniqueTeamId('');
    } catch (error) {
      console.error('Error creating team:', error.response?.data || error.message);
      toast.error(error.response?.data?.error || 'An error occurred while creating the team.');
    }
  };

  // Generate a unique team ID when the component mounts
  useEffect(() => {
    setUniqueTeamId(generateUniqueTeamId());
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}><b>CREATE TEAM</b></h1>

      {uniqueTeamId && (
        <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
          <strong>Unique Team ID:</strong> {uniqueTeamId}
        </div>
      )}

      <form onSubmit={createTeam} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <label style={{ fontWeight: 'bold' }}>Participant Name</label>
        <input
          type="text"
          placeholder="Enter participant name"
          value={data.ParticipantName}
          onChange={(e) => setData({ ...data, ParticipantName: e.target.value })}
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />

        <label style={{ fontWeight: 'bold' }}>Reg No</label>
        <input
          type="text"
          placeholder="Enter registration number"
          value={data.RegNo}
          onChange={(e) => setData({ ...data, RegNo: e.target.value })}
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />

        <label style={{ fontWeight: 'bold' }}>VIT Email-id</label>
        <input
          type="email"
          placeholder="Enter VIT email"
          value={data.VITEmail}
          onChange={(e) => setData({ ...data, VITEmail: e.target.value })}
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />

        <label style={{ fontWeight: 'bold' }}>Team Name</label>
        <input
          type="text"
          placeholder="Enter team name"
          value={data.TeamName}
          onChange={(e) => setData({ ...data, TeamName: e.target.value })}
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />

        <label style={{ fontWeight: 'bold' }}>No of Team Members</label>
        <input
          type="number"
          placeholder="Enter number of team members"
          value={data.TeamMembers}
          onChange={(e) => setData({ ...data, TeamMembers: e.target.value })}
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />

        <button
          type="submit"
          style={{
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Create Team
        </button>
      </form>
    </div>
  );
}
