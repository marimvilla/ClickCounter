import './App.css';
import freeCodeCampLogo from './assets/freecodecamplogo.png';
import Button from './components/Button';
import Count from './components/Count'
import { useState } from 'react';

function App() {

  const [numClick, setNumClick] = useState(0);

  const manageClick = () => {
    setNumClick(numClick + 1);
  };

  const resetButton = () => {
    setNumClick(0)
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
          className='logo'
          src={freeCodeCampLogo}
          alt='Logo'
        />
      </div>
      
      <div className='count-container'>
        <div className='one'>
        <Count numClick={numClick} />
      </div>
      <div className='two'>
        <Button
          text='Click'
          clickButton={true}
          manageClick={manageClick} />
        <Button
          text='Reiniciar'
          clickButton={false}
          manageClick={resetButton} />
      </div>

      </div>
    </div>
  );
};

export default App;
