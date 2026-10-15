import React from 'react';
import { ArrowUp, Github, Linkedin, Send, Terminal, Clock, Award, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profileData } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import { scrollToSection } from '../../utils/scroll';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60 dark:border-slate-800/80">
          
          {/* Left Brand & Role */}
          <div className="text-center md:text-left">
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="font-mono font-bold text-lg text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {profileData.name} ({profileData.handle})
            </a>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 max-w-md">
              {profileData.headline[language]}
            </p>
          </div>

          {/* Center Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Jrgil20"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://github.com/JesusRgil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="GitHub Lab"
            >
              <GitBranch size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jesus-r-gil/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://codeforces.com/profile/Jrgil20"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Codeforces"
            >
              <Terminal size={18} />
            </a>
            <a
              href="https://wakatime.com/@d7762116-da4a-46bb-85a2-830cd446d82b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="WakaTime"
            >
              <Clock size={18} />
            </a>
            <a
              href="https://www.credly.com/badges/d5bba642-e9df-4598-9ff4-f0d94eddcb06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Credly Badge"
            >
              <Award size={18} />
            </a>
            <a
              href="https://t.me/Jr_Gil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Telegram"
            >
              <Send size={18} />
            </a>
          </div>

          {/* Right Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {profileData.name}. {t.footer.allRightsReserved}</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-primary-600 dark:hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary-600 dark:hover:text-cyan-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;