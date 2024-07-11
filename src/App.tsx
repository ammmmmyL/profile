import { Link } from 'react-router-dom';
import './App.css';
import DynamicBackground from './components/DynamicBackground';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="flex-1">
      <AboutPage />
    </div>
  );
}

function NoMatch() {
  return (
    <DynamicBackground>
      <div className="main">
        <h2 className="text-3xl font-semibold font-roboto text-shadow-lg">
          Nothing to see here!
        </h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    </DynamicBackground>
  );
}

export default App;
