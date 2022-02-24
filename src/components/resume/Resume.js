import About from './About';
import Experience from './Experience';
import Info from './Info';
import './Resume.scss';

function Resume({ data }) {
  return (
    <div className="Resume">
      <Info data={data.info} />
      <About data={data.about} />
      <Experience data={data.experience} />
    </div>
  );
}

export default Resume;
