import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.scss';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Resume from './components/resume/Resume';
import resumePriscEn from './data/resume-prisc.en.json';
import resumePriscFr from './data/resume-prisc.fr.json';
import resumeEn from './data/resume.en.json';
import resumeFr from './data/resume.fr.json';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  const query = useQuery();
  const lang = query.get('lang');
  const person = query.get('p');

  let resume = null;
  if (person === 'prisc') {
    resume = lang === 'fr' ? resumePriscFr : resumePriscEn;
  }
  else {
    resume = lang === 'fr' ? resumeFr : resumeEn;
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
