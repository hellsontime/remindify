import AuthorizationContainer from '../../containers/AuthorizationContainer';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { LOGIN_PAGE_ROUTE } from '../../routes/PageRoutes';

function RegisterComponent() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AuthorizationContainer>
      <form>
        <input type="text" placeholder="Your Name" className="auth__row" />
        <input type="email" placeholder="E-mail" className="auth__row" />

        <div className="auth__password-wrapper">
          <input
            placeholder="Password"
            className="auth__row auth__password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div onClick={togglePasswordVisibility}>
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} className="password_eye" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="password_eye" />
            )}
          </div>
        </div>

        <input type="submit" className="auth__row auth__submit" value="Sign Up" />
        <div className="auth__links">
          <div>
            Already have an account? <Link to={LOGIN_PAGE_ROUTE}>Login</Link>
          </div>
        </div>
      </form>
    </AuthorizationContainer>
  );
}

export default RegisterComponent;
