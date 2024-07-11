import dayjs from 'dayjs';
import { ReactNode, useEffect, useState } from 'react';
import '../App.css';
import { getSunTimesLocal } from '../lib/calcBackground';

type Props = {
  children: ReactNode;
};

const DynamicBackground = ({ children }: Props) => {
  const [background, setBackground] = useState<'day' | 'night' | 'sunset'>(
    'day'
  );

  // TODO background animation?
  useEffect(() => {
    //* location = Toronto: 43.6532° N, 79.3832° W
    const torontoLoc = { lat: '43.6532', lng: '-79.3832' };
    const loadBg = async () => {
      const res = await getSunTimesLocal(torontoLoc);
      const { sunrise, sunset } = res || {};
      // console.info(`sunrise: ${sunrise}`);
      // console.info(`sunset: ${sunset}`);
      const curTime = dayjs().format();
      //* night: 2h after sunset - before sunrise
      if (
        sunrise &&
        sunset &&
        (curTime <= sunrise ||
          curTime >= dayjs(sunset).add(2, 'hours').format())
      ) {
        setBackground('night');
        //* sunset: 2h before sunset - 1h after sunset
      } else if (
        sunset &&
        curTime >= dayjs(sunset).subtract(2, 'hours').format() &&
        curTime <= dayjs(sunset).add(5, 'hours').format()
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
          className="flex flex-col items-center justify-center h-screen"
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
