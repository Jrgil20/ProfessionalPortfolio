import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Education from './pages/Education';
import Courses from './pages/Courses';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="education" element={<Education />} />
            <Route path="courses" element={<Courses />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="projects" element={<Projects />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </LanguageProvider>
  );
}

export default App;