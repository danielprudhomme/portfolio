import profile from '../../images/profile.jpg';
import ColumnContainer from '../layout/ColumnContainer';
import './Info.scss';

function Info({ data }) {
  const left =
    <div className='Info-left'>
      <p>{data.mail}</p>
      <p>{data.phone}</p>
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
    <div className='Info'>
      {ColumnContainer(
        left,
        right,
      )}

      {/* <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8 Info-left">
          <h1>{data.name}</h1>
          <h3>{data.description}</h3>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 Info-right">
          <img className='Info-profile-picture' src={profile} alt="Profile" />
          <p>{data.mail}</p>
          <p>{data.phone}</p>
        </div>
      </div> */}
    </div>
  );
}

export default Info;
