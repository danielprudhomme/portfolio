import { useLocation } from 'react-router-dom';
import './App.scss';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Resume from './components/resume/Resume';
import resumeEn from './data/resume.en.json';
import resumeFr from './data/resume.fr.json';

function App() {
  const { pathname } = useLocation();
  const resume = pathname === '/portfolio/fr' ? resumeFr : resumeEn;

  return (
    <div className='App'>
      <div className='container-fluid'>
        <Header />
      </div>
      <div className='container'>
        <Resume data={resume} />
      </div>
      <div className='container-fluid'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
