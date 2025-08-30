import { GraduationCap, MapPin, Calendar, Award, Target, BookOpen } from "lucide-react";

import { personalInfo, getTotalCredits, courses } from "@/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground">
                Get to know my academic journey and research interests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-6xl space-y-12">
            
            {/* Bio Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Biography
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      {personalInfo.bio}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Value Statement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {personalInfo.valueStatement}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Info Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{personalInfo.title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">CGPA: {personalInfo.profileStats.cgpa}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Class Rank: {personalInfo.profileStats.rank}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Academic Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {getTotalCredits()}
                        </div>
                        <div className="text-xs text-muted-foreground">Total Credits</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {courses.length}
                        </div>
                        <div className="text-xs text-muted-foreground">Courses</div>
                      </div>
                    </div>
                    <Separator />
                    <div className="text-center">
                      <div className="text-lg font-semibold">
                        Water Resources Engineering
                      </div>
                      <div className="text-xs text-muted-foreground">Specialization</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Research Interests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Research Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Hydraulic Modeling</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced computational fluid dynamics and numerical modeling techniques for water flow analysis and prediction.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">HEC-RAS</Badge>
                      <Badge variant="secondary" className="text-xs">CFD</Badge>
                      <Badge variant="secondary" className="text-xs">Numerical Methods</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Flood Risk Assessment</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive flood hazard mapping, vulnerability analysis, and risk mitigation strategies for urban and rural areas.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">Risk Analysis</Badge>
                      <Badge variant="secondary" className="text-xs">Hazard Mapping</Badge>
                      <Badge variant="secondary" className="text-xs">Mitigation</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">GIS Applications</h4>
                    <p className="text-sm text-muted-foreground">
                      Spatial analysis and geographic information systems for water resources management and environmental planning.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">ArcGIS</Badge>
                      <Badge variant="secondary" className="text-xs">Spatial Analysis</Badge>
                      <Badge variant="secondary" className="text-xs">Remote Sensing</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Water Resources Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Sustainable water resource planning, allocation, and management strategies for diverse stakeholder needs.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">Sustainability</Badge>
                      <Badge variant="secondary" className="text-xs">Planning</Badge>
                      <Badge variant="secondary" className="text-xs">Policy</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Environmental Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      Environmental impact assessment and sustainable development practices in water infrastructure projects.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">EIA</Badge>
                      <Badge variant="secondary" className="text-xs">Sustainability</Badge>
                      <Badge variant="secondary" className="text-xs">Infrastructure</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Climate Change Adaptation</h4>
                    <p className="text-sm text-muted-foreground">
                      Climate resilience strategies and adaptation measures for water systems under changing environmental conditions.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">Climate Resilience</Badge>
                      <Badge variant="secondary" className="text-xs">Adaptation</Badge>
                      <Badge variant="secondary" className="text-xs">Sustainability</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Academic Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Educational Background</h4>
                    <div className="space-y-3">
                      <div className="border-l-2 border-primary/20 pl-4">
                        <div className="font-medium">Bachelor of Science in Water Resources Engineering</div>
                        <div className="text-sm text-muted-foreground">Chittagong University of Engineering & Technology (CUET)</div>
                        <div className="text-sm text-muted-foreground">CGPA: {personalInfo.profileStats.cgpa} | Rank: {personalInfo.profileStats.rank}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Key Achievements</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm">High academic performance with {personalInfo.profileStats.cgpa} CGPA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm">Ranked {personalInfo.profileStats.rank} in class</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm">Completed {courses.length} courses with {getTotalCredits()} credits</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm">Specialized in Water Resources Engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'About - ASNAFUL HUDA ASNAF',
  description: 'Learn about ASNAFUL HUDA ASNAF\'s academic journey, research interests, and expertise in water resources engineering.',
};