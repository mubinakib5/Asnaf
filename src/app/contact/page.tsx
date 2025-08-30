import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock,
  Linkedin,
  Github,
  ExternalLink,
  User,
  Building
} from 'lucide-react'
import { personalInfo } from '@/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch for collaboration opportunities, project discussions, or any inquiries. I\'m always open to connecting with fellow developers and potential employers.',
  keywords: ['contact', 'collaboration', 'opportunities', 'hire', 'connect', 'email'],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s{' '}
            <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I&apos;m always interested in new opportunities, collaborations, and meaningful conversations. 
            Whether you have a project in mind or just want to say hello, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Me a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john.doe@example.com" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input 
                      id="subject" 
                      placeholder="What would you like to discuss?" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project, opportunity, or just say hello..." 
                      rows={6}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect on Social</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a 
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors group"
                >
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <div className="flex-1">
                    <div className="font-medium group-hover:text-primary transition-colors">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Professional network</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
                
                <a 
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors group"
                >
                  <Github className="h-5 w-5" />
                  <div className="flex-1">
                    <div className="font-medium group-hover:text-primary transition-colors">GitHub</div>
                    <div className="text-sm text-muted-foreground">Code repositories</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              </CardContent>
            </Card>

            {/* Academic Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Academic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-medium">{personalInfo.profileStats.university}</div>
                  <div className="text-sm text-muted-foreground">{personalInfo.title}</div>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{personalInfo.profileStats.cgpa}</div>
                    <div className="text-xs text-muted-foreground">CGPA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{personalInfo.profileStats.rank}</div>
                    <div className="text-xs text-muted-foreground">Class Rank</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 text-center">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Quick Response</div>
                    <div className="text-sm text-muted-foreground">
                      I typically respond within 24 hours
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Prefer Other Ways to Connect?</h3>
              <p className="text-muted-foreground mb-6">
                You can also reach out through my social media profiles or download my CV 
                to learn more about my background and experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Email Directly
                  </a>
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