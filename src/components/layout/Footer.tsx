import { Github, Linkedin, Mail, Twitter, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profileData } from '../../data/profileData';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: profileData.socialLinks.github || '#' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: profileData.socialLinks.linkedin || '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: profileData.socialLinks.twitter || '#' },
    { name: 'Telegram', icon: <Send size={20} />, url: profileData.socialLinks.telegram || '#' },
    { name: 'Email', icon: <Mail size={20} />, url: `mailto:${profileData.email}` },
  ];

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.education, path: '/education' },
    { name: t.nav.courses, path: '/courses' },
    { name: t.nav.certifications, path: '/certifications' },
    { name: t.nav.projects, path: '/projects' }
  ];

  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{t.nav.portfolio}</h3>
            <p className="text-neutral-400">
              {t.footer.description}
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{t.footer.contact}</h3>
            <ul className="space-y-2">
              <li className="text-neutral-400">{profileData.email}</li>
              <li className="text-neutral-400">{profileData.location}</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{t.footer.connect}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800 text-neutral-500 text-center md:text-left md:flex md:justify-between md:items-center">
          <p>&copy; {currentYear} {profileData.name}. {t.footer.allRightsReserved}</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-neutral-500 hover:text-white mr-4 transition-colors duration-200">
              {t.footer.privacyPolicy}
            </Link>
            <Link to="/terms-of-service" className="text-neutral-500 hover:text-white transition-colors duration-200">
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;