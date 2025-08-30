"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  BookOpen, 
  GraduationCap, 
  Search, 
  Filter, 
  Award, 
  Calendar, 
  Clock,
  Code,
  Database,
  Cpu,
  Globe,
  Calculator,
  Beaker
} from 'lucide-react'
import { courses, getCoursesByCategory, getCoursesByYear, getCoursesBySemester, searchCourses, getTotalCredits, getGPA } from '@/data'
import { useState, useMemo } from 'react'
import Link from 'next/link'

// Metadata removed - client components cannot export metadata

function CourseCard({ course }: { course: typeof courses[0] }) {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'core':
        return <Cpu className="h-5 w-5" />
      case 'elective':
        return <BookOpen className="h-5 w-5" />
      case 'lab':
        return <Beaker className="h-5 w-5" />
      case 'project':
        return <Code className="h-5 w-5" />
      case 'mathematics':
        return <Calculator className="h-5 w-5" />
      case 'database':
        return <Database className="h-5 w-5" />
      case 'web':
        return <Globe className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'core':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'elective':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'lab':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
      case 'project':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
      case 'mathematics':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  const getGradeColor = (grade: string) => {
    const gradeValue = parseFloat(grade)
    if (gradeValue >= 3.7) return 'text-green-600 dark:text-green-400'
    if (gradeValue >= 3.3) return 'text-blue-600 dark:text-blue-400'
    if (gradeValue >= 3.0) return 'text-yellow-600 dark:text-yellow-400'
    return 'text-orange-600 dark:text-orange-400'
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {getCategoryIcon(course.category)}
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                {course.title}
              </CardTitle>
              <CardDescription className="font-mono text-sm">
                {course.code}
              </CardDescription>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <Badge className={getCategoryColor(course.category)}>
              {course.category}
            </Badge>
            {course.grade && (
              <Badge variant="outline" className={`${getGradeColor(course.grade)} font-bold`}>
                {course.grade}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {course.description && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {course.description}
          </p>
        )}
        
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Year {course.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.semester}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="h-4 w-4" />
            <span>{course.credits} Credit{course.credits !== 1 ? 's' : ''}</span>
          </div>
        </div>



        {course.prerequisites && course.prerequisites.length > 0 && (
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Prerequisites:</span> {course.prerequisites.join(', ')}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedSemester, setSelectedSemester] = useState('all')

  const filteredCourses = useMemo(() => {
    let filtered = courses

    if (searchQuery) {
      filtered = searchCourses(searchQuery)
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => course.category === selectedCategory)
    }

    if (selectedYear !== 'all') {
      filtered = filtered.filter(course => course.year === selectedYear)
    }

    if (selectedSemester !== 'all') {
      filtered = filtered.filter(course => course.semester === selectedSemester)
    }

    return filtered
  }, [searchQuery, selectedCategory, selectedYear, selectedSemester])

  const coursesByCategory = courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = []
    }
    acc[course.category].push(course)
    return acc
  }, {} as Record<string, typeof courses>)

  const totalCourses = courses.length
  const totalCredits = getTotalCredits()
  const gpa = getGPA()
  const categories = Object.keys(coursesByCategory)

  const years = Array.from(new Set(courses.map(course => course.year))).sort()
  const semesters = Array.from(new Set(courses.map(course => course.semester)))

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm font-medium">Academic Coursework</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Academic{' '}
            <span className="text-gradient">Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my academic coursework in Computer Science and Engineering, 
            showcasing the breadth and depth of my educational foundation.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{totalCourses}</div>
              <div className="text-muted-foreground">Total Courses</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalCredits}</div>
              <div className="text-muted-foreground">Total Credits</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">{gpa}</div>
              <div className="text-muted-foreground">CGPA</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">{categories.length}</div>
              <div className="text-muted-foreground">Categories</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter Courses
            </CardTitle>
            <CardDescription>
              Search and filter courses by category, year, semester, or keywords
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toString()}>
                      Year {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger>
                  <SelectValue placeholder="Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Semesters</SelectItem>
                  {semesters.map(semester => (
                    <SelectItem key={semester} value={semester}>
                      {semester}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {(searchQuery || selectedCategory !== 'all' || selectedYear !== 'all' || selectedSemester !== 'all') && (
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredCourses.length} of {totalCourses} courses
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                    setSelectedYear('all')
                    setSelectedSemester('all')
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or clearing the filters.
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
                setSelectedYear('all')
                setSelectedSemester('all')
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Academic Progress */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <div className="text-center mb-6">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">{gpa}</div>
                  <div className="text-sm text-muted-foreground">Cumulative GPA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{totalCredits}</div>
                  <div className="text-sm text-muted-foreground">Credits Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {Math.round((courses.filter(c => c.grade && parseFloat(c.grade) >= 3.7).length / courses.filter(c => c.grade).length) * 100)}%
                  </div>
                  <div className="text-sm text-muted-foreground">A Grade Courses</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Strong Academic Foundation</h3>
              <p className="text-muted-foreground mb-6">
                This comprehensive coursework has provided me with a solid foundation in computer science 
                principles, practical skills, and problem-solving abilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/projects">
                    View My Projects
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/skills">
                    Technical Skills
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