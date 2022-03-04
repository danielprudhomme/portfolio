import About from './About';
import Education from './Education';
import Experience from './Experience';
import Info from './Info';
import Languages from './Languages';
import './Resume.scss';
import Skills from './Skills';

function Resume({ data }) {
  return (
    <div className="Resume">
      <Info data={data.info} />
      <About data={data.about} />
      <Skills data={data.skills} />
      <Experience data={data.experience} />
      <Education data={data.education} />
      <Languages data={data.languages} />
    </div>
  );
}

export default Resume;
