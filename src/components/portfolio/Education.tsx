import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "Bachelor's of Computer Applications",
      institution: "Chandigarh University",
      period: "2022-2025",
      cgpa: "8.2",
      description: "Comprehensive program covering software development, database management, and system analysis."
    },
    {
      degree: "Class XI - Medical Stream",
      institution: "Gurdaspur Public School",
      period: "2018-2019",
      subjects: ["Biology", "Physics", "Chemistry", "Mathematics", "English"],
      board: "CBSE"
    }
  ];

  const certifications = [
    "React JS - Coursera",
    "Networking Fundamentals - Coursera", 
    "Digital Marketing Foundation & Reports Analytics - Chandigarh University",
    "Leadership & Time Management - LinkedIn"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Education & Certifications</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="portfolio-card">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-primary">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {edu.institution}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    
                    {edu.cgpa && (
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          CGPA: {edu.cgpa}
                        </Badge>
                      </div>
                    )}
                    
                    {edu.board && (
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-primary text-primary">
                          {edu.board}
                        </Badge>
                      </div>
                    )}
                    
                    {edu.description && (
                      <p className="text-sm text-foreground/80">
                        {edu.description}
                      </p>
                    )}
                    
                    {edu.subjects && (
                      <div>
                        <p className="text-sm font-medium mb-2">Subjects:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subject, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Certifications & Courses
            </h3>
            
            <Card className="portfolio-card">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="portfolio-card bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
              <div className="text-center space-y-4">
                <Award className="w-12 h-12 text-primary mx-auto" />
                <h4 className="text-xl font-bold">Continuous Learning</h4>
                <p className="text-foreground/80">
                  Committed to staying updated with the latest technologies and industry best practices through continuous learning and professional development.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;