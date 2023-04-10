import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import DynamicBackground from './components/DynamicBackground';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="flex-1">
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <DynamicBackground>
      <div className="main">
        <h2 className="font-roboto font-semibold text-3xl text-shadow-lg">
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
