import { Nav, NavItem } from 'reactstrap'
import { NavLink } from "react-router-dom";
import { FaMoon, FaPowerOff } from 'react-icons/fa'
import { darkTheme } from '../../theme/darkTheme';
import { lightTheme } from '../../theme/lightTheme';
import { useDispatch } from "react-redux";
import { setLogout } from "../../slice/authSlice.js";
import './NavStrap.css'
import { useState } from 'react';


export const NavStrap = () => {
    //----instrucciones para cambiar el tema----
    const rootStyle = document.documentElement.style
    const [dark, setDark] = useState(false)
    const changeTheme = (theme: any) => {
        let cssVars = Object.keys(theme)
        for (let cssVar of cssVars) {
            rootStyle.setProperty(cssVar, theme[cssVar])
        }
    }
    const onDarkMode = () => {
        if (dark) {
            setDark(false)
            changeTheme(lightTheme)
        } else {
            setDark(true)
            changeTheme(darkTheme)
        }
    }
    //----end----

    //----cerrar sesion----
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(setLogout());
    };
    //----end----

    //----array con las opciones del nav----
    const navLabels = [
        {
            label: 'Catalogo',
            to: 'catalogo',
        },
        {
            label: 'Ventas',
            to: 'ventas',
        },
        {
            label: 'Comprob. Electrónicos',
            to: 'comprobanteelectronicos',
        },
        {
            label: 'Configuración',
            to: 'configuracion',
        },
    ]
    //----end----


    return (
        <div className='nav-strap'>
            <Nav tabs>
                {navLabels.map((item) => (
                    <NavItem key={item.to}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}>
                            {item.label}
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
            <div className='nav__options'>
                <span
                    className='nav__icon-option nav__icon-option--dark-mode'
                    onClick={() => { onDarkMode() }}>
                    <FaMoon />
                </span>
                <span
                    className='nav__icon-option nav__icon-option--off'
                    onClick={() => { onLogout() }}>
                    <FaPowerOff />
                </span>
            </div>
        </div>
    )
}
