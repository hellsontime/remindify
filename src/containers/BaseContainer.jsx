import PropTypes from 'prop-types';

function TodoPageContainer({ children }) {
  return <div className="container">{children}</div>;
}

TodoPageContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default TodoPageContainer;
