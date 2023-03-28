import { useEffect, useState } from 'react'
import Cards from './Cards'

function Tours({ tours, removeTour, addTour, editTour }) {
  // const [card, setCard] = useState(tours);

  // console.log(card);

  // function changeHandler(event){
  //   // console.log(event.target.value);

  // }

  // function addCard(event){
  //     const {name, img, desc, price} = event.target;
  //     setCard((prevCardData)=>{
  //       return{
  //         ...prevCardData,
  //         [name] : [event.target.value],
  //         [img] : [event.target.value],
  //         [desc] : [event.target.value],
  //         [price] : [event.target.value]
  //       }
  //     })
  // }

  // console.log(tours);

  return (
    <div className='container'>

      <div>
        <h2 className='title'>Video App</h2>
      </div>

      <div className='cards'>
        {tours.map((tour) => {
          return (
            <Cards
              {...tour}
              removeTour={removeTour}
              addTour={addTour}
              editTour={editTour}
            ></Cards>
          )
        })}
      </div>
      <button className='btn-red' onClick={addTour}>
        Add card
      </button>
    </div>
  )
}
export default Tours
