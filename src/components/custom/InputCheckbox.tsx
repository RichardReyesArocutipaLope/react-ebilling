import React from 'react'
import './InputCheckBox.css'
import { FormGroup, Input, Label } from 'reactstrap'

export const InputCheckbox = ({ col,label,value,name,onChange}) => {
    return (
        <FormGroup check className={`input-checkbox__custom col-md-${col}`}>
            <Input
                id={value}
                type="checkbox"
                value={value}
                name={name}
                onChange={onChange}
            />
            {' '}
            <Label check>
                {label}
            </Label>
        </FormGroup>
    )
}
