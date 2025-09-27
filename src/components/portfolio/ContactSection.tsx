"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Calendar,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = {
  email: "sharathkmr2001@gmail.com",
  phone: "7010139569",
  location: "Alwarpet, Chennai - 600018",
  linkedin: "https://linkedin.com/in/sharath-kumar-rg",
  availability: "Available for full-time opportunities"
};

const ContactSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openEmailClient = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const openLinkedIn = () => {
    window.open(contactInfo.linkedin, '_blank');
  };

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's</span> Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative AI/ML projects or discuss exciting opportunities
          </p>
        </div>

        {/* Contact Information - Centered */}
        <div className="flex justify-center mb-16">
          <div className={`w-full max-w-2xl space-y-8 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {/* Quick Contact */}
            <Card className="glass hover:shadow-glow transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 p-3 glass rounded-lg hover:shadow-glow transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium group-hover:text-primary transition-colors duration-300">
                        {contactInfo.email}
                      </p>
                    </div>
                  </a>

                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 p-3 glass rounded-lg hover:shadow-glow transition-all duration-300 group"
                  >
                    <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium group-hover:text-primary transition-colors duration-300">
                        {contactInfo.phone}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 glass rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-sm">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Availability</span>
                  </div>
                  <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan">
                    {contactInfo.availability}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass hover:shadow-glow transition-all duration-500">
              <CardHeader>
                <CardTitle>Connect on Social</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    onClick={openLinkedIn}
                    variant="outline"
                    className="w-full glass border-primary/30 hover:border-primary hover:shadow-glow justify-start transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 mr-3 text-primary" />
                    <a href="https://linkedin.com/in/sharath-kumar-rg" target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full glass border-primary/30 hover:border-primary hover:shadow-glow justify-start transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5 mr-3 text-primary" />
                    <a href="https://instagram.com/itssharathheree" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center ${inView ? 'animate-slide-up animate-delay-600' : 'opacity-0'}`}>
          <Card className="glass hover:shadow-glow transition-all duration-500 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Build Something <span className="gradient-text">Amazing</span>?
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether it's an AI/ML project, web application, or innovative tech solution, 
                I'm here to help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-primary hover:shadow-neon transition-all duration-500"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  <a href="https://calendar.app.google/6zoURBBquyov19Ep8" target="_blank" rel="noopener noreferrer">
                    Schedule a Call
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="glass border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <a href="mailto:sharathkmr2001@gmail.com" target="_blank" rel="noopener noreferrer">
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;