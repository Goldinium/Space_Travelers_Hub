// import { useSelector } from 'react-redux';
import CurrentMissions from '../components/CurrentMissions';

export default function Missions() {
  // const { allcategories } = useSelector((store) => store.categories);
  return (
    <div className="app-container">
      <div className="missions-container">
        <div id="missions">
          <h1> Mission page </h1>
          <CurrentMissions />
        </div>
      </div>
    </div>
  );
}
