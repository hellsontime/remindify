import AuthorizationContainer from '../../containers/AuthorizationContainer';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_PAGE_ROUTE } from '../../routes/PageRoutes';

function RestoreComponent() {
  const [confirmation, setConfirmation] = useState(true);
  const [confirmationCode, setConfirmationCode] = useState(['', '', '', '', '']);
  const codeRefs = useRef([]);

  const handleClick = () => {
    setConfirmation(!confirmation);
  };

  const handleConfirmationCodeChange = (index, event) => {
    const code = event.target.value.replace(/\D/, '');
    const updatedCode = [...confirmationCode];
    updatedCode[index] = code;
    setConfirmationCode(updatedCode);

    if (
      event.target.value === '' &&
      event.nativeEvent.inputType === 'deleteContentBackward' &&
      index > 0
    ) {
      codeRefs.current[index - 1].focus();
    } else if (code.length === 0 && index > 0) {
      codeRefs.current[index - 1].focus();
    } else if (code.length > 0 && index < codeRefs.current.length - 1) {
      codeRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <AuthorizationContainer>
      <form onSubmit={handleSubmit}>
        {confirmation ? (
          <input type="email" placeholder="E-mail" className="auth__row" />
        ) : (
          <div className="confirmation-code">
            {confirmationCode.map((code, index) => (
              <input
                type="text"
                className="auth__row"
                maxLength="1"
                value={code}
                onChange={(event) => handleConfirmationCodeChange(index, event)}
                ref={(ref) => (codeRefs.current[index] = ref)}
                key={index}
              />
            ))}
          </div>
        )}

        <input
          type="submit"
          className="auth__row auth__submit"
          value="Reset Password"
          onClick={handleClick}
        />
        <div className="auth__links">
          <div>
            Back to <Link to={LOGIN_PAGE_ROUTE}>Sign In</Link>
          </div>
        </div>
      </form>
    </AuthorizationContainer>
  );
}

export default RestoreComponent;
