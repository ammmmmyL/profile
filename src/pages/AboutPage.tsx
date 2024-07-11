import Footer from '.././components/Footer';
import NavBar from '.././components/NavBar';
import '../App.css';
import DynamicBackground from '../components/DynamicBackground';

const HomePage = () => {
  return (
    <DynamicBackground>
      <NavBar />

      <div className="flex main">
        <div className="flex header">
          <h1 className="text-3xl font-semibold font-roboto text-shadow-lg">
            About Page WIP
          </h1>
        </div>
      </div>

      <Footer />
    </DynamicBackground>
  );
};

export default HomePage;
