import './ColumnContainer.scss';

function ColumnContainer(left, right) {
  return (
    <div className='ColumnContainer'>
      <div className='row'>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 Col-left">
          {left}
        </div>
        <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8 Col-right">
          {right}
        </div>
      </div>
    </div>
  );
}

export default ColumnContainer;
