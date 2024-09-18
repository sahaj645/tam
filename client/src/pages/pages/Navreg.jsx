import React from 'react';
import { Link } from 'react-router-dom';

export default function Navreg() {
  return (
    <div>
      <h1>Reg</h1>
      <Link to="/LSurvivalShowdown">
        <button>Survival Showdown</button>
      </Link>
      {/* Link to Data Alchemy external site */}
      <a href="https://gravitas.vit.ac.in/events/e1a52cc1-47eb-438a-9035-6269eb353d0f" target="_blank" rel="noopener noreferrer">
        <button>Data Alchemy</button>
      </a>
      <Link to="/LCodeCortex">
        <button>Code Cortex</button>
      </Link>
    </div>
  );
}
