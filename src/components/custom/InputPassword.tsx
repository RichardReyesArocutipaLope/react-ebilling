import { ContentInput } from './ContentInput';
import './InputPassword.css';

export const InputPassword = ({ label, error = {}, ...props }) => {
  return (
    <ContentInput label={label} error={error}>
      <input
        className={`InputPassword ${
          error && Object.keys(error).length > 0 && 'InputPassword--error'
        }`}
        type="password"
        autoComplete="off"
        {...props}
      />
    </ContentInput>
  );
};

