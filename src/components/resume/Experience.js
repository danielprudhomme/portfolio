import ColumnContainer from '../layout/ColumnContainer';
import './Experience.scss';
import ExperienceDetails from './ExperienceDetails';

function Experience({ data }) {
  const listItems = data?.list.map(experience =>
    <ExperienceDetails key={experience.company} data={experience} />
  );

  const title = <h2>{data.title}</h2>;

  return (
    <div className='Experience ResumeSection'>
      {ColumnContainer(title, null, false)}
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default Experience;
