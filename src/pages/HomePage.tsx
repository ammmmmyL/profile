import Typewriter from 'typewriter-effect';
import Footer from '.././components/Footer';
import NavBar from '.././components/NavBar';
import '../App.css';
import DynamicBackground from '../components/DynamicBackground';

const HomePage = () => {
  return (
    <DynamicBackground>
      <NavBar />
      <div className="main">
        <div className="header">
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
          <div className="text-lg font-typewriter text-shadow-lg">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(5000)
                  .typeString('Software engineer')
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
        </div>
      </div>
      <Footer />
    </DynamicBackground>
  );
};

export default HomePage;
