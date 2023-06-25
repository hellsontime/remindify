import AuthorizationContainer from '../../containers/AuthorizationContainer';
import { useRef, useState } from 'react';

function RestoreComponent() {
  const [confirmation, setConfirmation] = useState(true);
  const [confirmationCode, setConfirmationCode] = useState(['', '', '', '', '']);
  const codeRefs = useRef([]);

  const handleClick = () => {
    setConfirmation(!confirmation);
  };

  const handleConfirmationCodeChange = (index, event) => {
    const code = event.target.value.replace(/\D/, ''); // Remove non-digit characters
    const updatedCode = [...confirmationCode];
    updatedCode[index] = code;
    setConfirmationCode(updatedCode);

    if (
      event.target.value === '' &&
      event.nativeEvent.inputType === 'deleteContentBackward' &&
      index > 0
    ) {
      // If the input value is empty and the user pressed the backspace key, focus the previous input field
      codeRefs.current[index - 1].focus();
    } else if (code.length === 0 && index > 0) {
      // If the current code is empty and there is a previous input field, focus it
      codeRefs.current[index - 1].focus();
    } else if (code.length > 0 && index < codeRefs.current.length - 1) {
      // If the current code is not empty and there is a next input field, focus it
      codeRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    // Handle form submission logic here, if needed
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
            Back to <a href="./login">Sign In</a>
          </div>
        </div>
      </form>
    </AuthorizationContainer>
  );
}

export default RestoreComponent;
