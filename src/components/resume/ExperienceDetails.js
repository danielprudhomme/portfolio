import mapIcon from '../../images/icons/map.png';
import ColumnContainer from '../layout/ColumnContainer';
import './ExperienceDetails.scss';
import StartEndDate from './StartEndDate';

function ExperienceDetails({ data }) {
  const left = <div>
    <div className='ExperienceLeft'>
      <div className='Company'>{data.company}<i class="bi-alarm"></i></div>
      
      <div className='Location'>
      <img className='LocationIcon' src={mapIcon} alt="Location" />
        <div className='City'>{data.location.city}</div>
        {data.location.country ? <div className='Country'>, {data.location.country}</div> : null}
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

  let tasks = null;
  if (data.tasks && data.tasks.length > 0) {
    tasks = <ul className='ExperienceTaskList'>
      {data.tasks.map(task => <li>{task}</li>)}
    </ul>
  }

  const right = <div className='ExperienceRight'>
    {data.title ? <h3 className='ExperienceTitle'>{data.title}</h3> : null}
    <div>{data.description}</div>
    {tasks}
    {environmentSection}
  </div>

  return (
    <li className='ExperienceDetails'>
      {ColumnContainer(left, right, true)}
    </li>
  );
}

export default ExperienceDetails;
