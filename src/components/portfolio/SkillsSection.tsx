"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Code, 
  Database, 
  Cloud, 
  GitBranch, 
  Cpu,
  Award,
  Zap
} from "lucide-react";

const skillsData = {
  "AI/ML & Data Science": {
    icon: Brain,
    color: "neon-purple",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Keras"]
  },
  "Web Development": {
    icon: Code,
    color: "neon-cyan",
    skills: ["JavaScript", "ReactJS", "NextJS", "HTML5", "CSS3", "Tailwind CSS", "Flask", "FastAPI"]
  },
  "Databases": {
    icon: Database,
    color: "neon-blue",
    skills: ["SQL", "PostgreSQL", "MongoDB", "Redis", "ElasticSearch"]
  },
  "Cloud & DevOps": {
    icon: Cloud,
    color: "neon-pink",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Jenkins", "CI/CD"]
  },
  "Version Control": {
    icon: GitBranch,
    color: "neon-cyan",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket"]
  },
  "AutoML Platforms": {
    icon: Cpu,
    color: "neon-purple",
    skills: ["Aizen Studio", "MS Copilot", "Power Automate"]
  }
};

const certifications = [
  "AWS Certified Developer Associate [DVA-C02]",
  "Neo4j Certified Professional",
];

const SkillsSection = () => {
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
            <span className="gradient-text">Technical</span> Arsenal
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Cutting-edge technologies and frameworks I use to build intelligent solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {Object.entries(skillsData).map(([category, { icon: Icon, color, skills }], index) => (
            <Card 
              key={category}
              className={`glass p-4 sm:p-6 hover:shadow-glow transition-all duration-500 group ${
                inView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className={`p-2 rounded-lg bg-${color}/20 group-hover:bg-${color}/30 transition-colors duration-300`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${color}`} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="outline" 
                    className="glass border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300 text-xs sm:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className={`text-center ${inView ? 'animate-slide-up animate-delay-600' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <h3 className="text-xl sm:text-2xl font-bold">Certifications</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {certifications.map((cert) => (
              <Badge 
                key={cert}
                className="bg-gradient-primary text-primary-foreground px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium hover:shadow-neon transition-all duration-300"
              >
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 ${inView ? 'animate-slide-up animate-delay-800' : 'opacity-0'}`}>
          {[
            { label: "Years of Experience", value: "2+", icon: "🚀" },
            { label: "AI/ML Projects", value: "10+", icon: "🤖" },
            { label: "Publications", value: "5+", icon: "📄" }
          ].map(({ label, value, icon }, index) => (
            <div key={label} className="text-center glass p-4 sm:p-6 rounded-lg hover:shadow-glow transition-all duration-500">
              <div className="text-2xl sm:text-3xl mb-2">{icon}</div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">{value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;