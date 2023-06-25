import PropTypes from 'prop-types';

function BaseContainer({ children }) {
  return (
    <div className="container">
      <div className="container-inner">{children}</div>
    </div>
  );
}

BaseContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default BaseContainer;
