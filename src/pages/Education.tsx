import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { educationData, Education as EducationType } from '../data/educationData';
import { BookOpen, Award, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState<EducationType | null>(null);
  const { t } = useLanguage();

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t.education.title}
            subtitle={t.education.subtitle}
            centered={true}
          />
          
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-12"
          >
            {educationData.map((education, index) => (
              <motion.div
                key={education.id}
                variants={itemVariants}
                className={`timeline-container ${index !== educationData.length - 1 ? 'pb-12' : ''}`}
              >
                <div className="timeline-dot"></div>
                <div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedEducation(education)}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-primary-800">{education.institution}</h3>
                    <div className="flex items-center text-neutral-600">
                      <Calendar size={16} className="mr-1" />
                      <span>{education.startDate} - {education.endDate}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium mb-3">{education.degree} {t.education.inField} {education.field}</h4>
                  <p className="text-neutral-700 mb-4">{education.description}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEducation(education);
                      }}
                      className="text-sm px-3 py-1 bg-primary-100 text-primary-800 rounded-full hover:bg-primary-200 transition-colors duration-200"
                    >
                      {t.education.viewDetails}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Education Details Modal */}
      {selectedEducation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[80vh] overflow-y-auto"
          >
            <div className="relative">
              {selectedEducation.logo && (
                <div className="h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={selectedEducation.logo}
                    alt={selectedEducation.institution}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <button
                  className="absolute top-4 right-4 bg-white/90 rounded-full p-2 text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
                  onClick={() => setSelectedEducation(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">{selectedEducation.institution}</h3>
                  <div className="flex items-center text-neutral-600 mb-4">
                    <Calendar size={18} className="mr-2" />
                    <span>{selectedEducation.startDate} - {selectedEducation.endDate}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold mb-1">{selectedEducation.degree} {t.education.inField} {selectedEducation.field}</h4>
                    <p className="text-neutral-700">{selectedEducation.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={20} className="text-primary-600" />
                      <h5 className="font-semibold text-lg">{t.education.achievements}</h5>
                    </div>
                    <ul className="space-y-2">
                      {selectedEducation.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-neutral-700">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen size={20} className="text-primary-600" />
                      <h5 className="font-semibold text-lg">{t.education.relevantCoursework}</h5>
                    </div>
                    <ul className="space-y-2">
                      {selectedEducation.coursework.map((course, index) => (
                        <li key={index} className="flex items-start gap-2 text-neutral-700">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
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

export default Education;