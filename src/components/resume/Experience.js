import './Experience.scss';
import ExperienceDetails from './ExperienceDetails';

function Experience({ data }) {
  const listItems = data?.map(experience =>
    <ExperienceDetails key={experience.company} data={experience} />
  );

  return (
    <div className="Experience">
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default Experience;
