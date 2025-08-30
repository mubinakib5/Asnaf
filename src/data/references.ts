export interface Reference {
  id: string;
  name: string;
  title: string;
  organization: string;
  email: string;
  phone?: string;
  relationship: string;
  category: 'academic' | 'professional' | 'industry';
  yearsKnown?: number;
  description?: string;
}

export const references: Reference[] = [
  {
    id: 'farzana-zuthi',
    name: 'Prof. Dr. Mst. Farzana Rahman Zuthi',
    title: 'Head, Department of Water Resources Engineering',
    organization: 'Chittagong University of Engineering & Technology (CUET)',
    email: 'farzana@cuet.ac.bd',
    relationship: 'Department Head & Academic Supervisor',
    category: 'academic',
    yearsKnown: 5,
    description: 'Head of the Water Resources Engineering Department at CUET, overseeing academic programs and research initiatives.'
  },
  {
    id: 'aysha-akter',
    name: 'Prof. Dr. Aysha Akter',
    title: 'Professor & Thesis Supervisor',
    organization: 'Department of Water Resources Engineering, CUET',
    email: 'aysha_akter@cuet.ac.bd',
    relationship: 'Undergraduate Thesis Supervisor',
    category: 'academic',
    yearsKnown: 2,
    description: 'Thesis supervisor for the hydraulic elevator dam modeling research project on Mainee River, Khagrachari.'
  },
  {
    id: 'tanjir-saif-ahmed',
    name: 'Dr. Tanjir Saif Ahmed',
    title: 'Executive Engineer',
    organization: 'Bangladesh Water Development Board (BWDB)',
    email: 'tanjirsaifahmed@gmail.com',
    relationship: 'Industrial Training Supervisor',
    category: 'professional',
    yearsKnown: 1,
    description: 'Executive Engineer at BWDB who supervised industrial training focused on flood control, irrigation, and water management projects.'
  },
  {
    id: 'murshed-hossain-azad',
    name: 'Md. Murshed Hossain Azad',
    title: 'General Manager (Finance)',
    organization: 'Bangladesh Petroleum Corporation',
    email: 'mhazad_bpc@yahoo.com',
    relationship: 'Professional Reference',
    category: 'industry',
    yearsKnown: 3,
    description: 'General Manager at Bangladesh Petroleum Corporation, providing professional reference and career guidance.'
  }
];

// Helper functions
export const getReferencesByCategory = (category: Reference['category']) => {
  return references.filter(ref => ref.category === category);
};

export const getAcademicReferences = () => getReferencesByCategory('academic');
export const getProfessionalReferences = () => getReferencesByCategory('professional');
export const getIndustryReferences = () => getReferencesByCategory('industry');

export const getReferenceById = (id: string) => {
  return references.find(ref => ref.id === id);
};

export const getReferencesCount = () => references.length;

export const getRecentReferences = (limit: number = 3) => {
  return references.slice(0, limit);
};