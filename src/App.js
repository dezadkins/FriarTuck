import "./App.css";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <Header />
      </div>
      {/* Body */}
      <div className="app__body"></div>
    </div>
  );
}

export default App;
