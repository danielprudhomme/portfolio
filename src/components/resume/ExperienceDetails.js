import ColumnContainer from '../layout/ColumnContainer';
import './ExperienceDetails.scss';

function dateToString(date) {
  const month = ('00'+date.getMonth()).slice(-2);
  const year = date.getFullYear();
  return `${month}/${year}`;
}

function ExperienceDetails({ data }) {
  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);

  const left = <div>
    <div className='ExperienceCompany'>{data.company}</div>
    <div className='ExperienceLocation'>
      <span className='City'>{data.location.city}</span> - <span className='Country'>{data.location.country}</span>
    </div>
    {/* <div className='ExperienceJob'>{data.job}</div> */}
    <div>{dateToString(startDate)} - {dateToString(endDate)}</div>
  </div>;

  const right = <div>
    {data.description}
  </div>

  return (
    <li className='ExperienceDetails'>
      {ColumnContainer(left, right, true)}
    </li>
  );
}

export default ExperienceDetails;
