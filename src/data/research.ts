export interface ResearchTopic {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'thesis' | 'interest' | 'ongoing';
}

export interface Thesis {
  title: string;
  abstract: string;
  supervisor: string;
  year: string;
  keywords: string[];
  status: 'completed' | 'ongoing' | 'proposed';
}

export const thesis: Thesis = {
  title: "Modeling the Impact of Hydraulic Elevator Dams on River Hydrodynamics: Case Study of Mainee River, Khagrachari",
  abstract: "This research investigates the hydrodynamic impacts of Hydraulic Elevator Dams (HED) on river systems using the Mainee River in Khagrachari as a case study. The study employs HEC-RAS 1D modeling, ArcGIS spatial analysis, and statistical methods to analyze 3m and 4m HED scenarios, examining water retention capabilities, velocity profiles, rating curves, and downstream volume effects to assess the feasibility and environmental impact of HED implementation.",
  supervisor: "Prof. Dr. Aysha Akhter",
  year: "2024-25",
  keywords: ["Hydraulic Elevator Dam", "HEC-RAS", "River Hydrodynamics", "ArcGIS", "Water Retention", "Velocity Profiles"],
  status: "ongoing"
};

export const researchTopics: ResearchTopic[] = [
  {
    id: "hydraulic-modeling",
    title: "Hydrological/Hydraulic Modeling",
    description: "Advanced hydraulic and hydrological modeling using HEC-RAS and HEC-HMS for river systems, flood analysis, and water resource management.",
    tags: ["HEC-RAS", "HEC-HMS", "Hydraulic Modeling", "Hydrological Analysis"],
    category: "thesis"
  },
  {
    id: "mathematical-modeling",
    title: "Mathematical Modeling of Water Systems",
    description: "Development and application of mathematical models for flood prediction, river dynamics, and reservoir management systems.",
    tags: ["Mathematical Modeling", "Flood Modeling", "River Systems", "Reservoir Management"],
    category: "interest"
  },
  {
    id: "gis-remote-sensing",
    title: "GIS/Remote Sensing in Water Resources",
    description: "Application of Geographic Information Systems and remote sensing technologies for water resource assessment, flood mapping, and environmental monitoring.",
    tags: ["GIS", "Remote Sensing", "ArcGIS", "QGIS", "Water Resources"],
    category: "ongoing"
  },
  {
    id: "flood-risk-assessment",
    title: "Flood Risk Assessment & Mitigation",
    description: "Comprehensive flood risk analysis and development of mitigation strategies for urban and rural areas using advanced modeling techniques.",
    tags: ["Flood Risk", "Risk Assessment", "Mitigation Strategies", "Urban Hydrology"],
    category: "interest"
  },
  {
    id: "sediment-transport",
    title: "Sediment Transport & River Morphology",
    description: "Investigation of sediment transport processes and river morphological changes using field studies and numerical modeling approaches.",
    tags: ["Sediment Transport", "River Morphology", "Erosion", "Deposition"],
    category: "interest"
  }
];