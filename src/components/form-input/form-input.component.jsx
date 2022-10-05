import { FormInputLabel, Input, Group } from './form-input.styles';
import { PropTypes } from 'prop-types';

const FormInput = ({ label, ...otherProps }) => {
   return (
      <Group>
         <Input {...otherProps} />
         {label && (
            <FormInputLabel shrink={otherProps.value.length}>
               {label}
            </FormInputLabel>
         )}
      </Group>
   );
};

FormInput.propTypes = {
   label: PropTypes.string,
   otherProps: PropTypes.object,
};

export default FormInput;
