import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div className="box">
        <h1 className="title">Hi, Saya John</h1>
        <hr></hr>
        <p className="paragraph">
          Saya dari Kelas 12 sudah berhasil menginstall React
        </p>
      </div>
      </header>
    </div>
  );
}

export default App;
