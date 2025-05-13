import { Github, ExternalLink } from "lucide-react";
const Projects = () => {
  const projects = [
    {
      title: "Doctor Appointment System",
      image: "https://static.vecteezy.com/system/resources/previews/016/699/936/non_2x/book-doctor-appointment-online-flat-banner-template-making-visit-poster-leaflet-printable-color-designs-editable-flyer-page-with-text-space-vector.jpg",
      description: "A full-stack system to manage doctor appointments, token numbers, patient records, and schedules.",
      technologies: ["Django", "Next.js", "PostgreSQL", "Tailwind CSS"],
      githubFrontend: "https://github.com/vithusan19/doctor-appointment",
      demo: "#",
    },
    {
      title: "EcoRide Carpooling Platform",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1000&q=80",
      description: "A web app to book and offer carpool rides with real-time booking and admin panel features.",
      technologies: ["React", "PHP", "MySQL", "Postman API"],
      githubFrontend: "https://github.com/Vithusan19/EcoRide",
      githubBackend: "https://github.com/Vithusan19/ecoRide-Backend",
      demo: "#",
    },
    {
      title: "University Event Management",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
      description: "A university-focused platform for organizing and registering for academic events and workshops.",
      technologies: ["HTML", "CSS", "JavaScript", "JSP", "Java", "SQL"],
      githubFrontend: "https://github.com/Vithusan19/UniversityEventManagementSystem",
      demo: "#",
    },
    {
      title: "Food Delivery System",
       image: "https://nova.novalac.me/wp-content/uploads/2019/06/fast-food.jpg",
      description: "Online food ordering system with user-side and restaurant-side views.",
      technologies: ["Next.js", "Spring Boot", "MySQL", "Tailwind CSS"],
      githubFrontend: "https://github.com/vithusan19/food-delivery-frontend",
      githubBackend: "https://github.com/Vithusan19/Food_Backend",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-heading">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                <div className="flex gap-3 flex-wrap">
                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                      aria-label="Frontend Repository"
                      title="Frontend"
                    >
                      <Github size={18} />
                      <span className="sr-only">Frontend</span>
                    </a>
                  )}
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                      aria-label="Backend Repository"
                      title="Backend"
                    >
                      <Github size={18} />
                      <span className="sr-only">Backend</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 font-heading">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 rounded-full bg-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
