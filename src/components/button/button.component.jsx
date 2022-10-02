import './button.styles.scss';
import { PropTypes } from 'prop-types';

/**
 * 3 types of buttons
 *  - default
 *  - inverted
 *  - google sign in
 */

const BUTTON_TYPE_CLASSES = {
   google: 'google-sign-in',
   inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
   return (
      <button
         className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
         {...otherProps}
      >
         {children}
      </button>
   );
};

Button.propTypes = {
   children: PropTypes.node,
   buttonType: PropTypes.string,
   otherProps: PropTypes.object,
};

export default Button;
