import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { industrialTraining } from '@/data'
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  GraduationCap,
  MapPin,
  Users
} from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Training & Certifications',
  description: 'Professional development through workshops, training programs, and certifications to enhance technical and soft skills.',
  keywords: ['training', 'certifications', 'workshops', 'professional development', 'courses'],
}

function TrainingCard({ item }: { item: typeof industrialTraining }) {
  const getTypeIcon = (type: string) => {
    if (!type) return <GraduationCap className="h-5 w-5" />
    switch (type.toLowerCase()) {
      case 'certification':
        return <Award className="h-5 w-5" />
      case 'workshop':
        return <Users className="h-5 w-5" />
      case 'course':
        return <BookOpen className="h-5 w-5" />
      case 'training':
        return <GraduationCap className="h-5 w-5" />
      default:
        return <Award className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    if (!type) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    switch (type.toLowerCase()) {
      case 'certification':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'workshop':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'course':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
      case 'training':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {getTypeIcon('training')}
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {item.title}
              </CardTitle>
              <CardDescription className="font-medium text-primary">
                {item.organization}
              </CardDescription>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Badge className={getTypeColor('training')}>
              Industrial Training
            </Badge>
            <Badge className={getStatusColor('completed')}>
              <CheckCircle className="h-3 w-3 mr-1" />
              Completed
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{item.duration}</span>
          </div>
          {item.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{item.location}</span>
            </div>
          )}
        </div>

        {item.skills && item.skills.length > 0 && (
          <div className="space-y-2">
            <div className="text-sm font-medium">Skills Gained:</div>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}




      </CardContent>
    </Card>
  )
}

export default function TrainingPage() {
  const training = [industrialTraining] // Convert single object to array for consistency
  const trainingByType = {
    'Industrial Training': training
  }

  const totalTraining = training.length
  const completedTraining = 1 // Industrial training is completed
  const inProgressTraining = 0 // No training in progress
  const certificationsCount = 0 // Industrial training is not a certification

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <GraduationCap className="h-4 w-4" />
            <span className="text-sm font-medium">Training & Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional{' '}
            <span className="text-gradient">Development</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Continuous learning through workshops, training programs, and certifications
            to stay current with industry trends and enhance both technical and soft skills.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{totalTraining}</div>
              <div className="text-muted-foreground">Total Programs</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">{completedTraining}</div>
              <div className="text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-yellow-600 mb-2">{inProgressTraining}</div>
              <div className="text-muted-foreground">In Progress</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{certificationsCount}</div>
              <div className="text-muted-foreground">Certifications</div>
            </CardContent>
          </Card>
        </div>

        {/* Training by Type */}
        <div className="space-y-12">
          {Object.entries(trainingByType).map(([type, typeItems]) => (
            <div key={type}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {type === 'Certification' && <Award className="h-5 w-5" />}
                  {type === 'Workshop' && <Users className="h-5 w-5" />}
                  {type === 'Course' && <BookOpen className="h-5 w-5" />}
                  {type === 'Training' && <GraduationCap className="h-5 w-5" />}
                  {!['Certification', 'Workshop', 'Course', 'Training'].includes(type) && <Award className="h-5 w-5" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold capitalize">{type}s</h2>
                  <p className="text-muted-foreground">
                    {typeItems.length} {type.toLowerCase()}{typeItems.length !== 1 ? 's' : ''} completed or in progress
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                {typeItems.map((item, index) => (
                  <TrainingCard key={index} item={item} />
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
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Commitment to Growth</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <GraduationCap className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Lifelong Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Committed to continuous professional development and skill enhancement
                  </p>
                </div>
                <div>
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Industry Engagement</h4>
                  <p className="text-sm text-muted-foreground">
                    Actively participating in workshops and training programs with industry experts
                  </p>
                </div>
                <div>
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Validated Skills</h4>
                  <p className="text-sm text-muted-foreground">
                    Earning certifications to validate knowledge and demonstrate competency
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
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Apply My Skills?</h3>
              <p className="text-muted-foreground mb-6">
                These training programs have equipped me with both technical expertise and
                professional skills. Let&apos;s discuss how I can contribute to your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/skills">
                    View My Skills
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