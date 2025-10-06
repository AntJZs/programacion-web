import { useState } from 'react';
import './App.css';
import Slider from './Slider';

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const valueChange = (color) => (evt) => {
    const value = evt.target.value;
    if (color === 'red') setRed(value);
    if (color === 'green') setGreen(value);
    if (color === 'blue') setBlue(value);
  };
  const bgcolor = `rgb(${red}, ${green}, ${blue})`;
  return (
    <>
      <div className='container'>
        <div className='preview' style={{ backgroundColor: bgcolor }}>
          <h2>
            rgb({red},{green},{blue})
          </h2>
        </div>
        <div className='tweak-pane'>
          <h2>
            <Valores></Valores>
          </h2>
          <p>Rojo:</p>
          <Slider value={red} onChange={valueChange('red')} />
          <p>Verde:</p>
          <Slider value={green} onChange={valueChange('green')} />
          <p>Azul:</p>
          <Slider value={blue} onChange={valueChange('blue')} />
        </div>
      </div>
    </>
  );
}

export default App;
