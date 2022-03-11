import ColumnContainer from '../layout/ColumnContainer';
import './EducationDetails.scss';
import OrganizationDetails from './OrganizationDetails';

function EducationDetails({ data }) {
  const left = OrganizationDetails({ ...data, organization: data.school });

  const right = <div>
    {data.diploma ? <div>{data.diploma}</div> : null }
    {data.description ? <div>{data.description}</div> : null }
  </div>

  return (
    <li className='EducationDetails'>
      {ColumnContainer(left, right, true)}
    </li>
  );
}

export default EducationDetails;
