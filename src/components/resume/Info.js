import { Envelope, HouseDoor, Telephone } from 'react-bootstrap-icons';
import profilePrisc from '../../images/profile-prisc.jpg';
import profile from '../../images/profile.jpg';
import ColumnContainer from '../layout/ColumnContainer';
import './Info.scss';

function Info({ data }) {
  let address = null;
  if (data.address) {
    let country = null;
    if (data.address.country) {
      country = <span className='Country'>, {data.address.country}</span>
    }
    address = <div className='Address'>
      <div>{data.address.numberAndStreet}</div>
      <div>{data.address.zipCode} {data.address.city}{country}</div>
    </div>;
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
        <div className='InfoDescription'>{data.description}</div>
        <div className='InfoDescription'>{data.description2}</div>
        <div>{data.subdescription}</div>
      </div>
    </div>;

  return (
    <div className='Info ResumeSection'>
      {ColumnContainer(left, right)}
    </div>
  );
}

export default Info;
