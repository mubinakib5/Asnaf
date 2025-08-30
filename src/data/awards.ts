export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  category: 'academic' | 'research' | 'professional' | 'competition';
  level: 'international' | 'national' | 'regional' | 'institutional';
}

export const awards: Award[] = [
  {
    id: "chittagong-board-scholarship",
    title: "Chittagong Board Scholarship",
    organization: "Chittagong Education Board",
    year: "2017",
    description: "Awarded scholarship for outstanding performance in Secondary School Certificate (SSC) examination.",
    category: "academic",
    level: "regional"
  },
  {
    id: "technical-scholarship",
    title: "Technical Scholarship",
    organization: "Chittagong University of Engineering & Technology (CUET)",
    year: "2020-2025",
    description: "Awarded technical scholarship for every semester based on consistent academic excellence in Water Resources Engineering program.",
    category: "academic",
    level: "institutional"
  },
  {
    id: "best-student-level-2",
    title: "Best Student of the Year - Level 2",
    organization: "Shaheed Tareq Huda Hall, CUET",
    year: "2023",
    description: "Recognized as the best student of Level 2 for outstanding academic performance and leadership qualities.",
    category: "academic",
    level: "institutional"
  },
  {
    id: "best-student-level-3",
    title: "Best Student of the Year - Level 3",
    organization: "Shaheed Tareq Huda Hall, CUET",
    year: "2024",
    description: "Recognized as the best student of Level 3 for exceptional academic achievements and contribution to hall activities.",
    category: "academic",
    level: "institutional"
  },
  {
    id: "best-student-level-4",
    title: "Best Student of the Year - Level 4",
    organization: "Shaheed Tareq Huda Hall, CUET",
    year: "2025",
    description: "Recognized as the best student of Level 4 for continued excellence in academics and leadership.",
    category: "academic",
    level: "institutional"
  },
  {
    id: "home-ministry-award",
    title: "Home Ministry of Bangladesh Government Award",
    organization: "Ministry of Home Affairs, Bangladesh",
    year: "2023",
    description: "Received prestigious government recognition through Info Bangla program as the Best Student of CUET for outstanding academic performance and contribution to the university.",
    category: "academic",
    level: "national"
  }
];

export const getAwardsByCategory = (category: Award['category']) => 
  awards.filter(award => award.category === category);

export const getAwardsByYear = (year: string) => 
  awards.filter(award => award.year.includes(year));

export const getRecentAwards = (limit: number = 5) => 
  awards
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, limit);