import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import SearchBar from '../components/ui/SearchBar';
import FilterButton from '../components/ui/FilterButton';
import { projectsData, categories, Project } from '../data/projectsData';
import { Github, ExternalLink, Clock, User } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || 
                            project.category === selectedCategory.toLowerCase();
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.longDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(tech => tech.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Mis Proyectos"
            subtitle="Una muestra de mis proyectos académicos y personales que destacan mis habilidades e intereses"
            centered={true}
          />
          
          <div className="mt-10 mb-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-between">
              <div className="order-2 sm:order-1 overflow-x-auto py-2">
                <div className="flex space-x-3">
                  {categories.map((category) => (
                    <FilterButton
                      key={category}
                      active={selectedCategory === category}
                      label={category}
                      onClick={() => setSelectedCategory(category)}
                    />
                  ))}
                </div>
              </div>
              <div className="order-1 sm:order-2">
                <SearchBar 
                  placeholder="Buscar proyectos..."
                  onSearch={handleSearch}
                />
              </div>
            </div>
          </div>
          
          <AnimatePresence>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="card group hover:shadow-lg"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <span className="inline-block px-2 py-1 bg-accent-600 rounded-full text-xs font-medium uppercase mb-2">
                            {project.category}
                          </span>
                          <h3 className="font-bold text-xl">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-neutral-600 text-sm mb-4">
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span>{project.role}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{project.duration}</span>
                        </div>
                      </div>
                      <p className="text-neutral-700 mb-4 line-clamp-3">{project.description}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            style={{ backgroundColor: tech.color }}
                            className="inline-block px-2 py-1 text-white rounded-full text-xs font-medium"
                          >
                            {tech.name}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="inline-block px-2 py-1 bg-neutral-200 text-neutral-800 rounded-full text-xs font-medium">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-6 pt-0 flex justify-between items-center border-t border-neutral-100">
                      <div className="flex space-x-3">
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-700 hover:text-neutral-900 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-700 hover:text-neutral-900 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                      <button
                        className="text-sm text-accent-600 hover:text-accent-800 font-medium flex items-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        Ver Detalles
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <p className="text-neutral-600 text-lg">No se encontraron proyectos que coincidan con tus criterios.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSearchQuery('');
                    }}
                    className="mt-4 text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Limpiar filtros
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <div className="h-64 md:h-80 overflow-hidden rounded-t-xl">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <button
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-accent-600 text-white rounded-full text-sm font-medium uppercase">
                      {selectedProject.category}
                    </span>
                    <div className="flex items-center text-neutral-600">
                      <User size={16} className="mr-1" />
                      <span>{selectedProject.role}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Clock size={16} className="mr-1" />
                      <span>{selectedProject.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{selectedProject.title}</h3>
                  <p className="text-neutral-700 mb-6">{selectedProject.longDescription}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3">Tecnologías Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          style={{ backgroundColor: tech.color }}
                          className="inline-block px-3 py-1.5 text-white rounded-full text-sm font-medium"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3">Características Principales</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-neutral-700">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-accent bg-accent-600 text-white hover:bg-accent-700 focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 inline-flex items-center"
                      >
                        Ver Demo en Vivo <ExternalLink size={16} className="ml-2" />
                      </a>
                    )}
                    {selectedProject.repoUrl && (
                      <a
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline inline-flex items-center"
                      >
                        Ver Repositorio <Github size={16} className="ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Projects;