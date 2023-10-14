import Rockets from '../components/Rockets';

export default function Home() {
  return (
    <div className="app-container">
      <div className="rockets-container">
        <div id="rockets">
          <Rockets />
        </div>
      </div>
    </div>
  );
}
