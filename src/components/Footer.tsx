import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./../App.css";

const Footer = () => {
  return (
    <Navbar fixed="bottom" className="justify-content-center">
      <Nav>
        <Nav.Item>
          <Nav.Link href="https://github.com/ammmmmyL" className="p-0 m-0">
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:bg-violet-200 mb-0"
              style={styles.icon}
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://www.linkedin.com/in/yu-qing-li"
            className="p-0 m-0"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:bg-violet-200"
              style={styles.icon}
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="p-0 m-0">
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:bg-violet-200"
              style={styles.icon}
            />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Footer;

const styles = {
  icon: {
    borderRadius: 5,
    padding: 5,
  },
};
