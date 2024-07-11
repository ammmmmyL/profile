import { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import Footer from '.././components/Footer';
import '../App.css';
import { Button } from '../components/Button';
import DynamicBackground from '../components/DynamicBackground';
import Skills from './sections/Skills';

const HomePage = () => {
  const skillsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <DynamicBackground>
        {/* <NavBar /> */}
        <div className="main">
          <div
            className="header"
            // style={{ borderWidth: 2, borderColor: 'red' }}
          >
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

            {/* TODO： styles */}
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
        <Footer />
      </DynamicBackground>

      <Skills ref={skillsRef} />
    </div>
  );
};

export default HomePage;
