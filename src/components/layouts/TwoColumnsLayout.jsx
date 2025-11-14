
const DetailColumnsLayout = ({ title, colA, colB }) => {
  return (
    <div className='detail-content'>
        <h2 className='detail-title'>{title}</h2>
        <div className='columns-wrapper'>
          <div className='detail-column'>
            {colA}
          </div>     
          <div className='links-column'>
            {colB}
          </div>
        </div>
      </div>
  )
}

export default DetailColumnsLayout