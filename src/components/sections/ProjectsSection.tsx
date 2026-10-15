import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/portfolioData';
import { ProjectCategory } from '../../types/portfolio';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Github, 
  ExternalLink, 
  Star, 
  Lock, 
  Trophy 
} from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t.projectsFilter.all },
    { id: 'ai-agents', label: t.projectsFilter.aiAgents },
    { id: 'backend-fullstack', label: t.projectsFilter.backendFullstack },
    { id: 'web3', label: t.projectsFilter.web3 },
    { id: 'systems-algorithms', label: t.projectsFilter.systemsAlgorithms },
    { id: 'cybersecurity', label: t.projectsFilter.cybersecurity }
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projectsData;
    return projectsData.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-500/10 dark:bg-cyan-500/10 text-primary-600 dark:text-cyan-400 mb-3">
            <span>ENGINEERING SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t.sections.projectsTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.sections.projectsSubtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-600 text-white dark:bg-cyan-500 dark:text-slate-950 shadow-md font-semibold'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="card-engineering p-6 flex flex-col justify-between group hover:border-primary-500/40 dark:hover:border-cyan-500/40 relative"
              >
                <div>
                  {/* Top Bar: Title & Badges / Stars */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    {project.stars !== undefined && (
                      <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        <Star size={12} className="fill-amber-500 text-amber-500" />
                        <span>{project.stars}</span>
                      </div>
                    )}
                  </div>

                  {/* Headline */}
                  <p className="text-xs font-mono font-medium text-primary-600 dark:text-cyan-400 mb-3">
                    {project.headline[language]}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {project.description[language]}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((tech) => (
                      <span key={tech} className="badge-tech">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons & Status Badges */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-2">
                    
                    {/* Left: Badge or Private Tag */}
                    <div>
                      {project.badge ? (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                          {project.badge.type === 'award' || project.badge.type === 'hackathon' ? (
                            <Trophy size={13} className="text-amber-500" />
                          ) : (
                            <Lock size={13} className="text-amber-500" />
                          )}
                          <span>{project.badge.label[language]}</span>
                        </div>
                      ) : !project.repoUrl && !project.liveUrl ? (
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800">
                          <Lock size={12} />
                          <span>{language === 'es' ? 'Código Privado' : 'Private Code'}</span>
                        </div>
                      ) : null}
                    </div>

                    {/* Right: Direct Real Links */}
                    <div className="flex items-center gap-2">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                          aria-label={`${project.title} repository`}
                        >
                          <Github size={14} />
                          <span>{t.buttons.viewRepository}</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-600 hover:bg-primary-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white dark:text-slate-950 font-semibold shadow-sm transition-colors"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink size={14} />
                          <span>{t.buttons.viewLiveDemo}</span>
                        </a>
                      )}
                    </div>

                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
