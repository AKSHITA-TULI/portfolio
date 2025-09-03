import { Briefcase, Calendar, MapPin, Building } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Customer Care Executive - Order Support Team",
      company: "Teleperformance - Apple Inc.",
      location: "Mohali",
      period: "May 2024 - March 2025",
      description: "Provided comprehensive order support to multinational clients across Canada, the US, and Mexico, efficiently resolving complex customer inquiries and ensuring a seamless service experience. Developed advanced problem-solving and cross-cultural communication skills while consistently maintaining high standards of customer satisfaction in a dynamic, fast-paced environment.",
      achievements: [
        "Managed multinational client support across 3 countries",
        "Resolved complex customer inquiries efficiently",
        "Maintained high customer satisfaction standards",
        "Developed cross-cultural communication skills"
      ]
    },
    {
      title: "Python Programming Intern",
      company: "Infowiz",
      location: "Remote",
      period: "June 2023 - March 2024",
      description: "Gained hands-on experience with core Python concepts such as functions, loops, file handling, and OOP. Worked on small-scale automation projects and data processing tasks.",
      achievements: [
        "Developed reusable Python scripts for automation",
        "Worked on data processing tasks",
        "Gained expertise in OOP concepts",
        "Created automation solutions for administrative tasks"
      ]
    },
    {
      title: "Data Interpretation Analyst",
      company: "TTEC",
      location: "Mohali",
      period: "Jan 2022 - Jan 2023",
      description: "Participated in a structured data interpretation program designed to simulate real-world analytics scenarios. Worked with healthcare and customer support datasets to identify actionable trends and patterns.",
      achievements: [
        "Analyzed healthcare and customer support datasets",
        "Used MS Excel, Power BI, and SQL for data analysis",
        "Created dashboards for decision-making processes",
        "Identified actionable trends and patterns"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-surface to-background">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-5 h-5 bg-primary rounded-full shadow-glow border-2 border-background"></div>
                  
                  <Card className="ml-20 portfolio-card">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-primary">
                          {exp.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-foreground/80 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;