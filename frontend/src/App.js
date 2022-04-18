import { useState } from 'react';
import './App.css';
import Movies from './Components/Movies';
import movies from './Components/database';
import ShowCase from './Components/ShowCase';
import Cinema from './Components/Seats';


function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])
  return (
    <div className="App">
      <Movies
      movie={selectedMovie}
      onChange={movie => {
        setSelectedSeats([])
        setSelectedMovie(movie)
      }}
      />
      <ShowCase />
      <Cinema 
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />
      <p className='info'>
        You have selected <span className='count'>{selectedSeats.length}</span>{' '}
        seats for the price off{' '}
        <span className='total'>
          {selectedSeats.length * selectedMovie.price}€
        </span>
      </p>
    </div>
  );
}

export default App;
