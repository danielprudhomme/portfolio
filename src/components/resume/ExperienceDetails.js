import ColumnContainer from '../layout/ColumnContainer';
import './ExperienceDetails.scss';
import StartEndDate from './StartEndDate';

function ExperienceDetails({ data }) {
  console.log(data);
  const left = <div>
    <div className='ExperienceLeft'>
      <div className='Company'>{data.company}</div>
      <div className='Location'>
        <div className='City'>{data.location.city}</div>
        <div className='Country'>, {data.location.country}</div>
      </div>
    </div>
    <div>{StartEndDate(data.startDate, data.endDate)}</div>
  </div>;

  let environmentSection = null;
  if (data.environment && data.environment.length > 0) {
    const environmentList = data.environment?.join(', ');
    environmentSection = <div className='Environment'>
      {environmentList}
    </div>;
  }

  const right = <div className='ExperienceRight'>
    <div>{data.description}</div>
    {environmentSection}
  </div>

  return (
    <li className='ExperienceDetails'>
      {ColumnContainer(left, right, true)}
    </li>
  );
}

export default ExperienceDetails;
