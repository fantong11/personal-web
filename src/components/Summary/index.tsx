import React from 'react';

interface SummaryProps {
  summary: string[];
}

const Summary: React.FC<SummaryProps> = ({ summary }) => (
  <div className="intro-summary">
    {summary.map((s, i) => <p key={i}>{s}</p>)}
  </div>
);

export default Summary;
