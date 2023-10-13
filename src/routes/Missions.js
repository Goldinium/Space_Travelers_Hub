// import { useSelector } from 'react-redux';
import Missions from '../components/Missions';

export default function Mission() {
  // const { allcategories } = useSelector((store) => store.categories);
  return (
    <div className="app-container">
      <div className="mission-container">
        <div id="mission">
          <h1> Missions page </h1>
          <Missions />
        </div>
      </div>
    </div>
  );
}
