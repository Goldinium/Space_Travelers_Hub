import {
  Routes,
  Route,
} from 'react-router-dom';
import Rockets from './routes/Home';
import Profile from './routes/Profile';
// import Missions from './routes/Missions';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rockets />}>
        <Route path="Profile" element={<Profile />} />
        {/* <Route path="Missions" element={<Missions />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
