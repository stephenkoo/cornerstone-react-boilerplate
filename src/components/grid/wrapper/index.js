import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

const Wrapper = ({ children, className, size }) => (
  <div
    className={classNames(
      styles['o-wrapper'],
      styles[`o-wrapper--${size}`],
      className,
    )}
  >
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'full']),
};

Wrapper.defaultProps = {
  className: null,
  size: null,
};

export default Wrapper;
