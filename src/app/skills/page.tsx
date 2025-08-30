import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Palette, 
  Users, 
  MessageSquare, 
  Target, 
  Lightbulb,
  BookOpen,
  Award
} from 'lucide-react'
import { skillCategories } from '@/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Skills & Expertise - ASNAFUL HUDA ASNAF',
  description: 'Technical skills in water resources engineering including HEC-RAS, HEC-HMS, GIS, programming, and engineering software developed through academic projects and practical experience.',
  keywords: ['water resources engineering', 'HEC-RAS', 'HEC-HMS', 'GIS', 'ArcGIS', 'hydraulic modeling', 'programming', 'MATLAB', 'technical skills'],
}

interface SkillProps {
  name: string;
  proficiency: number;
  category: string;
  description?: string;
}

function SkillCard({ skill }: { skill: SkillProps }) {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'programming languages':
        return <Code className="h-5 w-5" />
      case 'web development':
        return <Globe className="h-5 w-5" />
      case 'mobile development':
        return <Smartphone className="h-5 w-5" />
      case 'database':
        return <Database className="h-5 w-5" />
      case 'backend development':
        return <Server className="h-5 w-5" />
      case 'design':
        return <Palette className="h-5 w-5" />
      case 'soft skills':
        return <Users className="h-5 w-5" />
      case 'languages':
        return <MessageSquare className="h-5 w-5" />
      default:
        return <Target className="h-5 w-5" />
    }
  }

  const getProficiencyColor = (level: string) => {
    if (!level) return 'text-gray-600 dark:text-gray-400'
    switch (level.toLowerCase()) {
      case 'expert':
        return 'text-green-600 dark:text-green-400'
      case 'advanced':
        return 'text-blue-600 dark:text-blue-400'
      case 'intermediate':
        return 'text-yellow-600 dark:text-yellow-400'
      case 'beginner':
        return 'text-orange-600 dark:text-orange-400'
      default:
        return 'text-gray-600 dark:text-gray-400'
    }
  }

  const getProficiencyLevel = (proficiency: number) => {
    if (proficiency >= 90) return 'expert'
    if (proficiency >= 75) return 'advanced'
    if (proficiency >= 60) return 'intermediate'
    if (proficiency >= 40) return 'beginner'
    return 'beginner'
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {getCategoryIcon('technical')}
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {skill.name}
              </CardTitle>
              <CardDescription>Technical Skill</CardDescription>
            </div>
          </div>
          <Badge 
            variant="secondary" 
            className={`${getProficiencyColor(getProficiencyLevel(skill.proficiency))} font-medium`}
          >
              {skill.proficiency}%
            </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {skill.description && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {skill.description}
          </p>
        )}
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Proficiency</span>
            <span className={getProficiencyColor(getProficiencyLevel(skill.proficiency))}>
              {skill.proficiency}%
            </span>
          </div>
          <Progress 
            value={skill.proficiency} 
            className="h-2"
          />
        </div>




      </CardContent>
    </Card>
  )
}

export default function SkillsPage() {
  const getProficiencyLevel = (proficiency: number) => {
    if (proficiency >= 90) return 'expert'
    if (proficiency >= 75) return 'advanced'
    if (proficiency >= 60) return 'intermediate'
    if (proficiency >= 40) return 'beginner'
    return 'beginner'
  }

  const allSkills = skillCategories.flatMap(category => category.skills)
  const totalSkills = allSkills.length
  const expertSkills = allSkills.filter(skill => getProficiencyLevel(skill.proficiency) === 'expert').length
  const advancedSkills = allSkills.filter(skill => getProficiencyLevel(skill.proficiency) === 'advanced').length

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Code className="h-4 w-4" />
            <span className="text-sm font-medium">Skills & Expertise</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Skills &{' '}
            <span className="text-gradient">Expertise</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, programming languages, frameworks, 
            and soft skills developed through academic projects and continuous learning.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{totalSkills}</div>
              <div className="text-muted-foreground">Total Skills</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">{expertSkills}</div>
              <div className="text-muted-foreground">Expert Level</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{advancedSkills}</div>
              <div className="text-muted-foreground">Advanced Level</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {skillCategories.length}
              </div>
              <div className="text-muted-foreground">Categories</div>
            </CardContent>
          </Card>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                  <p className="text-muted-foreground">
                    {category.skills.length} skill{category.skills.length !== 1 ? 's' : ''} in this category
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <div className="text-center mb-6">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Always Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Constantly updating skills with latest technologies and best practices
                  </p>
                </div>
                <div>
                  <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Practical Application</h4>
                  <p className="text-sm text-muted-foreground">
                    Learning through hands-on projects and real-world problem solving
                  </p>
                </div>
                <div>
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Quality Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Emphasizing code quality, best practices, and maintainable solutions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Let&apos;s Build Something Together</h3>
              <p className="text-muted-foreground mb-6">
                These skills represent my technical foundation. I&apos;m always eager to apply them 
                to new challenges and learn emerging technologies along the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/projects">
                    View My Projects
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Get in Touch
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