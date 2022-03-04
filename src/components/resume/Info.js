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
        {/* {SkillList(data.skills)} */}
      </div>
    </div>;

  return (
    <div className='Info'>
      {ColumnContainer(left, right)}
    </div>
  );
}

export default Info;
