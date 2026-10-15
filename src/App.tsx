import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* Graceful redirections for legacy paths to the single-page experience */}
              <Route path="education" element={<Navigate to="/#education" replace />} />
              <Route path="courses" element={<Navigate to="/#education" replace />} />
              <Route path="certifications" element={<Navigate to="/#education" replace />} />
              <Route path="projects" element={<Navigate to="/#projects" replace />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsOfService />} />
              {/* Fallback to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;