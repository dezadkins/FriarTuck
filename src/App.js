import "./App.css";
import Header from "./Header/Header";
import NewsFeed from "./NewsFeed/NewsFeed";
import Stats from "./Stats/Stats";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <Header />
      </div>
      {/* Body */}
      <div className="app__body">
        <div className="app__container">
          {/* LeftColumn */}
          <NewsFeed />
          {/* Stats */}
          <Stats />
        </div>
      </div>
      {/* Body */}
    </div>
  );
}

export default App;
