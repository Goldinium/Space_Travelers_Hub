import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rocket from './Rocket';
import { fetchRocketsByThunk } from '../redux/rockets/rocketsSlice';

export default function Rockets() {
  const { allrockets, isLoading, error } = useSelector((store) => store.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading === 'true') {
      dispatch(fetchRocketsByThunk());
    }
  }, [dispatch, isLoading, error]);

  if (isLoading === 'pending') {
    return (<p>loading Rockets...</p>);
  }

  if (error) return (<p>Oops! Seems something went wrong</p>);

  return (
    <div className="rockets">
      {allrockets.length > 0 ? (
        <div className="rockets-container">
          {allrockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)}
        </div>
      ) : (
        <p className="no-rockets">
          <i>Currently, No Rockets</i>
        </p>
      )}
    </div>
  );
}
