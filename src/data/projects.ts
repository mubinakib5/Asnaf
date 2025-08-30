export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'academic' | 'industry' | 'research';
  problem: string;
  approach: string;
  tools: string[];
  outcomes: string[];
  images?: string[];
  year: string;
  status: 'completed' | 'ongoing';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "undergraduate-thesis",
    slug: "hydraulic-elevator-dam-modeling",
    title: "Modeling the Impact of Hydraulic Elevator Dams on River Hydrodynamics",
    description: "Case study of Mainee River, Khagrachari analyzing the hydrodynamic impacts of Hydraulic Elevator Dams using advanced modeling techniques.",
    category: "research",
    problem: "Understanding the hydrodynamic impacts of Hydraulic Elevator Dams (HED) on river systems to assess feasibility and environmental effects for sustainable water management.",
    approach: "Employed HEC-RAS 1D modeling, ArcGIS spatial analysis, and statistical methods to analyze 3m and 4m HED scenarios, examining water retention, velocity profiles, rating curves, and downstream volume effects.",
    tools: ["HEC-RAS", "ArcGIS", "Statistical Analysis", "Hydrodynamic Modeling"],
    outcomes: [
      "Developed comprehensive hydrodynamic models for HED scenarios",
      "Analyzed water retention capabilities and velocity profiles",
      "Generated rating curves and downstream volume assessments",
      "Provided feasibility analysis for HED implementation"
    ],
    year: "2024-25",
    status: "ongoing",
    featured: true
  },
  {
    id: "environmental-impact-assessment",
    slug: "water-quality-assessment-chattogram",
    title: "Environmental Impact Assessment - Water Quality Study",
    description: "Comprehensive water quality assessment of Chattogram Ward 9-16 analyzing 12 parameters against BECR 1997 standards.",
    category: "academic",
    problem: "Assess water quality conditions in urban Chattogram wards to identify contamination sources and develop mitigation strategies for public health protection.",
    approach: "Systematic sampling and analysis of 12 water quality parameters across multiple wards, comparison with BECR 1997 standards, and development of comprehensive mitigation plan.",
    tools: ["Water Quality Testing", "Statistical Analysis", "GIS Mapping", "Environmental Monitoring"],
    outcomes: [
      "Completed comprehensive water quality assessment",
      "Identified contamination sources and risk areas",
      "Developed targeted mitigation strategies",
      "Provided recommendations for water quality improvement"
    ],
    year: "2023-24",
    status: "completed",
    featured: true
  },
  {
    id: "geotechnical-soil-classification",
    slug: "soil-classification-uscs-aashto",
    title: "Geotechnical Soil Classification Study",
    description: "Comprehensive soil classification using USCS and AASHTO systems with foundation suitability analysis.",
    category: "academic",
    problem: "Determine soil properties and classification for foundation design applications using standardized geotechnical procedures.",
    approach: "Conducted water content analysis, Atterberg limits testing, sieve and hydrometer analysis, followed by USCS and AASHTO classification with foundation suitability assessment.",
    tools: ["Laboratory Testing", "USCS Classification", "AASHTO Classification", "Geotechnical Analysis"],
    outcomes: [
      "Completed comprehensive soil classification report",
      "Determined foundation suitability for different soil types",
      "Established geotechnical parameters for design applications",
      "Provided engineering recommendations for construction"
    ],
    year: "2023",
    status: "completed",
    featured: false
  },
  {
    id: "structural-rcc-design",
    slug: "five-story-building-design-chattogram",
    title: "Structural RCC Design - 5-Story Building",
    description: "Complete structural design of a 5-story building in Chattogram using ETABS with BNBC 2020 and ACI compliance.",
    category: "academic",
    problem: "Design a safe and economical 5-story reinforced concrete building structure complying with local and international building codes.",
    approach: "Utilized ETABS for structural modeling and analysis, ensured BNBC 2020 and ACI code compliance, performed seismic and load validation, and completed detailed rebar design.",
    tools: ["ETABS", "AutoCAD", "BNBC 2020", "ACI Standards", "Structural Analysis"],
    outcomes: [
      "Completed comprehensive structural design and analysis",
      "Ensured compliance with BNBC 2020 and ACI standards",
      "Validated seismic resistance and load-bearing capacity",
      "Provided detailed rebar detailing and construction drawings"
    ],
    year: "2024",
    status: "completed",
    featured: false
  },
  {
    id: "edge-training-project",
    slug: "edge-gis-flood-mapping-brahmanbaria",
    title: "EDGE Training - DEM-based Flood & Land-use Mapping",
    description: "80-hour comprehensive training project focusing on GIS, HEC-RAS, HEC-HMS, and Google Earth Engine applications.",
    category: "academic",
    problem: "Develop practical skills in advanced water resources modeling and GIS applications for flood risk assessment and land-use planning.",
    approach: "Intensive 80-hour training covering GIS applications, HEC-RAS and HEC-HMS modeling, Google Earth Engine programming, with practical application in Brahmanbaria district.",
    tools: ["GIS", "HEC-RAS", "HEC-HMS", "Google Earth Engine", "DEM Analysis", "Remote Sensing"],
    outcomes: [
      "Achieved 79% score in comprehensive training program",
      "Created DEM-based flood maps for Brahmanbaria district",
      "Developed land-use classification maps using remote sensing",
      "Gained expertise in integrated water resources modeling"
    ],
    year: "2024",
    status: "completed",
    featured: true
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug);
export const getProjectsByCategory = (category: Project['category']) => projects.filter(project => project.category === category);