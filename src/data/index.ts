// Export all data modules
export * from './personal';
export * from './research';
export * from './projects';
export * from './skills';
export * from './awards';
export * from './training';
export * from './courses';
export * from './education';
export * from './references';

// Navigation structure
export interface NavItem {
  name: string;
  href: string;
  description?: string;
}

export const navigation: NavItem[] = [
  { name: 'Home', href: '/', description: 'Welcome and overview' },
  { name: 'About', href: '/about', description: 'Biography and background' },
  { name: 'Research', href: '/research', description: 'Research interests and thesis' },
  { name: 'Projects', href: '/projects', description: 'Academic and industry projects' },
  { name: 'Awards', href: '/awards', description: 'Honors and achievements' },
  { name: 'Skills', href: '/skills', description: 'Technical skills and expertise' },
  { name: 'Training', href: '/training', description: 'Industrial training experience' },
  { name: 'Courses', href: '/courses', description: 'Academic coursework' },
  { name: 'Contact', href: '/contact', description: 'Get in touch' },
  { name: 'CV', href: '/cv', description: 'Download curriculum vitae' }
];

// Site metadata
export const siteConfig = {
  name: 'ASNAFUL HUDA ASNAF',
  title: 'Water Resources Engineering Portfolio',
  description: 'Personal portfolio of ASNAFUL HUDA ASNAF - Water Resources Engineer specializing in hydraulic modeling, flood risk assessment, and sustainable water management solutions.',
  url: 'https://asnaf-portfolio.vercel.app', // Update with actual domain
  ogImage: '/og-image.jpg',
  keywords: [
    'Water Resources Engineering',
    'Hydraulic Modeling',
    'Flood Risk Assessment',
    'HEC-RAS',
    'HEC-HMS',
    'GIS',
    'Environmental Engineering',
    'CUET',
    'Bangladesh',
    'Civil Engineering'
  ],
  author: {
    name: 'ASNAFUL HUDA ASNAF',
    email: 'asnafulhudasnaf@gmail.com',
    linkedin: 'https://linkedin.com/in/asnaf'
  }
};