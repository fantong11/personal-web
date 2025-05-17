import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import TimelineSection from './components/TimelineSection';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/main.scss';
import type { TimelineItem } from './types/timeline';

const timelineItems: TimelineItem[] = [
  {
    type: 'experience',
    title: 'Mask IT Engineer',
    company: 'TSMC',
    year: '2024/11 ~ Present',
    tech: 'Java EE / Perl / OracleDB / Docker / Kubernetes',
    details: [
      'Developed high-concurrency, distributed enterprise backend services to support internal process automation and transaction consistency.',
      'Participated in the cleanroom vacuum automation project, replacing hourly manual operations with robotic automation, significantly improving cleaning efficiency and reducing particle contamination risk.',
      'Collaborated with cross-functional teams to optimize processes, greatly enhancing lot processing efficiency.'
    ]
  },
  {
    type: 'experience',
    title: 'Frontend Engineer Intern',
    company: 'ALUTECH',
    year: '2022/02 ~ 2022/06',
    tech: 'HTML / CSS / JavaScript (JQuery)',
    details: [
      'Developed reusable web components for multiple business clients.',
      'Updated internal systems to optimize user experience and enhance system stability.'
    ]
  },
  {
    type: 'education',
    degree: 'M.S. in Computer Science',
    school: 'National Cheng Kung University',
    year: '2022 - 2024',
  },
  {
    type: 'education',
    degree: 'B.S. in Computer Science',
    school: 'National Taipei University of Technology',
    year: '2018 - 2022',
  },
  {
    type: 'education',
    degree: 'High School',
    school: 'Taiwan School, Ho Chi Minh City',
    year: '2009 - 2018',
  },
];

const skills = [
  { label: 'TypeScript / JavaScript', percent: 90 },
  { label: 'React', percent: 85 },
  { label: 'Java EE', percent: 80 },
  { label: 'Docker / Kubernetes', percent: 75 },
  { label: 'Perl', percent: 70 },
  { label: 'OracleDB / MySQL', percent: 70 },
  { label: 'HTML / CSS / SCSS', percent: 85 },
];

const summary = [
  `I am Kai-Hsiang Fan, holding a Master's degree in Computer Science from National Cheng Kung University. Currently, I am a Software Engineer at TSMC, where I develop and maintain high-concurrency, distributed enterprise applications. My role involves using advanced technologies such as Java EE, Perl, OracleDB, Docker, and Kubernetes. Notably, I contributed to automating cleanroom operations, transitioning hourly manual tasks to automated robotic processes, which reduced particle contamination risk and improved operational efficiency significantly.`,
  `During my graduate studies, my research focused on software testing automation. I developed an extension for Rapi Recorder, automating the conversion of test actions into Playwright scripts, achieving the successful transformation of 96 commands. This reduced script generation time and improved test reliability. Additionally, I spearheaded the refactoring of the Playback module to reduce coupling and enhance code maintainability. Throughout this process, I collaborated extensively with my lab team using Scrum methodologies, covering full-cycle development from coding to continuous integration and deployment.`,
  `As an undergraduate, I gained practical experience as a Frontend Intern at ALUTECH, developing reusable web components that enhanced user experiences and system stability. I also independently created real-time messaging applications and a cinema ticketing system, showcasing my capability to integrate frontend and backend technologies effectively.`,
  `I am passionate about building robust software solutions and solving complex problems. I thrive in team environments that emphasize clear communication and collaborative innovation. Moving forward, I aim to deepen my expertise in distributed system architectures and software automation, continually contributing to impactful technology solutions.`
];

const contact = {
  github: 'https://github.com/fantong11',
  email: 'fankaihsiang11@gmail.com',
  phone: '+886 900 752 983',
};

const projects = [
  {
    title: 'SideeX Recorder (Rapi Recorder)',
    year: '2022 - 2024',
    tech: 'TypeScript (React)',
    details: [
      'Contributed to new feature development and maintenance, including refactoring the Playback module to reduce system coupling and improve maintainability.',
      'Developed an extension to automatically convert 96 test commands into Playwright scripts, enhancing test automation flexibility.'
    ]
  },
  {
    title: 'ChatRoom',
    year: '2022',
    tech: 'C# / WinForm / TypeScript (Express) / WebSocket',
    details: [
      'Implemented an anonymous real-time messaging application.'
    ]
  },
  {
    title: 'Movie Ticketing System',
    year: '2020',
    tech: 'JavaScript (Vue.js) / Express / MySql',
    details: [
      'Developed a movie ticket booking platform, responsible for UI design, movie list display, online seat selection, and order record features.'
    ]
  },
  {
    title: `Master's Thesis: Research on Converting Command-Target-Value Scripts to Playwright Code`,
    year: '2022 - 2024',
    tech: 'TypeScript (React)',
    details: [
      'Developed an extension for Rapi Recorder to automatically convert recorded test actions into Playwright scripts, successfully transforming 96 commands and significantly improving test automation efficiency.'
    ]
  }
];

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <main>
        <Section id="intro" title="Kai-Hsiang Fan">
          <TimelineSection items={timelineItems} contact={contact} />
          <Summary summary={summary} />
          <Skills skills={skills} />
        </Section>
        <Projects projects={projects} />
        <Contact contact={contact} />
      </main>
    </div>
  );
}

export default App;
