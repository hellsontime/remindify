import AuthorizationContainer from '../../containers/AuthorizationContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function LoginComponent() {
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
        <div className="auth__checkbox">
          <input type="checkbox" id="authCheckbox"></input>
          <label htmlFor="authCheckbox">Stay logged in?</label>
        </div>
        <input type="submit" className="auth__row auth__submit" value="Sign In" />
        <div className="auth__links">
          <div>
            Dont have an account <a href="./register">Sign Up</a>
          </div>
          <div>
            Forgot your <a href="./restore"> Password</a>?
          </div>
        </div>
      </form>
    </AuthorizationContainer>
  );
}

export default LoginComponent;
