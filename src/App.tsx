import moment from 'moment';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import { getSunTimesLocal } from './utils/calcBackground';

function App() {
  const [background, setBackground] =
    useState<'day' | 'night' | 'sunset'>('day');

  useEffect(() => {
    // location = Toronto: 43.6532° N, 79.3832° W
    const torontoLoc = { lat: '43.6532', lng: '-79.3832' };
    const loadBg = async () => {
      const res = await getSunTimesLocal(torontoLoc);
      const { sunrise, sunset } = res || {};
      const curTime = moment().format();
      // night: 2h after sunset - before sunrise
      if (
        sunrise &&
        sunset &&
        (curTime <= sunrise ||
          curTime >= moment(sunset).add(2, 'hours').format())
      ) {
        setBackground('night');
        // sunset: 2h before sunset - 2h after sunset
      } else if (
        sunset &&
        curTime >= moment(sunrise).subtract(2, 'hours').format() &&
        curTime <= moment(sunrise).add(2, 'hours').format()
      ) {
        setBackground('sunset');
      }
    };

    loadBg();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="flex-1 items-center flex"
          style={{
            backgroundImage: `url(./${background}.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
          }}
        >
          <div className="dev-border justify-items-center flex-1">
            <p>Amy Li</p>
          </div>
        </div>
      </header>
      <body className="flex-1"></body>

      <Footer />
    </div>
  );
}

export default App;
