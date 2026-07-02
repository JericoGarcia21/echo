export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  type: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  featured?: boolean;
};

export const profile = {
  name: 'Jerico B. Garcia',
  handle: 'echo.dev',
  title: 'Software Engineer',
  subtitle: 'Web and Mobile Developer | IT Instructor',
  location: 'Santa Barbara, Pangasinan',
  image: '/hero-image.jpg',
  summary:
    'BSIT graduate majoring in Web and Mobile Technologies, currently pursuing a Master in Information Technology at Universidad de Dagupan. I build practical web, mobile, AI-assisted, and computer-vision applications with a focus on useful interfaces and maintainable systems.',
  availability: 'Available for web and mobile projects',
  email: 'garciajerico217@gmail.com',
  links: {
    github: 'https://github.com/JericoGarcia21',
    linkedin: 'https://www.linkedin.com/in/jerico-garcia-810b82354/',
    email: 'mailto:garciajerico217@gmail.com',
    v1: '/v1',
  },
};

export const skills = [
  {
    group: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'PWA'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'PHP', 'Laravel', 'Python Flask', 'REST APIs', 'API Integration'],
  },
  {
    group: 'Mobile',
    items: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    group: 'Database and Tools',
    items: ['MySQL', 'MongoDB', 'Postman', 'Docker', 'Figma', 'WordPress', 'Git'],
  },
  {
    group: 'Technical Support',
    items: ['Computer Troubleshooting', 'Hardware Maintenance', 'Windows and Linux Setup', 'Productivity Suites'],
  },
];

export const projects: Project[] = [
  {
    title: 'AI-Powered Essay Evaluation and Scoring System',
    type: 'AI Web Application',
    description:
      'A teacher-focused platform for evaluating handwritten and digital essays with automated scoring, feedback workflows, and deployment-ready tooling.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini AI', 'PWA', 'Tailwind CSS', 'Docker'],
    links: [{ label: 'GitHub', url: 'https://github.com/JericoGarcia21/pen2grade' }],
    featured: true,
  },
  {
    title: 'EvalSys',
    type: 'Evaluation Platform',
    description:
      'A MERN application for student project presentation evaluation with structured scoring and streamlined assessment management.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    links: [
      { label: 'GitHub', url: 'https://github.com/JericoGarcia21/evalsys.git' },
      { label: 'Live Demo', url: 'https://evalsys-iota.vercel.app/' },
    ],
    featured: true,
  },
  {
    title: 'Smart Parking Management System',
    type: 'Mobile and Web App',
    description:
      'A parking management system with plate number recognition, Firebase-backed mobile workflows, and computer-vision processing.',
    tech: ['Flutter', 'Firebase', 'Python', 'YOLO', 'Flask', 'Computer Vision'],
    links: [
      { label: 'User Side', url: 'https://github.com/JericoGarcia21/parkwatch_app' },
      { label: 'Admin Side', url: 'https://github.com/JericoGarcia21/parkwatch' },
    ],
    featured: true,
  },
  {
    title: 'jobprep',
    type: 'Ongoing AI Project',
    description:
      'An AI-powered job application and mock interview preparation tool designed to help applicants practice before real interviews.',
    tech: ['AI', 'Interview Prep', 'Web App'],
    links: [],
  },
  {
    title: 'Barangay Document Request System',
    type: 'Web Application',
    description:
      'A document request system for Santa Maria Barangay with customer support chatbot features and administrative workflows.',
    tech: ['PHP', 'HTML', 'CSS', 'MySQL', 'Bootstrap'],
    links: [{ label: 'GitHub', url: 'https://github.com/JericoGarcia21/santamariabrgy_requestdocs' }],
  },
  {
    title: 'Recipe App',
    type: 'Mobile Application',
    description:
      'A Flutter recipe mobile app using Firebase and API integration for recipe browsing and app data workflows.',
    tech: ['Flutter', 'Firebase', 'API Integration'],
    links: [{ label: 'GitHub', url: 'https://github.com/JericoGarcia21/mad_recipeapp' }],
  },
];

export const experience = [
  {
    role: 'IT Instructor',
    company: 'Universidad de Dagupan',
    period: 'July 2025 - Present',
    current: true,
    description:
      'Teaching IT and programming subjects including web development, database systems, programming fundamentals, Linux basics, network scanning concepts, and Apache2 web application deployment.',
    tags: ['Teaching', 'Web Development', 'Database Systems', 'Linux', 'Apache2', 'PHP', 'MySQL'],
  },
];

export const certifications = [
  {
    title: 'Laravel',
    subtitle: 'Ranking in the Top 10%',
    issuer: 'TestDome',
    date: 'May 23, 2024',
    image: '/certifications/laravel.jpg',
  },
  {
    title: 'TOPCIT Certificate',
    subtitle: 'Level 2, Score: 313/1000',
    issuer: 'Institute for Information and Communications Technology Promotion',
    date: 'August 24, 2025',
    image: '/certifications/topcit.jpg',
  },
];
