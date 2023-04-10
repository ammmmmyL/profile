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
          <h1 className="font-roboto font-semibold text-3xl text-shadow-lg">
            About Page WIP
          </h1>
        </div>
      </div>

      <Footer />
    </DynamicBackground>
  );
};

export default HomePage;
