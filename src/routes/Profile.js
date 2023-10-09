import CurrentUser from '../components/CurrentUser';

export default function Profile() {
  return (
    <div className="app-container">
      <div className="category-container">
        <div id="category">
          <h1> Profile Page </h1>
          <CurrentUser />
        </div>
      </div>
    </div>

  );
}
