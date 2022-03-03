import ColumnContainer from '../layout/ColumnContainer';
import './ExperienceDetails.scss';
import SkillList from './SkillList';
import StartEndDate from './StartEndDate';

function ExperienceDetails({ data }) {
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

  const right = <div className='ExperienceRight'>
    <div>{data.description}</div>
    <div class="Skills-section">{SkillList(data.environment, true)}</div>
  </div>

  return (
    <li className='ExperienceDetails'>
      {ColumnContainer(left, right, true)}
    </li>
  );
}

export default ExperienceDetails;
