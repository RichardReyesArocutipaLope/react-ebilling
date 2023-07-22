import React from 'react'
import './InputFile.css'
import { FormText, Input } from 'reactstrap'

export const InputFile = ({ col, label, value, name, onChange }) => {

    return (
        <div className='row justify-content-center'>
            <div className={`input-file__custom col-md-${col}`}>
                <Input
                    id={value}
                    name={name}
                    type="file"
                    onChange={onChange}
                />
                <FormText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                </FormText>
            </div>

        </div>
    )
}
