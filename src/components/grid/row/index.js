import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

const Row = ({ children, className }) =>
  <div className={classNames(styles.row, className)}>{children}</div>;

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Row.defaultProps = {
  className: null,
};

export default Row;
