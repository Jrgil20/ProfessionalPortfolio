import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profileData';

const Home = () => {
  // Crear arreglo de enlaces sociales basado en el perfil
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={24} />, url: profileData.socialLinks.github || '#' },
    { name: 'LinkedIn', icon: <Linkedin size={24} />, url: profileData.socialLinks.linkedin || '#' },
    { name: 'Twitter', icon: <Twitter size={24} />, url: profileData.socialLinks.twitter || '#' },
    { name: 'Telegram', icon: <Send size={24} />, url: profileData.socialLinks.telegram || '#' },
    { name: 'Email', icon: <Mail size={24} />, url: `mailto:${profileData.email}` },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary-50 to-white">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center md:text-left"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900">
                  Hi, I'm <span className="text-primary-600">{profileData.name}</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-neutral-700">
                  {profileData.title}
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link 
                    to="/projects" 
                    className="btn btn-primary flex items-center gap-2"
                  >
                    View Projects <ArrowRight size={16} />
                  </Link>
                  <a 
                    href="#" 
                    className="btn btn-outline flex items-center gap-2"
                  >
                    Download Resume <Download size={16} />
                  </a>
                </div>
                
                <div className="mt-10">
                  <p className="mb-4 text-neutral-700">Connect with me:</p>
                  <div className="flex space-x-5 justify-center md:justify-start">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={profileData.photoUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">About Me</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-neutral-900">My Journey</h3>
              <p className="text-neutral-700">
                {profileData.summary}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-neutral-900">Career Objectives</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Innovate & Solve',
                    description: 'Develop innovative solutions that address significant challenges in technology and society.'
                  },
                  {
                    title: 'Advanced ML Research',
                    description: 'Contribute to cutting-edge research in machine learning and artificial intelligence applications.'
                  },
                  {
                    title: 'Product Development',
                    description: 'Build user-centric products that combine technical excellence with intuitive design.'
                  },
                  {
                    title: 'Knowledge Sharing',
                    description: 'Mentor others and share knowledge through teaching, writing, and open-source contributions.'
                  }
                ].map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary-600"></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg text-neutral-900">{item.title}</h4>
                      <p className="text-neutral-700">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Link 
              to="/education" 
              className="btn btn-primary inline-flex items-center gap-2"
            >
              View My Educational Background <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">Get In Touch</h2>
            <p className="text-lg text-neutral-700">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
          </motion.div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12 bg-primary-600 text-white"
              >
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-3">
                    <Mail size={20} />
                    {profileData.email}
                  </p>
                  <p className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {profileData.location}
                  </p>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-medium mb-4">Social Profiles</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-700 hover:bg-primary-800 p-3 rounded-full transition-colors duration-200"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 md:p-12"
              >
                <h3 className="text-2xl font-semibold mb-6 text-neutral-900">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;