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
      {!data.skills.resumeLocation || data.skills.resumeLocation === 'top' ? <Skills data={data.skills} /> : null}
      <Experience data={data.experience} />
      <Education data={data.education} />
      <Languages data={data.languages} />
      {data.skills.resumeLocation && data.skills.resumeLocation === 'bottom' ? <Skills data={data.skills} /> : null}
    </div>
  );
}

export default Resume;
