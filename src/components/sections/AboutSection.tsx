import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import { Cpu, Terminal, Layers, Users, Sparkles, CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  const corePillars = [
    {
      icon: <Cpu className="text-cyan-400" size={22} />,
      title: language === 'es' ? "Bajo Nivel & Primeros Principios" : "Low-Level & First Principles",
      desc: language === 'es'
        ? "Memoria dinámica, impacto de caché, arquitectura de computadores y optimización algorítmica con C, C++, Go y Ensamblador x86."
        : "Dynamic memory, cache performance, computer architecture, and algorithmic optimization using C, C++, Go, and x86 Assembly."
    },
    {
      icon: <Layers className="text-blue-400" size={22} />,
      title: language === 'es' ? "Arquitectura Limpia & Backend Robusto" : "Clean Architecture & Scalable Backend",
      desc: language === 'es'
        ? "Diseño modular bajo DDD, separación de capas, E/S asíncrona, bases de datos relacionales avanzadas (PostgreSQL/MySQL) y APIs REST de alto rendimiento."
        : "Modular software under DDD, clean layer separation, async I/O, advanced relational databases (PostgreSQL/MySQL), and high-throughput REST APIs."
    },
    {
      icon: <Terminal className="text-emerald-400" size={22} />,
      title: language === 'es' ? "IA Aplicada, Agentes & Web3" : "Applied AI, Agents & Web3",
      desc: language === 'es'
        ? "Orquestación de agentes con Azure AI Foundry, mitigación de Constraint Decay vía BDD/SDD (Gherkin) y dApps descentralizadas en Solana y Avalanche."
        : "Agent orchestration via Azure AI Foundry, constraint decay mitigation using BDD/SDD (Gherkin), and decentralized dApps on Solana and Avalanche."
    },
    {
      icon: <Users className="text-indigo-400" size={22} />,
      title: language === 'es' ? "Liderazgo & Competencia Algorítmica" : "Leadership & Algorithmic Contests",
      desc: language === 'es'
        ? "Lead Organizer de GitHub Copilot Dev Days, competidor algorítmico en la Super Regional ICPC, 1.er lugar en hackathones y facilitador docente en la UCAB."
        : "Lead Organizer at GitHub Copilot Dev Days, ICPC Super Regional competitor, 1st place hackathon winner, and university teaching facilitator at UCAB."
    }
  ];

  return (
    <section id="about" className="scroll-mt-20 md:scroll-mt-24 py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-500/10 dark:bg-cyan-500/10 text-primary-600 dark:text-cyan-400 mb-3">
            <span>ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t.sections.aboutTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.sections.aboutSubtitle}
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 card-engineering p-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200/80 dark:border-slate-800"
          >
            <div className="flex items-center gap-2 mb-6 text-primary-600 dark:text-cyan-400 font-mono text-sm">
              <Sparkles size={18} />
              <span>{language === 'es' ? 'ADN de Ingeniero' : 'Engineering DNA'}</span>
            </div>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-6 font-normal">
              {profileData.fullAbout[language]}
            </p>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {language === 'es' 
                    ? 'Estudiante de Ingeniería Informática (CS) en la UCAB, Caracas.' 
                    : 'Informatics Engineering (CS) student at UCAB, Caracas.'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {language === 'es'
                    ? 'Becario de Excelencia Arbitrum en Desarrollo Web3 & Blockchain.'
                    : 'Arbitrum Excellence Scholarship recipient in Web3 & Blockchain development.'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {language === 'es'
                    ? 'Certificado oficial GitHub Foundations (Credly verificado).'
                    : 'Official GitHub Foundations Certified (Credly verified).'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Pillars Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="card-engineering p-6 hover:border-primary-500/40 dark:hover:border-cyan-500/40"
              >
                <div className="p-3 w-fit rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
