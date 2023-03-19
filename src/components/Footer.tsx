import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../App.css';

const EMAIL = 'yuqing.li.amy@gmail.com';

const Footer = () => {
  return (
    <Navbar fixed="bottom" className="justify-content-center">
      <Nav>
        <Nav.Item>
          {/* Link open in new tab */}
          <Nav.Link
            href="https://github.com/ammmmmyL"
            target="_blank"
            className="p-0 m-0"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-black/70 hover:text-lavender/100 hover:-translate-y-1 hover:h-5"
              style={styles.icon}
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://www.linkedin.com/in/yu-qing-li"
            target="_blank"
            className="p-0 m-0"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-black/70 hover:text-lavender/100 hover:-translate-y-1 hover:h-5"
              style={styles.icon}
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href={`mailto:${EMAIL}`}
            target="_blank"
            className="p-0 m-0"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-black/70 hover:text-lavender/100 hover:-translate-y-1 hover:h-5"
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
    paddingRight: 5,
    paddingLeft: 5,
    marginRight: 5,
    marginLeft: 5,
  },
};
