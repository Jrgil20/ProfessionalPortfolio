import React from 'react';
import { motion } from 'framer-motion';
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
      title: language === 'es' ? "Arquitectura Limpia & Backend" : "Clean Architecture & Scalable Backend",
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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-primary-500/10 dark:bg-cyan-500/10 text-primary-600 dark:text-cyan-400 mb-3 border border-primary-500/20 dark:border-cyan-500/20">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 card-engineering p-7 sm:p-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800"
          >
            <div className="flex items-center gap-2 mb-5 text-primary-600 dark:text-cyan-400 font-mono text-sm font-semibold">
              <Sparkles size={18} />
              <span>{language === 'es' ? 'ADN de Ingeniero' : 'Engineering DNA'}</span>
            </div>

            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-100 leading-relaxed mb-4 font-normal">
              {language === 'es'
                ? "Me apasiona tanto entender cómo funciona el software por debajo del capó (memoria dinámica, arquitectura de computadores, impacto de caché y optimización en C/C++/Go/NASM) como llevar productos reales a producción con TypeScript, Node.js, Python, Java y React."
                : "I enjoy going deep into how systems work under the hood (dynamic memory, computer architecture, cache performance, and C/C++/Go/NASM) while shipping production-ready applications with TypeScript, Node.js, Python, Java, and React."}
            </p>

            <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed mb-6 font-normal">
              {language === 'es'
                ? "Disfruto construir y liderar en el ecosistema técnico: desde hackathones de IA y Web3 hasta competencias algorítmicas de alto nivel (ICPC / Codeforces), Game Jams y comunidades de desarrolladores."
                : "I actively build in AI and Web3 hackathons, compete in high-stakes algorithmic contests (ICPC / Codeforces), participate in Game Jams, and lead developer communities."}
            </p>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {language === 'es' 
                    ? 'Estudiante de Ingeniería Informática (CS) en la UCAB, Caracas.' 
                    : 'Informatics Engineering (CS) student at UCAB, Caracas.'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {language === 'es'
                    ? 'Becario de Excelencia Arbitrum en Desarrollo Web3 & Blockchain.'
                    : 'Arbitrum Excellence Scholarship recipient in Web3 & Blockchain development.'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
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
                className="card-engineering p-6 hover:border-primary-500/50 dark:hover:border-cyan-500/50"
              >
                <div className="p-3 w-fit rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
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
