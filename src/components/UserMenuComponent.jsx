import { useState } from 'react';
import userData from '../constants/user';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserMenuComponent() {
  const [user, setUser] = useState(userData);

  // eslint-disable-next-line no-unused-vars
  const updateUser = (user) => {
    setUser(user);
  };

  return (
    <div className="user-menu">
      <div className="user-menu__icon">
        <span>{user.name.charAt(0).toUpperCase()}</span>
      </div>
      <div className="user-menu__dropdown dropdown">
        <div className="dropdown__triangle"></div>
        <div className="dropdown__wrapper">
          <ul>
            <li>
              <FontAwesomeIcon icon={faRotateLeft} />
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserMenuComponent;
