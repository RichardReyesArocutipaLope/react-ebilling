import { ContentInput } from './ContentInput';
import './InputText.css';

export const InputText = ({ label, error = {}, col,...props }) => {
  return (
    <ContentInput label={label} error={error} col={col} className='content-input'>
      <input
        className={`InputText ${
          error && Object.keys(error).length > 0 && 'InputText--error'
        }`}
        type="text"
        autoComplete="off"
        {...props}
      />
    </ContentInput>
  );
};
