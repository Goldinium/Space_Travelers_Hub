import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Mission from './Mission';
import { fetchMissionsByThunk } from '../redux/missions/missionsSlice';

export default function Missions() {
  const { allmissions, isLoading } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading === 'idle') {
      dispatch(fetchMissionsByThunk());
    }
  }, [dispatch, isLoading]);

  if (isLoading === 'pending') {
    return (<p>Loading...</p>);
  }

  return (
    <div className="books">
      {allmissions.length > 0 ? (
        <div className="book-container">
          {allmissions.map((mission) => <Mission key={mission.id} mission={mission} />)}
        </div>
      ) : (
        <p className="no-books">
          <i>Currently, No Missions</i>
        </p>
      )}
    </div>
  );
}
