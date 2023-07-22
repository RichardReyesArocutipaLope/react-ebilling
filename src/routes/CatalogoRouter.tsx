import { Route, Routes } from 'react-router-dom'
import { SubNav } from '../components/reactStrap/SubNav'
import { Clientes } from '../views/catalogos/Clientes'
import { Mercaderias } from '../views/catalogos/Mercaderias'
import { Reportes } from '../views/catalogos/Reportes'
import './CatalogoRouter.css'
import { FaUsers, FaCartArrowDown, FaChartBar } from 'react-icons/fa'

export const CatalogoRouter = () => {
  const links=[
    {
      title:'Clientes',
      path:'clientes',
      icon:<FaUsers />
    },
    {
      title:'Mercaderias',
      path:'Mercaderias',
      icon:<FaCartArrowDown/>
    },
    {
      title:'Reportes',
      path:'reportes',
      icon:<FaChartBar/>
    }
  ]
  
  return (
    <>
      <SubNav links={links}/>
      <Routes>
        <Route path="clientes" element={<Clientes />} />
        <Route path="mercaderias" element={<Mercaderias />} />
        <Route path="reportes" element={<Reportes />} />
      </Routes>
    </>

  )
}

