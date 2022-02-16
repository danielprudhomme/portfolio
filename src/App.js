import './App.scss';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Header />
        <About />
        <WorkExperience />
        <Education />
      </div>
    </div>
  );
}

export default App;
