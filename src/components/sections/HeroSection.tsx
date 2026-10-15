import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  Terminal, 
  Clock, 
  Award,
  GitBranch,
  MapPin
} from 'lucide-react';
import { profileData } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import { scrollToSection } from '../../utils/scroll';

const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github size={19} />;
      case 'GitHub Lab': return <GitBranch size={19} />;
      case 'LinkedIn': return <Linkedin size={19} />;
      case 'Telegram': return <Send size={19} />;
      case 'Codeforces': return <Terminal size={19} />;
      case 'WakaTime': return <Clock size={19} />;
      case 'Credly': return <Award size={19} />;
      default: return <ExternalLink size={19} />;
    }
  };

  return (
    <section id="hero" className="relative scroll-mt-24 pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-primary-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Text Column */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Status indicator badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profileData.availability[language]}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              {t.hero.greeting}{' '}
              <span className="gradient-text">{profileData.name}</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-primary-600 dark:text-cyan-400 mb-6 max-w-2xl font-mono">
              {profileData.headline[language]}
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {profileData.heroPitch[language]}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-primary-600 hover:bg-primary-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-slate-950 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                {t.hero.viewProjects}
                <ArrowRight size={18} />
              </a>

              <a
                href={profileData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all duration-200"
              >
                <Download size={18} className="text-primary-600 dark:text-cyan-400" />
                {t.hero.downloadCV}
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
              >
                <Mail size={18} />
                {t.hero.contactMe}
              </a>
            </div>

            {/* Verified Social Channels */}
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-3">
                {t.contact.socialProfiles}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                {profileData.socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-cyan-400 hover:border-primary-500/30 dark:hover:border-cyan-500/30 shadow-sm transition-colors"
                    aria-label={link.name}
                    title={`${link.name}: ${link.handle || link.url}`}
                  >
                    {getSocialIcon(link.name)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image / Terminal Column */}
          <motion.div
            className="flex-shrink-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary-600 to-cyan-500 opacity-20 blur-lg" />
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src={profileData.photoUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />

                {/* Engineering overlay tag */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs font-mono text-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-cyan-400" />
                    <span>{profileData.location[language]}</span>
                  </div>
                  <span className="text-slate-400">{profileData.handle}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
