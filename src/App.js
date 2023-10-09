import {
  Routes,
  Route,
} from 'react-router-dom';
import NavLink from './routes/NavLink';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Missions from './routes/Missions';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavLink />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
