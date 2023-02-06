import { PinMapFill } from 'react-bootstrap-icons';
import StartEndDate from '../resume/StartEndDate';
import './OrganizationDetails.scss';

function OrganizationDetails(data) {
  const location = data.location ? <div className='Location'>
    <PinMapFill className='LocationIcon' />
    <div className='City'>{data.location.city}</div>
    {data.location.country ? <div className='Country'>, {data.location.country}</div> : null}
  </div> : null;

  return (
    <div className='OrganizationDetails'>
      <div className='Organization'>{data.organization}</div>

      {location}
      <div className='StartEndDate'>{StartEndDate(data.startDate, data.endDate)}</div>
    </div>
  );
}

export default OrganizationDetails;
