/* import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import classNames from 'classnames';

import styles from './styles.scss';

const LinkComponent = ({
  activeClassName,
  children,
  className,
  inThisTab,
  inNewTab,
  isUnstyled,
  onClick,
  to,
}) => {
  const newTabProps = { target: '_blank', rel: 'noopener noreferrer' };
  const unstyledClass = { [styles.unstyledLink]: isUnstyled };

  //* `<a>` opens in new tab unless `inThisTab` is true.
  if (_.startsWith(to, 'http')) {
    return (
      <a
        href={to}
        onClick={onClick}
        {...newTabProps}
        className={classNames(className, unstyledClass)}
      >{children}</a>
    );
  }

  if (_.startsWith(to, 'tel:') || inThisTab) {
    return (
      <a
        href={to}
        onClick={onClick}
        className={classNames(className, unstyledClass)}
      >{children}</a>
    );
  }

  //* `<Link>` opens in current tab unless `inNewTab` is true.
  const inNewTabProps = inNewTab ? newTabProps : {};

  return (
    <Link
      to={to}
      onClick={onClick}
      activeClassName={activeClassName}
      className={classNames(className, unstyledClass)}
      {...inNewTabProps}
    >{children}</Link>
  );
};

LinkComponent.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  inNewTab: PropTypes.bool,
  inThisTab: PropTypes.bool,
  isUnstyled: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

LinkComponent.defaultProps = {
  activeClassName: null,
  className: null,
  inNewTab: false,
  inThisTab: false,
  isUnstyled: false,
  onClick: null,
  to: null,
};

export default LinkComponent;

*/
