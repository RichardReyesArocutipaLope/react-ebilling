import React from 'react'
import { InputCheckbox } from './InputCheckbox'
import { InputFile } from './InputFile'
import { InputRadio } from './InputRadio'
import { InputSelect } from './InputSelect'
import { InputText } from './InputText'
import { InputTextarea } from './InputTextarea'

export const InputsGroup = ({ inputs, valueForm, handleChange }) => {

    enum TYPEINPUT {
        TEXT = 'text',
        BUTTON = 'button',
        CHECKBOX = 'checkbox',
        COLOR = 'color',
        DATE = 'date',
        DATETIME = 'datetime',
        DATETIME__LOCAL = 'datetime-local',
        EMAIL = 'email',
        FILE = 'file',
        HIDDEN = 'hidden',
        IMAGE = 'image',
        MONTH = 'month',
        NUMBER = 'number',
        PASSWORD = 'password',
        RADIO = 'radio',
        RANGE = 'range',
        RESET = 'reset',
        SEARCH = 'search',
        SUBMIT = 'submit',
        TEL = 'tel',
        TIME = 'time',
        URL = 'url',
        WEEK = 'week',
        SELECT = 'select',
        TEXTAREA = 'textarea',
    }
    return (
        <>
            <div className='row align-items-center mb-3 '>
                {inputs.map((item) => {
                    switch (item.typeInput) {
                        case TYPEINPUT.TEXT:
                            return (
                                <InputText
                                    col={item.col}
                                    label={item.label}
                                    name={item.name}
                                    onChange={handleChange}
                                    value={valueForm[item.name]}
                                />)
                            break;
                        case TYPEINPUT.SELECT:
                            return (
                                <InputSelect
                                    col={item.col}
                                    label={item.label}
                                    name={item.name}
                                    options={item.options}
                                    onChange={handleChange}
                                    value={valueForm[item.name]}
                                />
                            )
                            break;
                        case TYPEINPUT.CHECKBOX:
                            return (
                                <InputCheckbox
                                    col={item.col}
                                    label={item.label}
                                    name={item.name}
                                    onChange={handleChange}
                                    value={valueForm[item.name]}
                                />
                            )
                            break;
                        case TYPEINPUT.TEXTAREA:
                            return (
                                <InputTextarea
                                    col={item.col}
                                    label={item.label}
                                    cols={item.cols}
                                    rows={item.rows}
                                    name={item.name}
                                    onChange={handleChange}
                                    value={valueForm[item.name]}
                                />
                            )
                            break;
                        case TYPEINPUT.FILE:
                            return (
                                <InputFile
                                    col={item.col}
                                    label={item.label}
                                    name={item.name}
                                    onChange={handleChange}
                                    value={valueForm[item.name]}
                                />
                            )
                            break;
                        case TYPEINPUT.RADIO:
                            return (
                                <InputRadio
                                    col={item.col}
                                    label={item.label}
                                    name={item.name}
                                    onChange={handleChange}
                                    value={item.value}
                                />
                            )
                            break;

                        default:
                            break;
                    }
                })}
            </div>
        </>
    )
}
