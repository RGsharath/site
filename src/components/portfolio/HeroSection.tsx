  "use client";

  import { useState, useEffect } from "react";
  import { Button } from "@/components/ui/button";
  import { Download, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

  const HeroSection = () => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = "AI/ML Data Science Engineer";

    useEffect(() => {
      if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + fullText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, fullText]);

    const handleDownloadCV = () => {
      // In a real implementation, this would download the actual CV
      console.log("Downloading CV...");
    };

    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-20 float"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-secondary rounded-full blur-3xl opacity-20 float animate-delay-400"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-neon-cyan rounded-full blur-2xl opacity-30 float animate-delay-600"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-6 sm:space-y-8 animate-slide-up">
            {/* Main heading */}
              <div className="space-y-3 sm:space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-primary via-pink-500 to-cyan-400 bg-clip-text text-transparent block sm:inline">
                Sharath
                </span>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-primary bg-clip-text text-transparent block sm:inline sm:ml-3">
                Kumar RG
                </span>
              </h1>

              {/* Typing animation */}
              <div className="h-10 sm:h-12 flex items-center justify-center">
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono text-center px-4">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground animate-slide-up animate-delay-200">
              <MapPin className="w-4 h-4" />
              <span className="text-sm sm:text-base">Chennai, India</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-400 px-4">
              2+ years of experience building scalable ML and DL solutions using TensorFlow, PyTorch, 
              and cloud-native tools. Specialized in facial recognition, time series forecasting, 
              and LLM-based automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up animate-delay-600 px-4">
              <Button 
                onClick={handleDownloadCV}
                className="group bg-gradient-primary hover:shadow-neon transition-all duration-500 px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto flex items-center justify-center"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                <a href="https://drive.google.com/uc?export=download&id=1hitnDhQU43zawtXNgPR5rlyEYGZWAmTT" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Download CV
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="glass hover:bg-primary/10 border-primary/30 px-6 sm:px-8 py-3 text-base sm:text-lg transition-all duration-300 w-full sm:w-auto flex items-center justify-center"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <a href="mailto:sharathkmr2001@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Get In Touch
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6 justify-center animate-slide-up animate-delay-800 px-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/sharath-kumar-rg", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/itssharathheree", label: "Instagram" },
                { icon: Mail, href: "mailto:sharath.kumar2001@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  className="group p-2 sm:p-3 glass rounded-full hover:shadow-glow transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </section>
    );
  };

  export default HeroSection; 