import PropTypes from 'prop-types';
import EmptyNotificationsComponent from './EmptyNotificationsComponents';

function formatTimestamp(timestamp) {
  const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return new Date(timestamp).toLocaleString('en-US', options);
}

function NotificationsComponent({ notifications }) {
  return (
    <div className="notifications__inner">
      <div className="notifications__triangle"></div>
      <div className="notifications__wrapper">
        {notifications.length === 0 ? (
          <EmptyNotificationsComponent />
        ) : (
          <ul>
            {notifications.map((item) => (
              <li key={item.id}>
                <h4 className="notifications__title">{item.title}</h4>
                <p className="notifications__description">{item.description}</p>
                <p className="notifications__date">{formatTimestamp(item.timestamp)}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

NotificationsComponent.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired
    })
  ).isRequired
};

export default NotificationsComponent;
