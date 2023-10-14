import CurrentUser from '../components/CurrentUser';

export default function Profile() {
  return (
    <div className="app-container">
      <div className="profile-container">
        <div id="profile">
          <CurrentUser />
        </div>
      </div>
    </div>

  );
}
