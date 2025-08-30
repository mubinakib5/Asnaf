export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  cgpa?: string;
  rank?: string;
  description?: string;
  achievements?: string[];
  coursework?: string[];
}

export const education: Education[] = [
  {
    id: "cuet-bsc",
    institution: "Chittagong University of Engineering & Technology (CUET)",
    degree: "Bachelor of Science",
    field: "Water Resources Engineering",
    startDate: "Feb 2020",
    endDate: "Jul 2025",
    cgpa: "3.70/4.00",
    rank: "2nd of 32",
    description: "Comprehensive undergraduate program in water resources engineering with focus on hydraulic modeling, flood risk assessment, and sustainable water management solutions.",
    achievements: [
      "Technical Scholarship recipient (every semester)",
      "Best Student of the Year - Shaheed Tareq Huda Hall (Level 2: 2023, Level 3: 2024, Level 4: 2025)",
      "Home Ministry of Bangladesh Govt Award (Info Bangla; Best Student of CUET, 2023)",
      "Maintained consistent academic excellence with 3.70 CGPA"
    ],
    coursework: [
      "Open Channel Hydraulics",
      "Fluid Mechanics",
      "Hydrology",
      "Hydraulic Structures",
      "Coastal Engineering",
      "Ground Water Engineering",
      "River Engineering & Basin Management",
      "Irrigation & Drainage",
      "GIS & Remote Sensing",
      "Climatology"
    ]
  }
];

export const certifications = [
  {
    id: "edge-training",
    name: "EDGE Training Program",
    issuer: "CUET",
    date: "2024",
    score: "79%",
    duration: "80 hours",
    description: "Comprehensive training in GIS, HEC-RAS, HEC-HMS, and Google Earth Engine with practical applications in flood mapping and land-use analysis.",
    skills: ["GIS", "HEC-RAS", "HEC-HMS", "Google Earth Engine", "DEM Analysis", "Flood Mapping"]
  }
];