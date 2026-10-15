import React from 'react';
import { motion } from 'framer-motion';
import { educationList, certificationsList, languagesList } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import { GraduationCap, Award, ExternalLink, Globe2, CheckCircle } from 'lucide-react';

const EducationSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="education" className="scroll-mt-20 md:scroll-mt-24 py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-500/10 dark:bg-cyan-500/10 text-primary-600 dark:text-cyan-400 mb-3">
            <span>ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t.sections.educationTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.sections.educationSubtitle}
          </p>
        </div>

        {/* Education & Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="card-engineering p-6 md:p-8 flex flex-col justify-between hover:border-primary-500/40 dark:hover:border-cyan-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                    <GraduationCap className="text-cyan-400" size={24} />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {edu.degree[language]}
                </h3>

                <p className="text-sm font-semibold text-primary-600 dark:text-cyan-400 mb-4">
                  {edu.institution} — {edu.location}
                </p>

                {edu.scholarshipOrDistinction && (
                  <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed bg-slate-50 dark:bg-slate-950/70 p-4 rounded-xl border border-slate-200 dark:border-slate-800 font-normal">
                    {edu.scholarshipOrDistinction[language]}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Subsection */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Award className="text-cyan-400" size={24} />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t.sections.certificationsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificationsList.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="card-engineering p-5 flex flex-col justify-between hover:border-cyan-500/50"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {cert.name}
                    </h4>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-cyan-400 hover:scale-110 transition-transform p-1"
                        aria-label={`Ver credencial oficial de ${cert.name}`}
                        title="Ver credencial en Credly"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-3">
                    {cert.issuer}
                  </p>

                  {cert.skills && (
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((s) => (
                        <span key={s} className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {cert.credentialUrl && (
                  <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/80">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary-600 dark:text-cyan-400 hover:underline"
                    >
                      <CheckCircle size={13} className="text-emerald-500" />
                      <span>{t.buttons.verifyCredential}</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages Subsection */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Globe2 className="text-cyan-400" size={22} />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {t.sections.languagesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languagesList.map((lang) => (
              <div
                key={lang.name.es}
                className="card-engineering p-4 flex flex-col justify-center"
              >
                <span className="font-bold text-base text-slate-900 dark:text-white mb-1">
                  {lang.name[language]}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  {lang.proficiency[language]}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
