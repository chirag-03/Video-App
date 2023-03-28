import { useEffect, useState } from 'react'

function Cards({ id, link, name, removeTour, addTour, editTour }) {
  //   const [readmore, setReadmore] = useState(false);

  //   const description = readmore ? info : `${info.substring(0, 200)}....`;
  //   function readmoreHandler() {
  //     setReadmore(!readmore);
  //   }

  return (
    <div className='card'>
      {/* <img src={link} className='image' alt=''></img> */}
      <iframe src={link}></iframe>
      <div className='tour-info'>
        <div className='tour-details'>
          {/* <h4 className="tour-price">₹ {price}</h4> */}
          <input
            className='tour-name'
            defaultValue={name}
            onChange={(e) => {
              editTour(id, e.target.value, 'name')
            }}
          />
          <input
            className='tour-name'
            defaultValue={link}
            onChange={(e) => {
              editTour(id, e.target.value, 'link')
            }}
          />

          {/* <h4 className='tour-name'>{name}</h4> */}
        </div>

        {/* <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read More`}
                    </span>
                </div> */}
      </div>

      <button className='btn-red' onClick={() => removeTour(id)}>
        Remove Card
      </button>
    </div>
  )
}
export default Cards
