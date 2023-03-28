import React, { useEffect, useState } from 'react'
import { data } from './data.js'
import Tours from './components/Tours.js'

const App = () => {
  const [tours, setTours] = useState(data)
  var len = tours.length
  const editTour = (id, value, edit) => {
    var newTours = tours
    for (var i = 0; i < newTours.length; i++) {
      if (newTours[i].id === id) {
        if (edit === 'name') newTours[i].name = value
        else newTours[i].link = value
        break
      }
    }
    console.log(newTours, 'edit value')
    setTours([...newTours])
  }

  const addTour = () => {
    var newTour = {
      id: len,
      name: 'temp',
      link: 'https://cdn.thecodehelp.in/Jaipur.jpeg',
    }
    setTours([...tours, newTour])
    len = len + 1
  }

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  if (tours.length === 0) {
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  // useEffect(() => {}, [])

  return (
    <div className='App'>
      <Tours
        tours={tours}
        removeTour={removeTour}
        addTour={addTour}
        editTour={editTour}
      ></Tours>
    </div>
  )
}

export default App
