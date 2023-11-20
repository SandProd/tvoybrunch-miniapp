import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

const onClose = () => {
  tg.Close();
}

function App() {

  useEffect( () => {
    tg.ready();
  }, [])
  
  return (
    <div className="App">
      App works
      <button onClick={onClose()}>Close</button>
    </div>
  );
}

export default App;
