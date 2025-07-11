import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Rocket } from "lucide-react";
import techHeroBg from "@/assets/tech-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${techHeroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-primary/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Next-Gen Technology</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Build the Future
            <br />
            <span className="text-foreground">with Technology</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Harness the power of cutting-edge innovation to transform ideas into reality. 
            Create, innovate, and scale with tools built for tomorrow.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="animate-scale-in">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl" className="animate-scale-in [animation-delay:200ms]">
              Learn More
            </Button>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Developer First</h3>
              <p className="text-sm text-muted-foreground text-center">Built by developers, for developers</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground text-center">Optimized for speed and performance</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:shadow-elegant transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Scale Ready</h3>
              <p className="text-sm text-muted-foreground text-center">From startup to enterprise</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-xl animate-pulse [animation-delay:1s]" />
    </section>
  );
};

export default Hero;