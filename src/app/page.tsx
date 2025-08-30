import Link from "next/link";
import { Download, Mail, ArrowRight, MapPin, GraduationCap } from "lucide-react";

import { personalInfo } from "@/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-8 animate-fade-in">
            {/* Profile Image Placeholder */}
            <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-primary-foreground">
              AH
            </div>
            
            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                {personalInfo.title}
              </p>
            </div>
            
            {/* Value Statement */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {personalInfo.valueStatement}
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Badge variant="secondary" className="px-4 py-2">
                <GraduationCap className="h-4 w-4 mr-2" />
                CGPA: {personalInfo.profileStats.cgpa}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                {personalInfo.location}
              </Badge>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="text-base">
                <Link href="/cv">
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/contact">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Overview Section */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore my academic journey, research interests, and professional projects in water resources engineering.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <Link href="/research">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Research</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Thesis and research interests in hydraulic modeling and flood risk assessment.
                    </p>
                    <div className="flex items-center justify-center text-sm text-primary group-hover:text-primary/80">
                      Learn more <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <Link href="/projects">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="h-6 w-6 bg-primary rounded-sm" />
                    </div>
                    <h3 className="font-semibold mb-2">Projects</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Academic and industry projects including EIA studies and GIS applications.
                    </p>
                    <div className="flex items-center justify-center text-sm text-primary group-hover:text-primary/80">
                      View projects <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <Link href="/skills">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="h-2 w-2 bg-primary rounded-full" />
                        <div className="h-2 w-2 bg-primary/60 rounded-full" />
                        <div className="h-2 w-2 bg-primary/60 rounded-full" />
                        <div className="h-2 w-2 bg-primary rounded-full" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">Skills</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Technical expertise in HEC-RAS, GIS, programming, and engineering software.
                    </p>
                    <div className="flex items-center justify-center text-sm text-primary group-hover:text-primary/80">
                      View skills <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <Link href="/training">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="h-6 w-6 border-2 border-primary rounded-full flex items-center justify-center">
                        <div className="h-2 w-2 bg-primary rounded-full" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">Training</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Industrial training experience at Bangladesh Water Development Board.
                    </p>
                    <div className="flex items-center justify-center text-sm text-primary group-hover:text-primary/80">
                      View experience <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
         </div>
       </section>
     </div>
  );
}
