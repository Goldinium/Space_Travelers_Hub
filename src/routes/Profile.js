import CurrentUser from '../components/CurrentUser';

export default function Profile() {
  return (
    <div className="app-container">
      <div className="profile-container">
        <div id="profile">
          <h1> Profile Page </h1>
          <CurrentUser />
        </div>
      </div>
    </div>

  );
}
