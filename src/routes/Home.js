// import { useSelector } from 'react-redux';
import Rockets from '../components/Rockets';

export default function Home() {
  // const { allcategories } = useSelector((store) => store.categories);
  return (
    <div className="app-container">
      <div className="category-container">
        <div id="category">
          <h1> Rockets page </h1>
          <Rockets />
        </div>
      </div>
    </div>
  );
}
