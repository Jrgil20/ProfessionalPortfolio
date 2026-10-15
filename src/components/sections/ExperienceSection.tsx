import React from 'react';
import { motion } from 'framer-motion';
import { experienceTimeline } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import { Calendar, Building2 } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-500/10 dark:bg-cyan-500/10 text-primary-600 dark:text-cyan-400 mb-3">
            <span>TRAJECTORY & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t.sections.experienceTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.sections.experienceSubtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
          {experienceTimeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-primary-500 dark:border-cyan-400 group-hover:scale-125 transition-transform" />

              {/* Date Tag for Desktop */}
              <div className="hidden md:block absolute -left-44 top-1 text-right w-32 font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                {item.period}
              </div>

              {/* Card */}
              <div className="card-engineering p-6 group-hover:border-primary-500/40 dark:group-hover:border-cyan-500/40">
                
                {/* Mobile Period Tag */}
                <div className="md:hidden inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary-600 dark:text-cyan-400 mb-2">
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </div>

                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {item.role[language]}
                  </h3>
                  {item.badge && (
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-primary-500/10 text-primary-600 dark:bg-cyan-500/10 dark:text-cyan-400 border border-primary-500/20 dark:border-cyan-500/20">
                      {item.badge[language]}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 mb-4">
                  <Building2 size={16} className="text-slate-400 dark:text-slate-500" />
                  <span>{item.organization}</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
