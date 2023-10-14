import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Home from './routes/Home';
import Profile from './routes/Profile';
import MissionsPage from './routes/MissionsPage';
import Error from './routes/Error';
import './App.css';
import NavLinks from './routes/NavLink';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLinks />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
