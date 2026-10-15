import React from 'react';
import { motion } from 'framer-motion';
import { impactMetrics } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import { GitPullRequest, Trophy, Clock, Users, ArrowUpRight, ShieldCheck } from 'lucide-react';

const MetricsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'github-contributions':
        return <GitPullRequest className="text-cyan-400" size={24} />;
      case 'github-rank-vzla':
        return <ShieldCheck className="text-blue-400" size={24} />;
      case 'wakatime-hours':
        return <Clock className="text-emerald-400" size={24} />;
      case 'hackathons':
        return <Trophy className="text-amber-400" size={24} />;
      case 'copilot-dev-days':
        return <Users className="text-indigo-400" size={24} />;
      default:
        return <ShieldCheck className="text-cyan-400" size={24} />;
    }
  };

  return (
    <section id="metrics" className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-500/10 dark:bg-cyan-500/10 text-primary-600 dark:text-cyan-400 mb-3">
            <span>VERIFIED PERFORMANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t.sections.metricsTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.sections.metricsSubtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactMetrics.map((metric, index) => {
            const isLarge = index === 0; // First item is primary
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`card-engineering p-6 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 dark:hover:border-cyan-500/40 ${
                  isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Background accent glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 dark:bg-cyan-500/5 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                      {getMetricIcon(metric.id)}
                    </div>
                    {metric.highlight && (
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {metric.highlight}
                      </span>
                    )}
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight mb-2">
                    {metric.value}
                  </div>

                  <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {metric.label[language]}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {metric.description[language]}
                  </p>
                </div>

                {metric.sourceUrl && (
                  <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-primary-600 dark:text-cyan-400">
                    <span>{t.buttons.sourceMetric}</span>
                    <a
                      href={metric.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      aria-label={`${metric.label[language]} source`}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MetricsSection;
