import Link from "next/link";
import { Calendar, ExternalLink, Github, ArrowRight, Filter } from "lucide-react";

import { projects, getProjectsByCategory, Project } from "@/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ProjectsPage() {
  const academicProjects = getProjectsByCategory('academic');
  const industryProjects = getProjectsByCategory('industry');
  const researchProjects = getProjectsByCategory('research');

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={project.category === 'academic' ? 'default' : 
                            project.category === 'industry' ? 'secondary' : 
                            project.category === 'research' ? 'outline' : 'destructive'}>
                {project.category}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {project.year}
              </Badge>
              {project.status && (
                <Badge variant={project.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                  {project.status}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="space-y-3">
          <div>
            <h5 className="text-sm font-medium mb-2">Technologies</h5>
            <div className="flex flex-wrap gap-1">
              {project.tools.slice(0, 4).map((tool: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tool}
                </Badge>
              ))}
              {project.tools.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.tools.length - 4} more
                </Badge>
              )}
            </div>
          </div>
          

        </div>
        
        <div className="flex flex-wrap gap-2 pt-4">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={`/projects/${project.slug}`}>
              View Details
              <ArrowRight className="h-3 w-3 ml-2" />
            </Link>
          </Button>

        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Projects
              </h1>
              <p className="text-xl text-muted-foreground">
                A showcase of academic, industry, and research projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-6xl space-y-12">
            
            {/* Project Stats */}
            <Card className="bg-muted/30">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">{projects.length}</div>
                    <div className="text-sm text-muted-foreground">Total Projects</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">{academicProjects.length}</div>
                    <div className="text-sm text-muted-foreground">Academic</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">{industryProjects.length}</div>
                    <div className="text-sm text-muted-foreground">Industry</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">{researchProjects.length}</div>
                    <div className="text-sm text-muted-foreground">Research</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Projects */}
            {academicProjects.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold">Academic Projects</h2>
                  <Badge variant="default">{academicProjects.length}</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {academicProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}

            {/* Industry Projects */}
            {industryProjects.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold">Industry Projects</h2>
                  <Badge variant="secondary">{industryProjects.length}</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {industryProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}

            {/* Research Projects */}
            {researchProjects.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold">Research Projects</h2>
                  <Badge variant="outline">{researchProjects.length}</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {researchProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}



            {/* Call to Action */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Interested in Collaboration?</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    I&apos;m always open to discussing new projects, research opportunities, 
                    or potential collaborations in water resources engineering.
                  </p>
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Get in Touch
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
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
  title: 'Projects - ASNAFUL HUDA ASNAF',
  description: 'Explore ASNAFUL HUDA ASNAF&apos;s portfolio of academic, industry, and research projects in water resources engineering.',
};