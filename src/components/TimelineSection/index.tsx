import React from 'react';
import Timeline from '../EduTimeline';
import { TimelineItem } from '../../types/timeline';

interface TimelineSectionProps {
  items: TimelineItem[];
  contact: {
    github: string;
    email: string;
    phone: string;
  };
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ items, contact }) => (
  <div className="intro-info">
    <div className="intro-edu-timeline">
      <Timeline items={items} />
    </div>
    <div className="intro-contact">
      <div><a href={contact.github} target="_blank" rel="noopener noreferrer">github.com/fantong11</a></div>
      <div>{contact.email}</div>
      <div>{contact.phone}</div>
    </div>
  </div>
);

export default TimelineSection;
