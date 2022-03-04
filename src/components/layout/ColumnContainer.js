import './ColumnContainer.scss';

function ColumnContainer(left, right, showSeparator = true) {
  return (
    <div className='ColumnContainer'>
      <div className='row'>
        <div className={`col-xs-12 col-sm-6 col-md-4 col-lg-5 Col-left ${showSeparator ? 'with-separator' : ''}`}>
          {left}
        </div>
        <div className="col-xs-12 col-sm-6 col-md-8 col-lg-7 Col-right">
          {right}
        </div>
      </div>
    </div>
  );
}

export default ColumnContainer;
