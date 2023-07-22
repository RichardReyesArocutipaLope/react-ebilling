import './InputSwitch.css';

export const InputSwitch = ({ name }) => (
  <span className="input-switch">
    <input className="input-switch__input" type="checkbox" id={name} />
    <label className="input-switch__label" htmlFor={name}></label>
  </span>
);

