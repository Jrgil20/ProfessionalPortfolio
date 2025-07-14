import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import SearchBar from '../components/ui/SearchBar';
import FilterButton from '../components/ui/FilterButton';
import { coursesData, providers, Course } from '../data/coursesData';
import { Calendar, ExternalLink, Clock, BookOpen } from 'lucide-react';

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('es-ES', { 
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

const getLevelColor = (level: string) => {
  switch (level) {
    case 'básico':
      return 'bg-green-100 text-green-800';
    case 'intermedio':
      return 'bg-yellow-100 text-yellow-800';
    case 'avanzado':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'programming':
      return '💻';
    case 'tools':
      return '🛠️';
    case 'soft-skills':
      return '🧠';
    default:
      return '📚';
  }
};

const Courses = () => {
  const [selectedProvider, setSelectedProvider] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  
  const filteredCourses = coursesData
    .filter((course) => {
      const matchesProvider = selectedProvider === 'All' || course.provider === selectedProvider;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesProvider && matchesSearch;
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleViewCertificate = (certificateUrl: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    window.open(certificateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Cursos Completados"
            subtitle="Cursos y formaciones que he completado para desarrollar mis habilidades técnicas y profesionales"
            centered={true}
          />
          
          <div className="mt-10 mb-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-between">
              <div className="order-2 sm:order-1 overflow-x-auto py-2">
                <div className="flex space-x-3">
                  {providers.map((provider) => (
                    <FilterButton
                      key={provider}
                      active={selectedProvider === provider}
                      label={provider}
                      onClick={() => setSelectedProvider(provider)}
                    />
                  ))}
                </div>
              </div>
              <div className="order-1 sm:order-2">
                <SearchBar 
                  placeholder="Buscar cursos..."
                  onSearch={handleSearch}
                />
              </div>
            </div>
          </div>
          
          <AnimatePresence>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="card group hover:shadow-lg cursor-pointer"
                    onClick={() => setSelectedCourse(course)}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">{getCategoryIcon(course.category)}</span>
                        <span className="inline-block px-3 py-1 bg-secondary-600 text-white rounded-full text-sm font-medium">
                          {course.provider}
                        </span>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                          {course.level}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-xl text-neutral-900 mb-3 line-clamp-2">{course.title}</h3>
                      
                      <div className="flex items-center justify-between text-neutral-600 text-sm mb-3">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{formatDate(course.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-neutral-700 line-clamp-2 mb-3">{course.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {course.skills.slice(0, 2).map((skill, index) => (
                          <span
                            key={index}
                            className="inline-block px-2 py-1 bg-neutral-100 rounded-full text-xs font-medium text-neutral-700"
                          >
                            {skill}
                          </span>
                        ))}
                        {course.skills.length > 2 && (
                          <span className="inline-block px-2 py-1 bg-neutral-100 rounded-full text-xs font-medium text-neutral-700">
                            +{course.skills.length - 2} más
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="px-6 pb-6 flex justify-end border-t border-neutral-100 pt-4">
                      {course.certificateUrl && (
                        <button
                          onClick={(e) => handleViewCertificate(course.certificateUrl!, e)}
                          className="inline-flex items-center text-sm text-secondary-600 hover:text-secondary-800 font-medium"
                        >
                          Ver Certificado <ExternalLink size={14} className="ml-1" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <BookOpen size={48} className="mx-auto text-neutral-400 mb-4" />
                  <p className="text-neutral-600 text-lg">No se encontraron cursos que coincidan con tus criterios.</p>
                  <button
                    onClick={() => {
                      setSelectedProvider('All');
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

      {/* Course Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 p-8 rounded-t-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl">{getCategoryIcon(selectedCourse.category)}</span>
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mr-2">
                      {selectedCourse.provider}
                    </span>
                    <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                      {selectedCourse.level}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedCourse.title}</h3>
              </div>
              
              <button
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
                onClick={() => setSelectedCourse(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-neutral-600">
                      <Calendar size={16} className="mr-2" />
                      <span>{formatDate(selectedCourse.date)}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Clock size={16} className="mr-2" />
                      <span>{selectedCourse.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-neutral-700 mb-6">{selectedCourse.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3">Habilidades Adquiridas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCourse.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1.5 bg-neutral-100 rounded-full text-sm font-medium text-neutral-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {selectedCourse.certificateUrl && (
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={() => handleViewCertificate(selectedCourse.certificateUrl!)}
                        className="px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center"
                      >
                        Ver Certificado Original <ExternalLink size={16} className="ml-2" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Courses;