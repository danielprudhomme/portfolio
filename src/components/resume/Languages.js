import ColumnContainer from '../layout/ColumnContainer';
import './Languages.scss';

function Languages({ data }) {
  const title = <h2>{data.title}</h2>;
  const listItems = data?.list.map(lang =>
    <li key={lang.language}>
      {ColumnContainer(lang.language, lang.level)}
    </li>
  );

  return (
    <div className='Languages'>
      {ColumnContainer(title, null, false)}
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default Languages;
