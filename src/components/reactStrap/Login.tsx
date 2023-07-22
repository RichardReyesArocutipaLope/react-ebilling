import { useDispatch, useSelector } from "react-redux";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useForm } from "../../hooks/useForm";
import { fetchStartLogin } from "../../slice/authSlice";
import { idioma } from "../../common/interfaces/languages";
import { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import { RootState, useAppDispatch } from "../../store/store";
interface Props {
    logo: string,
    text: idioma,
}

export const Login = ({ logo, text }: Props) => {
    const mostrarAlerta = (message: any) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: message,
            footer: "help: +51 980148718",
            background: '#010966',
            color: '#fff',
        });
    };
    const args = useSelector((state: RootState) => state.auth);

    //----control el login y fetch----
    const dispatch = useAppDispatch();
    const [values, handleInputChange] = useForm({
        email: "",
        password: "",
    })
    const { email, password } = values;
    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(fetchStartLogin(email, password));
    };
    useEffect(() => {
        if (args.error !== 0) {
            mostrarAlerta(args.errorMessage)
        }
    }, [args.error])
    
    //----end----

    return (
        <div
            className="card shadow border-1 text-bg-light rounded-3"
            style={{ width: "17rem", overflow: 'hidden' }}
        >
            <img src={logo} alt="Logo-sfact" />
            <div className="card-body text-center">
                <Form onSubmit={handleSubmit}>
                    <FormGroup floating>
                        <Input
                            id="email"
                            name="email"
                            placeholder="usuario"
                            type="text"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <Label for="exampleEmail">{text.user}</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            type="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                        <Label for="examplePassword">{text.password}</Label>
                    </FormGroup>
                    <Button type="submit">{text.submit}</Button>
                </Form>
            </div>
        </div>
    )
}
