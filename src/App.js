import { useLocation } from 'react-router-dom';
import './App.scss';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Resume from './components/resume/Resume';
import resumePriscFr from './data/resume-prisc.fr.json';
import resumeEn from './data/resume.en.json';
import resumeFr from './data/resume.fr.json';

function App() {
  const { pathname } = useLocation();

  let resume = null;
  switch (pathname) {
    case '/portfolio/fr':
      resume = resumeFr;
      break;
    case '/portfolio/en':
      resume = resumeEn;
      break;
    case '/portfolio/prisc/fr':
      resume = resumePriscFr;
      break;
    default:
      resume = resumeFr;
  }

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
