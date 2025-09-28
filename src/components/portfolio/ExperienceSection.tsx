"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Users, Trophy, BookOpen } from "lucide-react";

const experienceData = {
  current: {
    company: "Sify Technologies Limited",
    position: "Software Developer",
    location: "Chennai, TamilNadu",
    duration: "July 2023 - Present",
    type: "Full-time",
    description: "Building scalable AI/ML solutions and automating business processes using cutting-edge technologies.",
    achievements: [
      "Built AI-powered visualization tool using LLMs, Python, Flask for data analysis with 90% client satisfaction",
      "Developed high-precision Facial Recognition System to detect duplicate candidate records",
      "Automated mark sheet data extraction using Tesseract and OpenCV, reducing manual human annotation efforts",
      "Orchestrated retailer best mapping with Gaussian Mixture Models, enabling precise geographical insights",
      "Deployed custom ML models to extract text from TIFF/PNG formats, preserving existing records",
      "Enhanced LLMOps Studio with real-time STT and conversation features for secure session management",
      "Led team of 3 for model annotation, training, and evaluation using custom ML pipelines"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Flask", "LLMs", "Computer Vision", "AWS", "Docker"]
  },
  education: {
    institution: "Sri Sairam Engineering College",
    degree: "Bachelor of Engineering in Electronics and Communication Engineering",
    location: "Chennai, TamilNadu", 
    duration: "July 2019 - April 2023",
    cgpa: "8.54",
    type: "Full-time",
    description: "Focused on signal processing, embedded systems, and emerging technologies in AI/ML.",
    achievements: [
      "IEEE College Secretary (2022-2023) - Led international symposiums TECHNOVISIA 2K21, ZENISTA 2K23",
      "Smart India Hackathon Winner - Received 1L Leo Mutha Scholarship for innovative project excellence",
      "IEEE Madras Section Grants - Secured 15K for CAMOBOT thermal rover with OpenCV and building security system using YOLOv5 + GSM",
      "Team Lead for multiple technical projects and workshops on emerging technologies"
    ],
    technologies: ["C++", "Python", "MATLAB", "Embedded Systems", "Signal Processing", "IoT"]
  }
};

const achievements = [
  {
    title: "Team Lead at Sify Technologies",
    description: "Managed a team of 3 for model annotation, training, and evaluation using custom ML pipelines",
    year: "2024",
    icon: Users
  },
  {
    title: "IEEE College Secretary",
    description: "Led international symposiums TECHNOVISIA 2K21, ZENISTA 2K23 with workshops on emerging technologies",
    year: "2022-2023",
    icon: Trophy
  },
  {
    title: "Smart India Hackathon Winner",
    description: "Received 1L Leo Mutha Scholarship for innovative project excellence",
    year: "2023",
    icon: Trophy
  },
  {
    title: "IEEE Madras Section Grants",
    description: "Secured 15K for CAMOROT thermal rover and building security system projects",
    year: "2022",
    icon: BookOpen
  }
];

const publications = [
  "CAMOBOT: Thermal Surveillance Rover with GPS Human Detection - IEEE RAEEEUCI, May 2023",
  "IoT-Based Crude Oil Leak Detector - IEEE IEPCTS, July 2022",
  "Ethanol Level Monitoring System with Cloud Logging - EJAEM Journal, Sept 2022",
  "Augmented Security System for Commercial Buildings - IEEE IC3401, May 2022"
];

const ExperienceSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Professional</span> Journey
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Building impactful AI/ML solutions and leading innovative projects in the tech industry
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 sm:space-y-12">
          {/* Current Position */}
          <Card className={`glass hover:shadow-glow transition-all duration-500 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-2xl">{experienceData.current.position}</CardTitle>
                    <p className="text-base sm:text-xl text-primary font-semibold">{experienceData.current.company}</p>
                  </div>
                </div>
                <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan self-start sm:self-auto">
                  Current
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  {experienceData.current.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  {experienceData.current.location}
                </div>
                <Badge variant="outline" className="glass border-primary/30 text-xs">
                  {experienceData.current.type}
                </Badge>
              </div>
              
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{experienceData.current.description}</p>
            </CardHeader>

            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
              {/* Key Achievements */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">Key Achievements:</h4>
                <div className="grid gap-2 sm:gap-3">
                  {experienceData.current.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 group-hover:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">Technologies Used:</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {experienceData.current.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline" 
                      className="glass border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className={`glass hover:shadow-glow transition-all duration-500 ${inView ? 'animate-slide-up animate-delay-200' : 'opacity-0'}`}>
            <CardHeader className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-secondary rounded-lg">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg sm:text-2xl leading-tight">{experienceData.education.degree}</CardTitle>
                    <p className="text-base sm:text-xl text-primary font-semibold">{experienceData.education.institution}</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <Badge className="bg-gradient-primary text-primary-foreground mb-2 text-xs sm:text-sm">
                    CGPA: {experienceData.education.cgpa}
                  </Badge>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  {experienceData.education.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  {experienceData.education.location}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{experienceData.education.description}</p>
            </CardHeader>

            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
              {/* Achievements */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">Academic Achievements:</h4>
                <div className="grid gap-2 sm:gap-3">
                  {experienceData.education.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 group-hover:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">Academic Focus:</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {experienceData.education.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline" 
                      className="glass border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership & Achievements */}
        <div className={`mt-12 sm:mt-16 ${inView ? 'animate-slide-up animate-delay-400' : 'opacity-0'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            <span className="gradient-text">Leadership</span> & Achievements
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {achievements.map(({ title, description, year, icon: Icon }, index) => (
              <Card key={title} className="glass hover:shadow-glow transition-all duration-500 group">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                        <h4 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                          {title}
                        </h4>
                        <Badge variant="outline" className="glass border-primary/30 text-xs self-start">
                          {year}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className={`mt-12 sm:mt-16 ${inView ? 'animate-slide-up animate-delay-600' : 'opacity-0'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            <span className="gradient-text">Research</span> Publications
          </h3>
          
          <div className="grid gap-3 sm:gap-4">
            {publications.map((publication, index) => (
              <Card key={index} className="glass hover:shadow-glow transition-all duration-500 group">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold group-hover:scale-110 transition-transform duration-300 flex-shrink-0 text-xs sm:text-sm">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                      {publication}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;