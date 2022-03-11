import { Envelope, HouseDoor, Telephone } from 'react-bootstrap-icons';
import profilePrisc from '../../images/profile-prisc.jpg';
import profile from '../../images/profile.jpg';
import ColumnContainer from '../layout/ColumnContainer';
import './Info.scss';

function Info({ data }) {
  let address = null;
  if (data.address) {
    let country = null;
    if (data.country) {
      country = <span className='Country'>, {data.address.country}</span>
    }
    address = <span className='Address'>{data.address.numberAndStreet} - {data.address.zipCode} {data.address.city}{country}</span>;
  }

  const left =
    <div className='Info-left'>
      <div className='InfoContact'>{data.mail} <Envelope className='InfoIcon' /></div>
      <div className='InfoContact'>{data.phone} <Telephone className='InfoIcon' /></div>
      <div className='InfoContact'>{address}<HouseDoor className='InfoIcon' /></div>
    </div>;

  const right =
    <div className='Info-right'>
      <img className='Info-profile-picture' src={data.picture === 'profile-prisc.jpg' ? profilePrisc : profile} alt="Profile" />
      <div className='Info-name-description'>
        <h1 className='InfoName'>{data.name}</h1>
        <h3 className='InfoDescription'>{data.description}</h3>
      </div>
    </div>;

  return (
    <div className='Info ResumeSection'>
      {ColumnContainer(left, right)}
    </div>
  );
}

export default Info;
