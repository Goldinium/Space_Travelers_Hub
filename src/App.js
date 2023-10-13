import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import NavLink from './routes/NavLink';
import Home from './routes/Home';
import Profile from './routes/Profile';
import MissionsPage from './routes/MissionsPage';
import Error from './routes/Error';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLink />}>
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
