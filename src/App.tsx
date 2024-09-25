import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <div>
        <Link to="/html5-qrcode" className="link">Html5 QrCode</Link>
        <Link to="/react-zxing" className="link">React ZXing</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default App;
