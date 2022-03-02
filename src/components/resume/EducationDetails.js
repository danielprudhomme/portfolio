import ColumnContainer from '../layout/ColumnContainer';
import StartEndDate from '../resume/StartEndDate';
import './EducationDetails.scss';

function EducationDetails({ data }) {
  const left = <div>
    <div className='EducationLeft'>
      <div className='School'>{data.school}</div>
      <div className='Location'>
        <div className='City'>{data.location.city}</div>
        <div className='Country'>, {data.location.country}</div>
      </div>
    </div>
    <div>{StartEndDate(data.startDate, data.endDate)}</div>
  </div>;

  const right = <div>
    {data.diploma ? <div>{data.diploma}</div> : null }
    {data.description ? <div>{data.description}</div> : null }
  </div>

  return (
    <li className='EducationDetails'>
      {ColumnContainer(left, right, true)}
    </li>
  );
}

export default EducationDetails;
