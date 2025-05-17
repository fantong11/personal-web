import React from 'react';
import SkillBar from '../SkillBar';

interface SkillsProps {
  skills: { label: string; percent: number }[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <div className="intro-skills">
    <h3>Skills</h3>
    <div className="skills-list">
      {skills.map(skill => (
        <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
      ))}
    </div>
  </div>
);

export default Skills;
