import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

useEffect( () => {
  tg.ready();
}, [])

const onClose = () => {
  tg.Close();
}

function App() {
  return (
    <div className="App">
      App works
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
