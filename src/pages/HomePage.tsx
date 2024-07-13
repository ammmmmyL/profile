import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
import Footer from '.././components/Footer';
import '../App.css';
import { Button } from '../components/Button';
import DynamicBackground from '../components/DynamicBackground';
import { getSunTimesLocal } from '../lib/calcBackground';
import { cn } from '../lib/utils';
import Skills from './sections/Skills';

export interface BaseProps {
  theme: 'theme-night' | 'theme-sunset' | '';
}

const HomePage = () => {
  const [background, setBackground] = useState<'day' | 'night' | 'sunset'>(
    'day'
  );
  const [theme, setTheme] = useState<'theme-night' | 'theme-sunset' | ''>('');

  // TODO background animation?
  useEffect(() => {
    //* location = Toronto: 43.6532° N, 79.3832° W
    const torontoLoc = { lat: '43.6532', lng: '-79.3832' };
    const loadBg = async () => {
      const res = await getSunTimesLocal(torontoLoc);
      const { sunrise, sunset } = res || {};
      console.info(`sunrise: ${sunrise}`);
      console.info(`sunset: ${sunset}`);
      const curTime = dayjs().format();
      console.info(`currentTime: ${curTime}`);
      //* night: 2h after sunset - before sunrise
      if (
        sunrise &&
        sunset &&
        (curTime <= sunrise ||
          curTime >= dayjs(sunset).add(2, 'hours').format())
      ) {
        setBackground('night');
        setTheme('theme-night');
        //* sunset: 2h before sunset - 1h after sunset
      } else if (
        sunset &&
        curTime >= dayjs(sunset).subtract(2, 'hours').format() &&
        curTime <= dayjs(sunset).add(5, 'hours').format()
      ) {
        setBackground('sunset');
        setTheme('theme-sunset');
      }
    };

    loadBg();

    //* call loadBg every half an hour - 1000 * 60 * 30
    const intervalId = setInterval(loadBg, 1000 * 60 * 30);

    return () => clearInterval(intervalId);
  }, []);

  const skillsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <DynamicBackground background={background}>
        <div className={cn('main', `${theme}`)}>
          <div className="header text-skin-base">
            <div className="font-typewriter text-shadow-lg">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Hello there👋, ')
                    .pauseFor(1000)
                    .typeString('I’m')
                    .start();
                }}
              />
            </div>
            <h1 className="text-3xl font-semibold leading-normal font-typewriter text-shadow-lg">
              Amy Li
            </h1>
            <div className="text-xl font-typewriter text-shadow-lg">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(5000)
                    .typeString('Fullstack developer')
                    .start();
                }}
                options={{
                  cursor: '',
                }}
              />
            </div>

            <div className="font-typewriter text-shadow-lg">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(8000)
                    .typeString('Welcome to my website!')
                    .start();
                }}
              />
            </div>

            {/* // TODO： styles */}
            <Button
              className="my-10"
              variant="outline"
              size="lg"
              onClick={() => {
                skillsRef?.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-lg font-typewriter">Get started</span>
            </Button>
          </div>
        </div>
      </DynamicBackground>

      <Skills ref={skillsRef} theme={theme} />

      <Footer theme={theme} />
    </div>
  );
};

export default HomePage;
