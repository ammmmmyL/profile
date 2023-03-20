import moment from 'moment';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import Footer from './components/Footer';
import NavVertical from './components/NavVertical';
import { Bubble } from './features/Bubble/Bubble';
import { getSunTimesLocal } from './utils/calcBackground';

function App() {
  const [background, setBackground] =
    useState<'day' | 'night' | 'sunset'>('day');

  // TODO background animation?
  useEffect(() => {
    // location = Toronto: 43.6532° N, 79.3832° W
    const torontoLoc = { lat: '43.6532', lng: '-79.3832' };
    const loadBg = async () => {
      const res = await getSunTimesLocal(torontoLoc);
      const { sunrise, sunset } = res || {};
      // console.info(`sunrise: ${sunrise}`);
      // console.info(`sunset: ${sunset}`);
      const curTime = moment().format();
      // night: 2h after sunset - before sunrise
      if (
        sunrise &&
        sunset &&
        (curTime <= sunrise ||
          curTime >= moment(sunset).add(2, 'hours').format())
      ) {
        setBackground('night');
        // sunset: 2h before sunset - 1h after sunset
      } else if (
        sunset &&
        curTime >= moment(sunset).subtract(2, 'hours').format() &&
        curTime <= moment(sunset).add(1, 'hours').format()
      ) {
        setBackground('sunset');
      }
    };

    loadBg();
  }, []);

  return (
    <div className="flex-1">
      <div className="App">
        <div
          className="flex items-center justify-center h-screen flex-col"
          style={{
            backgroundImage: `url(./${background}.jpg)`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            width: '100%',
          }}
        >
          <NavVertical />

          <div className="main">
            <div className="header">
              <div className="font-typewriter">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Hello there👋, ')
                      .pauseFor(2000)
                      .typeString('I’m')
                      .start();
                  }}
                />
              </div>
              <h1 className="font-mono font-semibold text-3xl">Amy Li</h1>
              <h4 className="font-typewriter text-lg">Full-Stack Developer</h4>
              <div className="font-typewriter">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(10000)
                      .typeString('Welcome to my website!')
                      .start();
                  }}
                />
              </div>
            </div>

            {/* puzzle container */}
            <div className="grid grid-cols-2 gap-4  dev-border-2">
              <Bubble backgroundWidth={800} backgroundHeight={400} Size={200} />
              {/* puzzle cell */}
              <div className="flex bg-gray-200 justify-center items-center h-24"></div>
              <div className="flex bg-gray-200 justify-center items-center h-24">
                Cell 2
              </div>
              <div className="flex bg-gray-200 justify-center items-center h-24">
                Cell 3
              </div>
              <div className="flex bg-gray-200 justify-center items-center h-24 puzzle-piece">
                Cell 4
              </div>
            </div>

            {/* <PuzzlePiece /> */}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
