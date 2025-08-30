import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Award, Calendar, MapPin, Trophy, Star, Medal, Crown, Target } from 'lucide-react'
import { awards } from '@/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Awards & Achievements',
  description: 'Academic achievements, scholarships, and recognitions earned throughout my educational journey.',
  keywords: ['awards', 'achievements', 'scholarships', 'academic excellence', 'recognitions'],
}

function AwardCard({ award }: { award: typeof awards[0] }) {
  const getAwardIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'academic':
        return <Trophy className="h-5 w-5" />
      case 'research':
        return <Star className="h-5 w-5" />
      case 'professional':
        return <Crown className="h-5 w-5" />
      case 'competition':
        return <Medal className="h-5 w-5" />
      default:
        return <Award className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'academic':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'research':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
      case 'professional':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'competition':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
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
              {getAwardIcon(award.category)}
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {award.title}
              </CardTitle>
              <CardDescription className="font-medium text-primary">
                {award.organization}
              </CardDescription>
            </div>
          </div>
          <Badge className={getTypeColor(award.category)}>
                  {award.category}
                </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {award.description}
        </p>
        
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{award.year}</span>
          </div>


        </div>


      </CardContent>
    </Card>
  )
}

export default function AwardsPage() {
  const awardsByType = awards.reduce((acc, award) => {
    if (!acc[award.category]) {
          acc[award.category] = []
        }
        acc[award.category].push(award)
    return acc
  }, {} as Record<string, typeof awards>)

  const totalAwards = awards.length

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Trophy className="h-4 w-4" />
            <span className="text-sm font-medium">Awards & Achievements</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Academic Excellence &{' '}
            <span className="text-gradient">Recognition</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of awards, scholarships, and recognitions earned throughout my academic journey, 
            reflecting dedication to excellence and continuous learning.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{totalAwards}</div>
              <div className="text-muted-foreground">Total Awards</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {Object.keys(awardsByType).length}
              </div>
              <div className="text-muted-foreground">Categories</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">
                Multiple
              </div>
              <div className="text-muted-foreground">Total Value</div>
            </CardContent>
          </Card>
        </div>

        {/* Awards by Category */}
        <div className="space-y-12">
          {Object.entries(awardsByType).map(([type, typeAwards]) => (
            <div key={type}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {type === 'Scholarship' && <Crown className="h-5 w-5" />}
                  {type === 'Academic' && <Trophy className="h-5 w-5" />}
                  {type === 'Competition' && <Medal className="h-5 w-5" />}
                  {type === 'Recognition' && <Star className="h-5 w-5" />}
                  {!['Scholarship', 'Academic', 'Competition', 'Recognition'].includes(type) && <Award className="h-5 w-5" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold capitalize">{type} Awards</h2>
                  <p className="text-muted-foreground">
                    {typeAwards.length} award{typeAwards.length !== 1 ? 's' : ''} in this category
                  </p>
                </div>
              </div>
              
              <div className="grid gap-6">
                {typeAwards.map((award, index) => (
                  <AwardCard key={index} award={award} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
              <p className="text-muted-foreground mb-6">
                These achievements reflect my commitment to academic excellence and continuous learning. 
                Let&apos;s discuss how this dedication can contribute to your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/cv">
                    Download CV
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