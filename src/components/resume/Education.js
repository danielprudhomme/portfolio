import ColumnContainer from '../layout/ColumnContainer';
import './Education.scss';
import EducationDetails from './EducationDetails';

function Education({ data }) {
  const title = <h2>{data.title}</h2>;

  const listItems = data?.list.map(education =>
    <EducationDetails key={education.school} data={education} />
  );

  return (
    <div className="Education">
      {ColumnContainer(title, null, false)}
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default Education;
