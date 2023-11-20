import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './Components/hooks/useTelegram';

function App() {
  const {tg, onClose, onToggleButton} = useTelegram();

  useEffect( () => {
    tg.ready();
  }, [])
  
  return (
    <div className="App">
      App works
      <button onClick={onToggleButton}>Close</button>
    </div>
  );
}

export default App;
