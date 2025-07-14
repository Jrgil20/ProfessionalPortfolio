import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import SearchBar from '../components/ui/SearchBar';
import FilterButton from '../components/ui/FilterButton';
import { certificationsData, certificationProviders, Certification } from '../data/certificationsData';
import { Calendar, ExternalLink, Award, Shield } from 'lucide-react';

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('es-ES', { 
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'professional':
      return 'bg-blue-100 text-blue-800';
    case 'academic':
      return 'bg-green-100 text-green-800';
    case 'industry':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'professional':
      return <Shield size={16} />;
    case 'academic':
      return <Award size={16} />;
    case 'industry':
      return <Award size={16} />;
    default:
      return <Award size={16} />;
  }
};

const Certifications = () => {
  const [selectedProvider, setSelectedProvider] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  
  const filteredCertifications = certificationsData
    .filter((cert) => {
      const matchesProvider = selectedProvider === 'All' || cert.provider === selectedProvider;
      const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cert.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Certificaciones Profesionales"
            subtitle="Certificaciones oficiales que validan mis competencias técnicas y profesionales"
            centered={true}
          />
          
          <div className="mt-10 mb-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-between">
              <div className="order-2 sm:order-1 overflow-x-auto py-2">
                <div className="flex space-x-3">
                  {certificationProviders.map((provider) => (
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
                  placeholder="Buscar certificaciones..."
                  onSearch={handleSearch}
                />
              </div>
            </div>
          </div>
          
          <AnimatePresence>
            {filteredCertifications.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCertifications.map((certification) => (
                  <motion.div
                    key={certification.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="card group hover:shadow-lg cursor-pointer"
                    onClick={() => setSelectedCertification(certification)}
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
                      <img
                        src={certification.imageUrl}
                        alt={certification.title}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <div className="flex items-center gap-2 mb-2">
                            {getTypeIcon(certification.type)}
                            <span className="inline-block px-2 py-1 bg-primary-600 rounded-full text-xs font-medium">
                              {certification.provider}
                            </span>
                          </div>
                          <h3 className="font-bold text-lg line-clamp-2">{certification.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between text-neutral-600 text-sm mb-3">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{formatDate(certification.date)}</span>
                        </div>
                        {certification.validUntil && (
                          <div className="text-xs">
                            Válido hasta: {formatDate(certification.validUntil)}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(certification.type)}`}>
                          {getTypeIcon(certification.type)}
                          {certification.type}
                        </span>
                      </div>
                      
                      <p className="text-neutral-700 line-clamp-2 mb-3">{certification.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {certification.skills.slice(0, 2).map((skill, index) => (
                          <span
                            key={index}
                            className="inline-block px-2 py-1 bg-neutral-100 rounded-full text-xs font-medium text-neutral-700"
                          >
                            {skill}
                          </span>
                        ))}
                        {certification.skills.length > 2 && (
                          <span className="inline-block px-2 py-1 bg-neutral-100 rounded-full text-xs font-medium text-neutral-700">
                            +{certification.skills.length - 2} más
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-4 pt-0 flex justify-end">
                      {certification.certificateUrl && (
                        <button
                          onClick={(e) => handleViewCertificate(certification.certificateUrl!, e)}
                          className="inline-flex items-center text-sm text-primary-600 hover:text-primary-800 font-medium"
                        >
                          Ver Certificado <ExternalLink size={14} className="ml-1" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Award size={64} className="mx-auto text-neutral-400 mb-6" />
                <h3 className="text-2xl font-semibold text-neutral-700 mb-4">
                  {searchQuery || selectedProvider !== 'All' 
                    ? 'No se encontraron certificaciones'
                    : 'Próximamente: Certificaciones Profesionales'
                  }
                </h3>
                <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                  {searchQuery || selectedProvider !== 'All'
                    ? 'No hay certificaciones que coincidan con tus criterios de búsqueda.'
                    : 'Estoy trabajando para obtener certificaciones profesionales en tecnologías cloud y desarrollo. ¡Mantente atento!'
                  }
                </p>
                {(searchQuery || selectedProvider !== 'All') && (
                  <button
                    onClick={() => {
                      setSelectedProvider('All');
                      setSearchQuery('');
                    }}
                    className="text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Limpiar filtros
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Certification Modal */}
      {selectedCertification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <div className="h-64 overflow-hidden rounded-t-xl bg-gray-50 flex items-center justify-center">
                <img
                  src={selectedCertification.imageUrl}
                  alt={selectedCertification.title}
                  className="max-w-full max-h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <button
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
                onClick={() => setSelectedCertification(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(selectedCertification.type)}`}>
                      {getTypeIcon(selectedCertification.type)}
                      {selectedCertification.type}
                    </span>
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium">
                      {selectedCertification.provider}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{selectedCertification.title}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-neutral-600">
                      <Calendar size={16} className="mr-2" />
                      <span>Obtenido: {formatDate(selectedCertification.date)}</span>
                    </div>
                    {selectedCertification.validUntil && (
                      <div className="flex items-center text-neutral-600">
                        <Calendar size={16} className="mr-2" />
                        <span>Válido hasta: {formatDate(selectedCertification.validUntil)}</span>
                      </div>
                    )}
                    {selectedCertification.credentialId && (
                      <div className="md:col-span-2 text-neutral-600">
                        <strong>ID de Credencial:</strong> {selectedCertification.credentialId}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-neutral-700 mb-6">{selectedCertification.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3">Competencias Validadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertification.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1.5 bg-neutral-100 rounded-full text-sm font-medium text-neutral-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {selectedCertification.certificateUrl && (
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={() => handleViewCertificate(selectedCertification.certificateUrl!)}
                        className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center"
                      >
                        Verificar Certificación <ExternalLink size={16} className="ml-2" />
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

export default Certifications;