// import { useSelector } from 'react-redux';
import Rockets from '../components/Rockets';

export default function Home() {
  // const { allcategories } = useSelector((store) => store.categories);
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
