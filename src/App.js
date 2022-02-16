import './App.scss';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <WorkExperience />
      <Education />
    </div>
  );
}

export default App;
