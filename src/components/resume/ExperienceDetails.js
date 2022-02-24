import './ExperienceDetails.scss';

function ExperienceDetails({ data }) {
  return (
    <li className='ExperienceDetails'>
      <div>
         {data.company} {data.job}
      </div>
    </li>
  );
}

export default ExperienceDetails;
