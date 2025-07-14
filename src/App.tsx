import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Education from './pages/Education';
import Courses from './pages/Courses';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="courses" element={<Courses />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;