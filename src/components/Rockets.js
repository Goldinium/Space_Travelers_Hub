import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rocket from './Rocket';
import { fetchRocketsByThunk } from '../redux/rockets/rocketsSlice';

export default function Rockets() {
  const { allrockets, isLoading, error } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading === 'idle') {
      dispatch(fetchRocketsByThunk());
    }
  }, [dispatch, isLoading]);

  if (isLoading === 'pending') {
    return (<p>loading Rockets...</p>);
  }

  if (error) return (<p>Oops! Seems something went wrong</p>);

  return (
    <div className="books">
      {allrockets.length > 0 ? (
        <div className="book-container">
          {allrockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)}
        </div>
      ) : (
        <p className="no-books">
          <i>Currently, No Rockets</i>
        </p>
      )}
    </div>
  );
}
