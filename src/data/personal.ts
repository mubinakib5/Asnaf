export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  valueStatement: string;
  profileStats: {
    cgpa: string;
    rank: string;
    university: string;
  };
  socialLinks: {
    linkedin?: string;
    github?: string;
    researchgate?: string;
    orcid?: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "ASNAFUL HUDA ASNAF",
  title: "Water Resources Engineering Undergraduate (CUET)",
  email: "asnafulhudasnaf@gmail.com",
  phone: "+880 1971396061",
  location: "Chittagong – 4218, Bangladesh",
  bio: "Early-career water resources engineer specializing in hydrologic/hydraulic modeling, GIS, and flood risk mitigation. Currently pursuing B.Sc. in Water Resources Engineering at CUET with strong academic performance and hands-on experience in hydraulic structures, environmental impact assessment, and geotechnical analysis.",
  valueStatement: "Dedicated to advancing sustainable water management through innovative hydraulic modeling, flood risk assessment, and environmental engineering solutions that protect communities and preserve natural resources.",
  profileStats: {
    cgpa: "3.70/4.00",
    rank: "2nd of 32",
    university: "Chittagong University of Engineering & Technology (CUET)"
  },
  socialLinks: {
    linkedin: "https://linkedin.com/in/asnaf",
    researchgate: "https://researchgate.net/profile/asnaf"
  }
};