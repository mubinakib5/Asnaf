import Link from "next/link"
import { Mail, MapPin, Linkedin, Github, ExternalLink } from "lucide-react"

import { personalInfo, navigation } from "@/data"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const quickLinks = navigation.slice(0, 6)

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-sm">
                AH
              </div>
              <span className="font-bold text-lg">{personalInfo.name}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              {personalInfo.title} • {personalInfo.bio.slice(0, 120)}...
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {personalInfo.socialLinks.linkedin && (
                <Button variant="ghost" size="icon" asChild>
                  <a 
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {personalInfo.socialLinks.github && (
                <Button variant="ghost" size="icon" asChild>
                  <a 
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {personalInfo.socialLinks.researchgate && (
                <Button variant="ghost" size="icon" asChild>
                  <a 
                    href={personalInfo.socialLinks.researchgate}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ResearchGate Profile"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Academic Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Academic</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{personalInfo.profileStats.university}</p>
              <p>CGPA: {personalInfo.profileStats.cgpa}</p>
              <p>Rank: {personalInfo.profileStats.rank}</p>
            </div>
            <Button asChild size="sm" variant="outline">
              <Link href="/cv">Download CV</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-8" />
        
        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built by Mubin Akib
          </p>
        </div>
      </div>
    </footer>
  )
}