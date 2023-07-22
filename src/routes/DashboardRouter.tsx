import React, { useState } from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { CatalogoRouter } from "./CatalogoRouter";
import { VentasRouter } from "./VentasRouter";
import { ConfiguracionRouter } from "./ConfiguracionRouter";
import { NavStrap } from "../components/reactStrap/NavStrap";
import { MainWrapper } from '../components/custom/MainWrapper'
import { Perfil } from '../views/perfil/Perfil'
import { ComprobEletronicosRouter } from './ComprobEletronicosRouter';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import './DashboardRouter.css'
export const DashboardRouter = () => {
    const [viewPerfil, setViewPerfil] = useState(true)
    return (
        <MainWrapper>
            <div className='catalogo__container'>
                <div className={`perfil__container ${viewPerfil ? 'active' : ''}`}>
                    <div className='perfil__wrapper'>
                        <Perfil />
                    </div>

                </div>
                <div className='option__container'>
                    <div className='active-perfil' onClick={() => { setViewPerfil(!viewPerfil) }}>
                        <span className={`${viewPerfil ?'':'active-perfil--rotate'}`}><FaCaretLeft /></span>
                    </div>
                    <NavStrap />
                    <Routes>
                        <Route path="catalogo/*" element={<CatalogoRouter />} />
                        <Route path="ventas/*" element={<VentasRouter />} />
                        <Route path="comprobanteelectronicos/*" element={<ComprobEletronicosRouter />} />
                        <Route path="configuracion/*" element={<ConfiguracionRouter />} />
                    </Routes>
                </div>
            </div>
        </MainWrapper>
    )
}
