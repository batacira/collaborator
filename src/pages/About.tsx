import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <div>
            <FontAwesomeIcon icon={faCoffee} />
            <h2>hello Automat</h2>
            <h1>About Page</h1>
        </div>
    );
}

export default About;
