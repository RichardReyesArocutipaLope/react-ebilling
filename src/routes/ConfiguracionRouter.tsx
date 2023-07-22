import { Route, Routes } from 'react-router-dom'
import { SubNav } from '../components/reactStrap/SubNav'
import { FaChartLine,  FaSpinner } from 'react-icons/fa'

import { Venta } from '../views/configuracion/Venta'
import { GeneracionJson } from '../views/configuracion/GeneracionJson'

export const ConfiguracionRouter = () => {
  const links=[
    {
      title:'Ventas',
      path:'ventas',
      icon:<FaChartLine />
    },
    {
      title:'Generacion JSON',
      path:'generacion-json',
      icon:<FaSpinner/>
    },

  ]
  return (
    <>
      <SubNav links={links}/>
      <h1>configuracion router</h1>
      <Routes>
        <Route path="ventas" element={<Venta/>} />
        <Route path="generacion-json" element={<GeneracionJson/>} />
      </Routes>
    </>
  )
}
