import { Calendar, User, BookOpen, ExternalLink, FileText, Target } from "lucide-react";

import { researchTopics, thesis } from "@/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Research
              </h1>
              <p className="text-xl text-muted-foreground">
                Exploring innovative solutions in water resources engineering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-6xl space-y-12">
            
            {/* Thesis Section */}
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">Undergraduate Thesis</h2>
                <p className="text-muted-foreground">
                  My primary research contribution during undergraduate studies
                </p>
              </div>
              
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl leading-tight">
                        {thesis.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>Supervised by {thesis.supervisor}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{thesis.year}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="default" className="ml-4">
                      {thesis.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      {thesis.abstract}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Key Objectives
                    </h4>
                    <div className="text-muted-foreground text-sm">
                      This research focuses on advanced hydraulic modeling and environmental impact assessment.
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {thesis.keywords.map((keyword, index) => (
                        <Badge key={index} variant="secondary">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View Abstract
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Full Paper
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-12" />

            {/* Research Topics Section */}
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">Research Interests</h2>
                <p className="text-muted-foreground">
                  Areas of focus and ongoing research interests
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchTopics.map((topic, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                            {topic.title}
                          </CardTitle>
                          <Badge variant={topic.category === 'thesis' ? 'default' : 'secondary'} className="w-fit">
                            {topic.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {topic.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm font-medium mb-2">Tags</h5>
                          <div className="flex flex-wrap gap-1">
                            {topic.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                          Learn More
                          <ExternalLink className="h-3 w-3 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Research Impact Section */}
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-center">Research Impact & Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Research Areas</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">1</div>
                    <div className="text-sm text-muted-foreground">Thesis Project</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">∞</div>
                    <div className="text-sm text-muted-foreground">Future Possibilities</div>
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="text-center space-y-2">
                  <h4 className="font-semibold">Research Philosophy</h4>
                  <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                    Committed to advancing sustainable water resources management through innovative engineering solutions, 
                    interdisciplinary collaboration, and evidence-based research that addresses real-world challenges.
                  </p>
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
  title: 'Research - ASNAFUL HUDA ASNAF',
  description: 'Explore ASNAFUL HUDA ASNAF\'s research work in water resources engineering, including thesis and research interests.',
};