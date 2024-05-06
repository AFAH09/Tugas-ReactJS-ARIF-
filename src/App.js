import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="box">
        <h1 className="title">Hi, Saya John</h1>
        <hr></hr>
        <p className="paragraph">
          Saya dari Kelas 12 sudah berhasil menginstall React
        </p>
      </div>
      <div className="box">
      <h1 className="title">Data diripeserta kelas Reactjs</h1>
        <hr></hr>
        <ul>
          <li>
            <p>
               <b>Nama lengkap :</b> Ahamd fauzan arif hakim
            </p>
          </li>
          <li>
            <p>
               <b>Email :</b> ahamdfauzanarifhakim@gmail.com
            </p>
          </li>
          <li>
            <p>
               <b>Batch Pelatihan :</b> Batch 12
            </p>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default App;
