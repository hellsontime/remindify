import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

function EmptyNotificationsComponent() {
  return (
    <div className="notifications__empty">
      <span>
        <FontAwesomeIcon icon={faMugHot} />
      </span>
      <p>No more notifications</p>
    </div>
  );
}

export default EmptyNotificationsComponent;
