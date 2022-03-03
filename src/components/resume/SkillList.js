import './SkillList.scss';

function SkillList(skills, smallStyle = false) {
  const skillsList = skills?.map(skill => 
    <div className='Skill' key={skill}>{skill}</div>
  );

  return <div className={`SkillList${smallStyle ? ' small' : ''}`}>{skillsList}</div>;
}

export default SkillList;