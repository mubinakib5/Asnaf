export interface TrainingExperience {
  id: string;
  title: string;
  organization: string;
  duration: string;
  location: string;
  description: string;
  objectives: string[];
  activities: TrainingActivity[];
  skills: string[];
  outcomes: string[];
}

export interface TrainingActivity {
  date: string;
  title: string;
  location: string;
  description: string;
  type: 'site_visit' | 'workshop' | 'presentation' | 'field_work' | 'laboratory';
}

export const industrialTraining: TrainingExperience = {
  id: "bwdb-training",
  title: "Industrial Training in Water Resources Engineering",
  organization: "Bangladesh Water Development Board (BWDB), Chattogram",
  duration: "December 2024 (1 month)",
  location: "Chattogram Division, Bangladesh",
  description: "Intensive industrial training program focused on flood control, drainage, and irrigation projects with hands-on exposure to major water resources infrastructure in the Chattogram region.",
  objectives: [
    "Gain practical exposure to flood control and drainage projects",
    "Understand irrigation system design and operation",
    "Learn about coastal embankment and riverbank protection",
    "Study sediment management and flood risk mitigation",
    "Observe surveying techniques and project implementation"
  ],
  activities: [
    {
      date: "December 5, 2024",
      title: "Karnafully Irrigation Project Site Visit",
      location: "Karnafully River Basin, Chattogram",
      description: "Visited the Karnafully Irrigation Project to study irrigation infrastructure, canal systems, and water distribution mechanisms.",
      type: "site_visit"
    },
    {
      date: "December 8, 2024",
      title: "Halda River Basin Assessment",
      location: "Halda River, Chattogram",
      description: "Conducted field assessment of Halda River Basin focusing on river morphology, sediment transport, and ecological considerations.",
      type: "field_work"
    },
    {
      date: "December 12, 2024",
      title: "Chattogram Metropolitan Flood Control Project",
      location: "Chattogram City",
      description: "Inspected urban flood control infrastructure including drainage systems, pumping stations, and floodwalls.",
      type: "site_visit"
    },
    {
      date: "December 15, 2024",
      title: "Coastal Embankment Works - Mirsharai",
      location: "Mirsharai, Chattogram",
      description: "Observed coastal embankment construction and maintenance, studying protection measures against tidal surges.",
      type: "site_visit"
    },
    {
      date: "December 18, 2024",
      title: "Riverbank Protection - Sandwip",
      location: "Sandwip Island, Chattogram",
      description: "Studied riverbank protection works and erosion control measures in the vulnerable coastal island area.",
      type: "site_visit"
    },
    {
      date: "December 22, 2024",
      title: "Dike Rehabilitation Workshop",
      location: "BWDB Office, Chattogram",
      description: "Attended technical workshop on dike rehabilitation techniques, design standards, and maintenance protocols.",
      type: "workshop"
    },
    {
      date: "December 25, 2024",
      title: "Regulators and Sluices Operation",
      location: "Various locations, Chattogram",
      description: "Learned about operation and maintenance of water control structures including regulators and sluice gates.",
      type: "field_work"
    },
    {
      date: "December 28, 2024",
      title: "Surveying and Sediment Management",
      location: "BWDB Field Office, Chattogram",
      description: "Gained hands-on experience in surveying techniques and sediment management strategies for river systems.",
      type: "field_work"
    }
  ],
  skills: [
    "Flood control project assessment and evaluation",
    "Irrigation system design and operation principles",
    "Coastal embankment and riverbank protection techniques",
    "Sediment management and river morphology analysis",
    "Surveying and field data collection methods",
    "Water control structure operation and maintenance",
    "Flood risk assessment and mitigation strategies"
  ],
  outcomes: [
    "Gained comprehensive understanding of BWDB project implementation",
    "Developed practical skills in water resources infrastructure assessment",
    "Enhanced knowledge of coastal and riverine protection measures",
    "Built professional connections within the water resources sector",
    "Improved field surveying and data collection capabilities",
    "Completed detailed training report with project recommendations"
  ]
};

export const getTrainingActivitiesByType = (type: TrainingActivity['type']) => 
  industrialTraining.activities.filter(activity => activity.type === type);

export const getTrainingTimeline = () => 
  industrialTraining.activities.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());