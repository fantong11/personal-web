export type TimelineItem =
  | { type: "education"; degree: string; school: string; year: string }
  | {
      type: "experience";
      title: string;
      company: string;
      year: string;
      tech: string;
      details: string[];
    };
