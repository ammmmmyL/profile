import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { cn } from '../lib/utils';
import './../App.css';

const EMAIL = 'yuqing.li.amy@gmail.com';

// TODO: other icons should be fixed when hover over 1 icon

const Footer = () => {
  return (
    <Navbar fixed="bottom" className="items-baseline justify-center">
      <Nav className="flex items-baseline justify-center gap-6">
        <Nav.Item>
          {/* Link open in new tab */}
          <Nav.Link
            href="https://github.com/ammmmmyL"
            target="_blank"
            className="px-2 py-0 m-0"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={IconClassName}
              style={styles.icon}
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="https://www.linkedin.com/in/yu-qing-li"
            target="_blank"
            className="px-2 py-0 m-0"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={IconClassName}
              style={styles.icon}
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href={`mailto:${EMAIL}`}
            target="_blank"
            className="px-2 py-0 m-0"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className={IconClassName}
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

const IconClassName = cn(
  'text-black/70 hover:text-white',
  'hover:animate-pulse hover:-translate-y-1 h-5',
  'lg:h-6 lg:hover:h-8'
);
