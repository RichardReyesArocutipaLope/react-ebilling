import './ContentInput.css'
export const ContentInput = props=> (
  <div className={`ContentInput col-md-${props.col}`}>
    {props.children}
    {props.label && (
      <label className="contentInput__label">{props.label}</label>
    )}
  </div>
);

