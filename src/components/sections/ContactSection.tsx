import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/portfolioData';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Terminal, 
  Clock, 
  Award, 
  ExternalLink,
  GitBranch,
  Instagram
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github size={18} />;
      case 'GitHub Lab': return <GitBranch size={18} />;
      case 'LinkedIn': return <Linkedin size={18} />;
      case 'Telegram': return <Send size={18} />;
      case 'Codeforces': return <Terminal size={18} />;
      case 'WakaTime': return <Clock size={18} />;
      case 'Credly': return <Award size={18} />;
      case 'Instagram': return <Instagram size={18} />;
      default: return <ExternalLink size={18} />;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-500/10 dark:bg-cyan-500/10 text-primary-600 dark:text-cyan-400 mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {t.sections.contactTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.sections.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 card-engineering p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {t.contact.getInTouch}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {t.contact.getInTouchDescription}
              </p>

              {/* Direct Info */}
              <div className="space-y-4 mb-8">
                
                {/* Email Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-cyan-400">
                      <Mail size={18} />
                    </div>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm font-mono text-slate-800 dark:text-slate-200 hover:text-primary-600 dark:hover:text-cyan-400 truncate"
                    >
                      {profileData.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors flex-shrink-0"
                    title={copied ? 'Copiado' : 'Copiar email'}
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-cyan-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {profileData.location[language]}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {profileData.availability[language]}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Channels List */}
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                {t.contact.socialProfiles}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {profileData.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-cyan-400 hover:border-primary-500/40 dark:hover:border-cyan-500/40 transition-colors flex items-center gap-2 text-xs font-medium"
                    aria-label={link.name}
                  >
                    {getSocialIcon(link.name)}
                    <span className="truncate">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Formspree Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 card-engineering p-8"
          >
            <form
              action="https://formspree.io/f/xeojygpr"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 dark:focus:ring-cyan-500 focus:outline-none text-sm transition-all"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 dark:focus:ring-cyan-500 focus:outline-none text-sm transition-all"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 dark:focus:ring-cyan-500 focus:outline-none text-sm transition-all"
                  placeholder={t.contact.form.subjectPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.contact.form.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 dark:focus:ring-cyan-500 focus:outline-none text-sm transition-all resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-primary-600 hover:bg-primary-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-slate-950 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send size={16} />
                <span>{t.contact.form.sendButton}</span>
              </button>

              <p className="text-xs text-slate-500 text-center pt-2">
                {t.contact.form.privacyText}
              </p>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
