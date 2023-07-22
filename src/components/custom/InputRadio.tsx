import './InputRadio.css'

export const InputRadio = ({ col,label,name,onChange,value }) => {
    return (
        <div className={`content-input col-md-${col}`}>
            <input className='input-radio' type="radio" id={value} name={name} value={value}/>
            <label className='input-radio__label' htmlFor={value}>{label}</label>
        </div>
    )
}
