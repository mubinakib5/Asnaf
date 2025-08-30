import { personalInfo } from '@/data'

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.bio,
    url: 'https://asnaf-portfolio.vercel.app',
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: personalInfo.location,
      addressCountry: 'Bangladesh'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: personalInfo.profileStats.university,
      url: 'https://www.cuet.ac.bd/'
    },
    knowsAbout: [
      'Computer Science',
      'Software Engineering',
      'Web Development',
      'Machine Learning',
      'Data Science',
      'Full Stack Development'
    ],
    sameAs: [
      personalInfo.socialLinks.linkedin,
      personalInfo.socialLinks.researchgate
    ].filter(Boolean),
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Bachelor of Science in Water Resources Engineering',
      educationalLevel: 'Bachelor\'s Degree',
      credentialCategory: 'degree'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  )
}