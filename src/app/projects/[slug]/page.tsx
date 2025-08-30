import { ArrowLeft, Calendar, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjectBySlug, projects } from "@/data";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </section>

      {/* Project Header */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant={project.category === 'academic' ? 'default' :
                    project.category === 'industry' ? 'secondary' :
                      project.category === 'research' ? 'outline' : 'destructive'}>
                    {project.category}
                  </Badge>
                  <Badge variant="outline">{project.year}</Badge>
                  {project.status && (
                    <Badge variant={project.status === 'completed' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {project.title}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">

                {/* Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle>Project Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
                {/* Results */}
                {project.outcomes && project.outcomes.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Results & Outcomes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {project.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">

                {/* Project Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Project Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{project.year}</span>
                    </div>


                  </CardContent>
                </Card>

                {/* Technologies */}
                <Card>
                  <CardHeader>
                    <CardTitle>Technologies Used</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <Badge key={index} variant="secondary">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>




              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <Button asChild variant="outline">
                    <Link href="/projects">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Projects
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/contact">
                      Discuss This Project
                      <ExternalLink className="h-4 w-4 ml-2" />
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

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - ASNAFUL HUDA ASNAF`,
    description: project.description,
  };
}