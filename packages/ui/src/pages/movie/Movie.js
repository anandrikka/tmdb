import { useEffect, useState } from 'react';

function MoviePage(props) {
  let [counter, setCounter] = useState(0);

  const counterIncrease = () => {
    setCounter(++counter);
  };

  useEffect(() => {
    return () => {
      console.log('Unmounted');
    };
  }, []);

  return (
    <div>
      <p>Movie Page: {counter}</p>
      <button onClick={counterIncrease}>Increase</button>
      <button onClick={() => props.history.push('/home')}>Back</button>
    </div>
  );
}

export default MoviePage;
