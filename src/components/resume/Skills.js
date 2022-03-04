import ColumnContainer from '../layout/ColumnContainer';
import SkillList from './SkillList';
import './Skills.scss';

function Skills({ data }) {
  const title = <h2>{data.title}</h2>;

  return (
    <div className='Skills ResumeSection'>
      {ColumnContainer(title, SkillList(data.list), false)}
    </div>
  );
}

export default Skills;
