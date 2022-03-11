import mapIcon from '../../images/icons/map.png';
import StartEndDate from '../resume/StartEndDate';
import './OrganizationDetails.scss';

function OrganizationDetails(data) {
  return (
    <div className='OrganizationDetails'>
      <div className='Organization'>{data.organization}</div>

      <div className='Location'>
        <img className='LocationIcon' src={mapIcon} alt="Location" />
        <div className='City'>{data.location.city}</div>
        {data.location.country ? <div className='Country'>, {data.location.country}</div> : null}
      </div>
      <div className='StartEndDate'>{StartEndDate(data.startDate, data.endDate)}</div>
    </div>
  );
}

export default OrganizationDetails;
