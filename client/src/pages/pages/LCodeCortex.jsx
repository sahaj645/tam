import React from 'react';
import { Link } from 'react-router-dom';

// Landing page for CodeCortex
export default function LCodeCortex() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2><b>Landing Page</b></h2>
      <div style={{ marginTop: '20px' }}>
        <Link to="/CreateCodeCortex">
          <button
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              marginRight: '20px',
              cursor: 'pointer',
            }}
          >
            CREATE TEAM
          </button>
        </Link>
        <Link to="/JoinCodeCortex">
          <button
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              cursor: 'pointer',
            }}
          >
            JOIN TEAM
          </button>
        </Link>
      </div>
    </div>
  );
}
