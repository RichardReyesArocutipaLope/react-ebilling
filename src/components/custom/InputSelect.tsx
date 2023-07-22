import { useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { ContentInput } from './ContentInput';
import './InputSelect.css';

export const InputSelect = ({ label, error = {},col, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const domSelect = useClickOutside(() => setIsOpen(false));

  return (
    <ContentInput label={label} error={error} col={col}>
      <div
        ref={domSelect}
        className={`inputSelect ${
          error && Object.keys(error).length > 0 && 'inputSelect--error'
        }`}
      >
        <div
          className={`inputSelect__container ${
            isOpen && 'inputSelect__container--active'
          }`}
        >
          {props.options.map(item => (
            <div key={item.id} className="inputSelect__option">
              <input
                type="radio"
                className="inputSelect__radio"
                id={item.id}
                name={props.name}
                value={item.value}
                defaultChecked={item.value === props.value}
                onChange={props.onChange}
                onClick={() => setIsOpen(!isOpen)}
              />
              <label htmlFor={item.id}>{item.label}</label>
            </div>
          ))}
        </div>

        <div
          className={`inputSelect__selected ${
            props.default &&
            !props.value &&
            'inputSelect__selected--placeholder'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {props.options.filter(item => item.value === props.value)[0]?.label ||
            props.default ||
            '\u00a0'}
        </div>
      </div>
    </ContentInput>
  );
};

