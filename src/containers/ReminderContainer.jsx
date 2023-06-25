import BaseContainer from './BaseContainer';
import PropTypes from 'prop-types';

function AuthorizationContainer({ children }) {
  return (
    <BaseContainer>
      <div className="reminder__wrapper">
        {children}
        <div className="bgdrop1"></div>
        <div className="bgdrop2"></div>
        <div className="bgdrop3"></div>
      </div>
    </BaseContainer>
  );
}

AuthorizationContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthorizationContainer;
