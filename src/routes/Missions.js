import CurrentMissions from '../components/CurrentMissions';

export default function Missions() {
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
