import {
  Routes,
  Route,
} from 'react-router-dom';
import NavLink from './routes/NavLink';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Mission from './routes/Missions';
import Error from './routes/Error';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavLink />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
