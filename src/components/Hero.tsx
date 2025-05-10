import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10 dark:to-primary/5 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="space-y-4 md:space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
            <span className="text-brand-blue">Hello, I'm </span>
            <span className="block">Vithusan</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
            Undergraduate Computer Science Student & Aspiring Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl max-w-2xl">
            I enjoy building web applications using modern technologies like React, Node.js, and Django. 
            Passionate about problem-solving, clean design, and delivering impactful user experiences.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
