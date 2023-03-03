import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Amy Li</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body></body>

      {/* // TODO FOOTER */}
      <Navbar fixed="bottom" className="justify-content-center">
        <Nav>
          <Nav.Item>
            <Nav.Link href="https://github.com/ammmmmyL">
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.linkedin.com/in/yu-qing-li">
              <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default App;
