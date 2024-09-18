import React, { useState } from 'react';

export default function Register() {
  const [data, setData] = useState({
    Participantname: '',
    Regno: '',
    VITEmail: '',
    TeamName: '',
    TeamMembers: '',
  });

  const registerUser = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Participant Name</label>
        <input
          type="text"
          placeholder="Enter participant name"
          value={data.Participantname}
          onChange={(e) =>
            setData({ ...data, Participantname: e.target.value })
          }
        />

        <label>Reg No</label>
        <input
          type="text"
          placeholder="Enter registration number"
          value={data.Regno}
          onChange={(e) => setData({ ...data, Regno: e.target.value })}
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
