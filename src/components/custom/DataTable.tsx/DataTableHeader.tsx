import React, { useState } from 'react'
import { ModalStrap } from '../../reactStrap/ModalStrap';
import {Button, Form, Input, Row, Col } from "reactstrap";
import { useForm } from '../../../hooks/useForm';

export const DataTableHeader = ({ title, buttonText, setSearch, insertRegister}) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    const [values, handleInputChange] = useForm({ formSearch: "", });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSearch(values.formSearch);
      };
    
    return (
        <>
            <div className="content__new">
                <p>{title}</p>
                <Button color="primary" onClick={toggle}>
                    {buttonText}
                </Button>
                <ModalStrap
                    modal={modal}
                    toggle={toggle}
                    title="REGISTRO DE CLIENTE"
                    insertRegister={insertRegister}
                />
            </div>
            <div className="data-table__search">
                <Form
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <Row className="row g-3 align-items-center">
                        <Col>
                            <Input
                                id="exampleEmail"
                                name="formSearch"
                                placeholder="Buscar clientes por nombre"
                                type="text"
                                className="data-table__search-input"
                                value={values.formSearch}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col>
                            <Button type="submit">Buscar</Button>
                        </Col>
                    </Row>
                </Form>
            </div>


        </>
    )
}
