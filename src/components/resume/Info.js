import profile from '../../images/profile.jpg';
import ColumnContainer from '../layout/ColumnContainer';
import './Info.scss';

function Info({ data }) {
  let address = null;
  if (data.address) {
    address = <div className='Address'>{data.address.numberAndStreet} - {data.address.zipCode} {data.address.city}, <span className='Country'>{data.address.country}</span></div>
  }

  const left =
    <div className='Info-left'>
      <p>{data.mail}</p>
      <p>{data.phone}</p>
      {address}
    </div>;

  const right =
    <div className='Info-right'>
      <img className='Info-profile-picture' src={profile} alt="Profile" />
      <div className='Info-name-description'>
        <h1>{data.name}</h1>
        <h3>{data.description}</h3>
      </div>
    </div>;

  return (
    <div className='Info ResumeSection'>
      {ColumnContainer(left, right)}
    </div>
  );
}

export default Info;
