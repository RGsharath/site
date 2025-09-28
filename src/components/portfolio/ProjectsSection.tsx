"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Eye } from "lucide-react";

const projects = [
  {
    title: "RegiGuard Candidate Face Duplication Identifier",
    description: "AI-powered application to detect fraudulent exam entries by analyzing candidate images through the face detection pipeline. Features custom-trained machine learning model for high-precision face detection with dashboard integration.",
    technologies: ["React", "Next.js", "Flask", "Computer Vision", "Machine Learning", "AI"],
    date: "May 2025",
    category: "AI/ML",
    status: "Featured",
    highlights: ["Batch uploads", "Facial recognition pipeline", "Real-time dashboard"]
  },
  {
    title: "Legacy Newspaper Digitization",
    description: "Developed custom article-level object detection models using YOLOv8 and Faster R-CNN on manually annotated data. Automated cropping with Python scripts for high-accuracy article segmentation.",
    technologies: ["YOLOv8", "Faster R-CNN", "Python", "Robomaker", "GCP"],
    date: "March 2025",
    category: "Computer Vision",
    status: "Recent",
    highlights: ["Custom object detection", "Manual annotation", "Automated processing"]
  },
  {
    title: "Graphmate Data Visualizer",
    description: "Large Language Model-powered application for analyzing and transforming data from CSV and XLS files. Features interactive charts with dynamic, scalable dashboards and data-driven insights.",
    technologies: ["LLMs", "Next.js", "TailwindCSS", "Flask", "Llama 3.1 70B", "Echarts", "Superset"],
    date: "December 2024",
    category: "Data Science",
    status: "Production",
    highlights: ["LLM integration", "Interactive charts", "Scalable dashboards"]
  },
  {
    title: "Optical Character Recognition Solution",
    description: "Automated OCR services for processing marksheets and newspaper images. Utilizing Python, Flask, and SSOCR for efficient text extraction with manual quality verification.",
    technologies: ["Python", "Flask", "OCR", "Computer Vision"],
    date: "March 2024",
    category: "OCR",
    status: "Deployed",
    highlights: ["Automated text extraction", "Quality verification", "Batch processing"]
  },
  {
    title: "MNS Ticket Forecasting",
    description: "Time series forecasting system for managed network ticketing using Python, SQL, and AutoML to predict ServiceNow ticket volumes and enhance resource planning.",
    technologies: ["Python", "SQL", "AutoML", "Time Series", "ServiceNow"],
    date: "October 2023",
    category: "Forecasting",
    status: "Production",
    highlights: ["Time series analysis", "Resource optimization", "AutoML integration"]
  },
  {
    title: "Adavanced Security System",
    description: "FORTIFIED SECURITY SYSTEM with application details and real-time monitoring capabilities for comprehensive security management.",
    technologies: ["Security", "Real-time Monitoring", "System Design"],
    date: "December 2022",
    category: "Security",
    status: "Patent",
    highlights: ["Real-time monitoring", "Security system", "Fortified protection"]
  }
];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Featured": return "bg-gradient-primary";
      case "Recent": return "bg-neon-cyan/20 text-neon-cyan border-neon-cyan";
      case "Production": return "bg-neon-blue/20 text-neon-blue border-neon-blue";
      case "Deployed": return "bg-accent/20 text-accent border-accent";
      case "Patent": return "bg-neon-pink/20 text-neon-pink border-neon-pink";
      default: return "bg-muted";
    }
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Featured</span> Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Innovative AI/ML solutions and applications that showcase technical expertise and real-world impact
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`
                ${selectedCategory === category 
                  ? 'bg-gradient-primary shadow-glow' 
                  : 'glass border-primary/30 hover:border-primary hover:shadow-glow'
                } transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-2
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className={`
                glass hover:shadow-glow transition-all duration-500 group overflow-hidden
                ${inView ? 'animate-slide-up' : 'opacity-0'}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`${getStatusColor(project.status)} border text-xs`}>
                    {project.status}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {project.date}
                  </div>
                </div>
                
                <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300 leading-tight">
                  {project.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                {/* Key Highlights */}
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-primary mb-2">Key Features:</h4>
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline" 
                      className="glass border-primary/30 text-xs hover:border-primary transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="glass border-primary/30 text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;