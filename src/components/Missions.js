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
    <div className="missions">
      {allmissions.length > 0 ? (
        <div className="book-container">
          <table className="mission-card">
            <tr className="mission-details">
              <th><h4>Mission</h4></th>
              <th><h4>Description</h4></th>
              <th><h4>Status</h4></th>
              <th><h4>&nbsp;</h4></th>
            </tr>
            {allmissions.map(
              (mission) => <Mission key={mission.id} mission={mission} />,
            )}
          </table>
        </div>
      ) : (
        <p className="no-mission">
          <i>Currently, No Missions</i>
        </p>
      )}
    </div>
  );
}
