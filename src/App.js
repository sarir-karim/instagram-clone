import "./App.css";
import Post from './Post'
function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram logo"
        />
      </div>

      {/* header */}

      {/* posts */}
      <Post/>
      <Post/>
      <Post/>
      {/* posts */}
    </div>
  );
}

export default App;
