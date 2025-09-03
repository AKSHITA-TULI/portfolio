import { ExternalLink, Github, Calendar, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "College Event Management System",
      description: "Developed comprehensive backend logic and integrated payment gateway for seamless event management. Features include event registration, payment processing, and administrative dashboard.",
      technologies: ["Java", "MySQL", "HTML", "CSS", "PHP"],
      highlights: [
        "Payment gateway integration",
        "Backend logic development",
        "Database design and management",
        "User authentication system"
      ]
    },
    {
      title: "Smart Dustbin - IoT Project",
      description: "Designed and implemented an IoT-based project using Arduino Uno, sensors, ICs, and jumper wires. Programmed in C to enable real-time data collection and device connectivity.",
      technologies: ["Arduino Uno", "C Programming", "IoT Sensors", "Hardware Integration"],
      highlights: [
        "Real-time data collection",
        "Sensor integration",
        "Arduino programming",
        "IoT connectivity solutions"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-card group">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4 text-primary" />
                      Key Highlights
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;