export interface Course {
  id: string;
  code: string;
  title: string;
  credits: number;
  semester: string;
  year: string;
  grade?: string;
  description: string;
  category: 'core' | 'elective' | 'lab' | 'project';
  prerequisites?: string[];
}

export const courses: Course[] = [
  // Core Water Resources Engineering Courses
  {
    id: "wre-401",
    code: "WRE 401",
    title: "Open Channel Hydraulics",
    credits: 3,
    semester: "Fall",
    year: "2022",
    description: "Flow characteristics in open channels, uniform and non-uniform flow, hydraulic jump, channel design.",
    category: "core"
  },
  {
    id: "wre-402",
    code: "WRE 402",
    title: "Fluid Mechanics",
    credits: 3,
    semester: "Spring",
    year: "2022",
    description: "Fundamental principles of fluid statics and dynamics, flow in pipes, boundary layer theory.",
    category: "core"
  },
  {
    id: "wre-403",
    code: "WRE 403",
    title: "Hydrology",
    credits: 3,
    semester: "Fall",
    year: "2023",
    description: "Hydrologic cycle, precipitation analysis, evapotranspiration, infiltration, runoff modeling.",
    category: "core"
  },
  {
    id: "wre-404",
    code: "WRE 404",
    title: "Hydraulic Structures",
    credits: 3,
    semester: "Spring",
    year: "2023",
    description: "Design and analysis of dams, spillways, gates, weirs, and other hydraulic control structures.",
    category: "core"
  },
  {
    id: "wre-405",
    code: "WRE 405",
    title: "Coastal Engineering",
    credits: 3,
    semester: "Fall",
    year: "2023",
    description: "Wave mechanics, coastal processes, shoreline protection, harbor and breakwater design.",
    category: "core"
  },
  {
    id: "wre-406",
    code: "WRE 406",
    title: "Ground Water Engineering",
    credits: 3,
    semester: "Spring",
    year: "2024",
    description: "Groundwater flow principles, well hydraulics, aquifer testing, groundwater contamination.",
    category: "core"
  },
  {
    id: "wre-407",
    code: "WRE 407",
    title: "River Engineering & Basin Management",
    credits: 3,
    semester: "Fall",
    year: "2024",
    description: "River morphology, sediment transport, river training works, watershed management principles.",
    category: "core"
  },
  {
    id: "wre-408",
    code: "WRE 408",
    title: "Irrigation & Drainage",
    credits: 3,
    semester: "Spring",
    year: "2024",
    description: "Irrigation system design, crop water requirements, drainage systems, water distribution.",
    category: "core"
  },
  {
    id: "wre-409",
    code: "WRE 409",
    title: "GIS & Remote Sensing",
    credits: 3,
    semester: "Fall",
    year: "2024",
    description: "Geographic Information Systems applications in water resources, satellite imagery analysis.",
    category: "core"
  },
  {
    id: "wre-410",
    code: "WRE 410",
    title: "Climatology",
    credits: 3,
    semester: "Spring",
    year: "2023",
    description: "Climate systems, meteorological parameters, climate change impacts on water resources.",
    category: "core"
  },

  // Capstone Project
  {
    id: "wre-499",
    code: "WRE 499",
    title: "Undergraduate Thesis",
    credits: 3,
    semester: "Spring",
    year: "2025",
    description: "Modeling the Impact of Hydraulic Elevator Dams on River Hydrodynamics: Case Study of Mainee River, Khagrachari.",
    category: "project"
  }
];

export const getCoursesByCategory = (category: Course['category']) => 
  courses.filter(course => course.category === category);

export const getCoursesByYear = (year: string) => 
  courses.filter(course => course.year === year);

export const getCoursesBySemester = (semester: string, year: string) => 
  courses.filter(course => course.semester === semester && course.year === year);

export const searchCourses = (query: string) => 
  courses.filter(course => 
    course.title.toLowerCase().includes(query.toLowerCase()) ||
    course.code.toLowerCase().includes(query.toLowerCase()) ||
    course.description.toLowerCase().includes(query.toLowerCase())
  );

export const getTotalCredits = () => 
  courses.reduce((total, course) => total + course.credits, 0);

export const getGPA = () => {
  const gradePoints: { [key: string]: number } = {
    'A+': 4.0, 'A': 3.75, 'A-': 3.5, 'B+': 3.25, 'B': 3.0, 'B-': 2.75,
    'C+': 2.5, 'C': 2.25, 'C-': 2.0, 'D+': 1.75, 'D': 1.5, 'F': 0.0
  };
  
  const coursesWithGrades = courses.filter(course => course.grade);
  const totalPoints = coursesWithGrades.reduce((sum, course) => 
    sum + (gradePoints[course.grade!] * course.credits), 0);
  const totalCredits = coursesWithGrades.reduce((sum, course) => sum + course.credits, 0);
  
  return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
};