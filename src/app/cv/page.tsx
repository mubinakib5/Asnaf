import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Download, 
  FileText, 
  User, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code, 
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Calendar,
  Target
} from 'lucide-react'
import { personalInfo, projects, skillCategories, awards, industrialTraining, courses } from '@/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
  description: 'Download my complete CV or view it online. Comprehensive overview of my education, projects, skills, and achievements.',
  keywords: ['CV', 'resume', 'curriculum vitae', 'download', 'experience', 'qualifications'],
}

interface SkillWithCategory {
  name: string;
  proficiency: number;
  category: string;
  description?: string;
}

export default function CVPage() {
  const topSkills = (skillCategories || []).flatMap(category => 
    (category.skills || []).filter(skill => 
      skill.proficiency >= 75
    ).map(skill => ({ ...skill, category: category.name }))
  ).slice(0, 12)

  const topProjects = (projects || []).slice(0, 4)
  const recentAwards = (awards || []).slice(0, 3)
  const completedTraining = [industrialTraining] // Single training experience

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <FileText className="h-4 w-4" />
            <span className="text-sm font-medium">Curriculum Vitae</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My{' '}
            <span className="text-gradient">Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            A comprehensive overview of my education, experience, skills, and achievements. 
            Download the PDF version or explore the interactive sections below.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                <Mail className="h-5 w-5 mr-2" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
                    <p className="text-lg text-primary font-medium">{personalInfo.title}</p>
                    <p className="text-muted-foreground mt-2">{personalInfo.bio}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Social Links</h4>
                    <div className="space-y-2">
                      {personalInfo.socialLinks.linkedin && (
                        <a 
                          href={personalInfo.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn Profile
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                      {personalInfo.socialLinks.github && (
                        <a 
                          href={personalInfo.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          GitHub Profile
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Academic Standing</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{personalInfo.profileStats.cgpa}</div>
                        <div className="text-xs text-muted-foreground">CGPA</div>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{personalInfo.profileStats.rank}</div>
                        <div className="text-xs text-muted-foreground">Rank</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">{personalInfo.title}</h3>
                  <p className="text-primary font-medium">{personalInfo.profileStats.university}</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="text-center p-4 bg-accent/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{courses.length}</div>
                    <div className="text-sm text-muted-foreground">Courses Completed</div>
                  </div>
                  <div className="text-center p-4 bg-accent/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {courses.reduce((sum, course) => sum + course.credits, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Credits</div>
                  </div>
                  <div className="text-center p-4 bg-accent/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{personalInfo.profileStats.cgpa}</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Projects */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Key Projects
              </CardTitle>
              <CardDescription>
                Highlighting my most significant academic and personal projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {topProjects.map((project, index) => (
                  <div key={index} className="border-l-4 border-l-primary pl-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{project.title}</h3>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {(project.tools || []).slice(0, 5).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {(project.tools || []).length > 5 && (
                        <Badge variant="secondary" className="text-xs">
                          +{(project.tools || []).length - 5} more
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" asChild>
                  <Link href="/projects">
                    View All Projects
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Technical Skills
              </CardTitle>
              <CardDescription>
                Core competencies and technical expertise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(
                  topSkills.reduce((acc, skill) => {
                    if (!acc[skill.category]) acc[skill.category] = []
                    acc[skill.category].push(skill)
                    return acc
                  }, {} as Record<string, SkillWithCategory[]>)
                ).map(([category, categorySkills]) => (
                  <div key={category}>
                    <h4 className="font-medium mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill, index) => (
                        <Badge 
                          key={index} 
                          variant={skill.proficiency >= 85 ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {skill.name}
                          {skill.proficiency >= 85 && ' ⭐'}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" asChild>
                  <Link href="/skills">
                    View All Skills
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Awards & Recognition */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Awards & Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAwards.map((award, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{award.title}</h4>
                      <p className="text-sm text-primary">{award.organization}</p>
                      <p className="text-sm text-muted-foreground">{award.year}</p>
                    </div>
                    <Badge variant="outline">{award.category}</Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" asChild>
                  <Link href="/awards">
                    View All Awards
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Professional Development */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Professional Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {completedTraining.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-primary">{item.organization}</p>
                      <p className="text-sm text-muted-foreground">{item.duration}</p>
                    </div>
                    <Badge variant="outline">Industrial Training</Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" asChild>
                  <Link href="/training">
                    View All Training
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I&apos;m actively seeking opportunities to apply my skills and contribute to meaningful projects. 
                Let&apos;s discuss how I can add value to your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download Full CV
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}