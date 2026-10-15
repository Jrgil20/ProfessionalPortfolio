import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import { Code, Database, Bot, Layout, Blocks, Terminal } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code className="text-cyan-400" size={20} />;
      case 'backend-db':
        return <Database className="text-blue-400" size={20} />;
      case 'ai-agents':
        return <Bot className="text-emerald-400" size={20} />;
      case 'frontend':
        return <Layout className="text-purple-400" size={20} />;
      case 'web3':
        return <Blocks className="text-amber-400" size={20} />;
      case 'systems-cs':
        return <Terminal className="text-indigo-400" size={20} />;
      default:
        return <Code className="text-cyan-400" size={20} />;
    }
  };

  return (
    <section id="skills" className="scroll-mt-20 md:scroll-mt-24 py-20 md:py-28 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-500/10 dark:bg-cyan-500/10 text-primary-600 dark:text-cyan-400 mb-3">
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t.sections.skillsTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.sections.skillsSubtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="card-engineering p-6 flex flex-col justify-between hover:border-primary-500/40 dark:hover:border-cyan-500/40"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                    {getCategoryIcon(category.id)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title[language]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono font-medium px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700/80 hover:border-primary-500/50 dark:hover:border-cyan-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
