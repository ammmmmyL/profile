import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../App.css';

const NavVertical = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const sm = 768; // md for tailwind
      const currentWidth = window.innerWidth;
      // console.log('currentWidth', currentWidth);
      // console.log('isSmallScreen', currentWidth < sm);
      setIsSmallScreen(currentWidth < sm);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        //* Render the collapsed menu
        <div className="fixed top-0 left-0 w-full z-10">
          <Navbar
            collapseOnSelect={true}
            fixed="top"
            expand="md"
            className={`
              bg-gray-200 bg-opacity-30 
              backdrop-filter backdrop-blur-lg backdrop-opacity-25
              shadow-lg
            `}
          >
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="mr-5"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link
                  className="text-black/70 hover:text-lavender/100"
                  href="#home"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="text-black/70 hover:text-lavender/100"
                  href="#link"
                >
                  Link
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      ) : (
        //* Render the full menu
        <div className="relative">
          <Nav
            className={`
              flex flex-col md:flex-row flex-wrap md:flex-wrap 
              items-center justify-center
              position-fixed top-0 left-0 md:translate-x-0 transform -translate-x-full md:transform-none 
              h-full w-20 sm:w-32 lg:w-40 
              bg-gray-200 bg-opacity-30 
              backdrop-filter backdrop-blur-lg backdrop-opacity-25
              shadow-2xl
            `}
          >
            <div className={`flex flex-col justify-center h-full`}>
              <Nav.Item>
                <Nav.Link
                  className="text-black/70 hover:text-lavender/100"
                  href="#about"
                >
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="text-black/70 hover:text-lavender/100"
                  href="#skills"
                >
                  Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="text-black/70 hover:text-lavender/100"
                  href="#projects"
                >
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="text-black/70 hover:text-lavender/100"
                  href="#blog"
                >
                  Blog
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="text-black/70 hover:text-lavender/100"
                  href="#contact"
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
            </div>
          </Nav>
        </div>
      )}
    </div>
  );
};

export default NavVertical;
