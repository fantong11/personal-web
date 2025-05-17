import React from 'react';
import Section from '../Section';

interface ContactProps {
  contact: {
    github: string;
    email: string;
    phone: string;
  };
}

const Contact: React.FC<ContactProps> = ({ contact }) => (
  <Section id="contact" title="Contact">
    <div className="contact-list">
      <div>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></div>
      <div>Phone: {contact.phone}</div>
      <div>GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer">fantong11</a></div>
    </div>
  </Section>
);

export default Contact;
