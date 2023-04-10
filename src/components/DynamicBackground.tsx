import moment from 'moment';
import { ReactNode, useEffect, useState } from 'react';
import '../App.css';
import { getSunTimesLocal } from '../utils/calcBackground';

type Props = {
  children: ReactNode;
};

const DynamicBackground = ({ children }: Props) => {
  const [background, setBackground] =
    useState<'day' | 'night' | 'sunset'>('day');

  // TODO background animation?
  useEffect(() => {
    //* location = Toronto: 43.6532° N, 79.3832° W
    const torontoLoc = { lat: '43.6532', lng: '-79.3832' };
    const loadBg = async () => {
      const res = await getSunTimesLocal(torontoLoc);
      const { sunrise, sunset } = res || {};
      // console.info(`sunrise: ${sunrise}`);
      // console.info(`sunset: ${sunset}`);
      const curTime = moment().format();
      //* night: 2h after sunset - before sunrise
      if (
        sunrise &&
        sunset &&
        (curTime <= sunrise ||
          curTime >= moment(sunset).add(2, 'hours').format())
      ) {
        setBackground('night');
        //* sunset: 2h before sunset - 1h after sunset
      } else if (
        sunset &&
        curTime >= moment(sunset).subtract(2, 'hours').format() &&
        curTime <= moment(sunset).add(5, 'hours').format()
      ) {
        setBackground('sunset');
      }
    };

    loadBg();

    //* call loadBg every half an hour - 1000 * 60 * 30
    const intervalId = setInterval(loadBg, 1000 * 60 * 30);

    return () => clearInterval(intervalId);
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
          {children}
        </div>
      </div>
    </div>
  );
};

export default DynamicBackground;
