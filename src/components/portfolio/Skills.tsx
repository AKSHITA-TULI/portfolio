import { Code, Database, Globe, Wrench, BarChart, Network } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "C"]
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "React.js", "Node.js"]
    },
    {
      icon: Database,
      title: "Database Management",
      skills: ["SQL", "MySQL", "MongoDB"]
    },
    {
      icon: Wrench,
      title: "Tools & Systems",
      skills: ["Windows", "Linux", "SDLC", "Git"]
    },
    {
      icon: BarChart,
      title: "Data & Analytics",
      skills: ["Data Analysis", "Data Modeling", "Power BI", "Excel"]
    },
    {
      icon: Network,
      title: "Networking & Support",
      skills: ["Network Configuration", "Troubleshooting", "WAN/LAN Management", "Technical Support"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-dark-surface">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="portfolio-card group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;