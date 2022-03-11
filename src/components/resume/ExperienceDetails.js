import ColumnContainer from '../layout/ColumnContainer';
import './ExperienceDetails.scss';
import OrganizationDetails from './OrganizationDetails';

function ExperienceDetails({ data }) {
  const left = OrganizationDetails({ ...data, organization: data.company });

  let environmentSection = null;
  if (data.environment && data.environment.length > 0) {
    const environmentList = data.environment?.join(', ');
    environmentSection = <div className='Environment'>
      {environmentList}
    </div>;
  }

  let tasks = null;
  if (data.tasks && data.tasks.length > 0) {
    tasks = <ul className='ExperienceTaskList'>
      {data.tasks.map(task => <li key={task}>{task}</li>)}
    </ul>
  }

  const right = <div className='ExperienceRight'>
    {data.title ? <h3 className='ExperienceTitle'>{data.title}</h3> : null}
    <div>{data.description}</div>
    {tasks}
    {environmentSection}
  </div>

  return (
    <li className='ExperienceDetails'>
      {ColumnContainer(left, right, true)}
    </li>
  );
}

export default ExperienceDetails;
