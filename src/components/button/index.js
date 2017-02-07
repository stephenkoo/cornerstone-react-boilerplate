/* import React, { PropTypes } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import styles from './styles.scss';

const buttonTypes = ['button', 'submit'];

const Button = ({
  ariaLabel,
  children,
  className,
  isDisabled,
  onClick,
  type,
}) => {
  const buttonClasses = classNames(styles.button, className);
  const buttonProps = { buttonClasses, type, onClick, 'aria-label': ariaLabel };

  if (isDisabled) {
    return (
      <button disabled {...buttonProps}>{children}</button>
    );
  }

  if (_.includes(buttonTypes, type)) {
    return (
      <button {...buttonProps}>{children}</button>
    );
  }

  return (
    <button type="button" {...buttonProps}>{children}</button>
  );
};

Button.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(buttonTypes),
};

Button.defaultProps = {
  ariaLabel: null,
  className: null,
  isDisabled: false,
  onClick: null,
  type: null,
};

export default Button; */
