import About from './About';
import Education from './Education';
import Experience from './Experience';
import Info from './Info';
import './Resume.scss';

function Resume({ data }) {
  return (
    <div className="Resume">
      <Info data={data.info} />
      <About data={data.about} />
      <Experience data={data.experience} />
      <Education data={data.education} />
    </div>
  );
}

export default Resume;
