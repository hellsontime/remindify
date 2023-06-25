import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';

function NotFoundComponent() {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <p>The page you&#39;re looking for could not be found.</p>
      <FontAwesomeIcon icon={faLinkSlash} className="not-found__icon" />
    </div>
  );
}

export default NotFoundComponent;
