import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-10"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Akshita Tuli
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                BCA Graduate & Tech Enthusiast
              </h2>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
              Resourceful and technically adept BCA graduate with proven expertise in IoT solutions, 
              adept at orchestrating end-to-end projects leveraging Arduino Uno, sensor integration, 
              and C programming. Complemented by professional experience delivering exemplary customer 
              support to a diverse, multinational clientele at Apple.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary shadow-glow">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Projects
              </Button>
            </div>
          </div>
          
          {/* Contact Card */}
          <Card className="portfolio-card space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91-8728059382</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>akshitatuli777@gmail.com</span>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>38-D, Block-38, Amayra City,<br />Kharar, Punjab, 140301</span>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <h4 className="font-semibold mb-3">Languages</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>English: <span className="text-primary">Fluent</span></div>
                <div>French: <span className="text-muted-foreground">Basics</span></div>
                <div>Punjabi: <span className="text-primary">Fluent</span></div>
                <div>Hindi: <span className="text-primary">Fluent</span></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;