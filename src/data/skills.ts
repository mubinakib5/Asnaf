export interface Skill {
  name: string;
  proficiency: number; // 1-100
  category: 'modeling' | 'gis' | 'structural' | 'programming' | 'productivity';
  description?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "modeling",
    name: "Hydraulic & Hydrologic Modeling",
    description: "Water resources modeling software for hydraulic and hydrologic analysis",
    skills: [
      {
        name: "HEC-RAS",
        proficiency: 85,
        category: "modeling",
        description: "1D hydraulic modeling for river analysis and flood studies - used in thesis research"
      },
      {
        name: "HEC-HMS",
        proficiency: 80,
        category: "modeling",
        description: "Hydrologic modeling for watershed analysis - learned through EDGE training"
      }
    ]
  },
  {
    id: "gis",
    name: "GIS & Remote Sensing",
    description: "Geographic Information Systems and spatial analysis tools",
    skills: [
      {
        name: "ArcGIS",
        proficiency: 85,
        category: "gis",
        description: "Professional GIS software for spatial analysis and mapping - used in thesis and projects"
      },
      {
        name: "QGIS",
        proficiency: 75,
        category: "gis",
        description: "Open-source GIS platform for geospatial analysis"
      },
      {
        name: "Google Earth Engine",
        proficiency: 70,
        category: "gis",
        description: "Cloud-based platform for remote sensing analysis - learned through EDGE training"
      }
    ]
  },
  {
    id: "structural",
    name: "Structural Analysis & Design",
    description: "Software for structural engineering and drafting",
    skills: [
      {
        name: "ETABS",
        proficiency: 80,
        category: "structural",
        description: "Building analysis and design software - used for 5-story RCC building project"
      },
      {
        name: "AutoCAD",
        proficiency: 75,
        category: "structural",
        description: "2D/3D computer-aided design and drafting for engineering drawings"
      }
    ]
  },
  {
    id: "programming",
    name: "Programming & Data Analysis",
    description: "Programming languages for data analysis and computation",
    skills: [
      {
        name: "MATLAB",
        proficiency: 60,
        category: "programming",
        description: "Numerical computing and algorithm development - basic level"
      },
      {
        name: "Python",
        proficiency: 55,
        category: "programming",
        description: "Data analysis and scientific computing - basic level"
      },
      {
        name: "C++",
        proficiency: 50,
        category: "programming",
        description: "Object-oriented programming - basic level"
      }
    ]
  },
  {
    id: "productivity",
    name: "Productivity & Documentation",
    description: "Office productivity and documentation tools",
    skills: [
      {
        name: "Microsoft Word",
        proficiency: 90,
        category: "productivity",
        description: "Document preparation and technical writing"
      },
      {
        name: "Microsoft Excel",
        proficiency: 85,
        category: "productivity",
        description: "Data analysis, calculations, and spreadsheet management"
      },
      {
        name: "Microsoft PowerPoint",
        proficiency: 85,
        category: "productivity",
        description: "Presentation design and technical communication"
      }
    ]
  }
];

export const getAllSkills = (): Skill[] => {
  return skillCategories.flatMap(category => category.skills);
};

export const getSkillsByCategory = (categoryId: string): Skill[] => {
  const category = skillCategories.find(cat => cat.id === categoryId);
  return category ? category.skills : [];
};

export const getTopSkills = (limit: number = 10): Skill[] => {
  return getAllSkills()
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, limit);
};