import { Route, Routes } from 'react-router-dom'
import { SubNav } from '../components/reactStrap/SubNav'
import { Clientes } from '../views/catalogos/Clientes'
import { FaStore, FaFileInvoice, FaFile, FaClipboard,FaClipboardList} from 'react-icons/fa'
import { PuntoVenta } from '../views/ventas/PuntoVenta'
import { EmitirFactura } from '../views/ventas/EmitirFactura'
import { EmitirBoleta } from '../views/ventas/EmitirBoleta'
import { Consultas } from '../views/ventas/Consultas'
import { Reportes } from '../views/catalogos/Reportes'

export const VentasRouter = () => {
  const links=[
    {
      title:'Punto Venta',
      path:'punto-venta',
      icon:<FaStore />
    },
    {
      title:'Emitir Factura',
      path:'emitir-factura',
      icon:<FaFileInvoice/>
    },
    {
      title:'Emitir Boleta',
      path:'emitir-boleta',
      icon:<FaFile/>
    },
    {
      title:'Consultas',
      path:'consultas',
      icon:<FaClipboard/>
    },
    {
      title:'Reportes',
      path:'reportes',
      icon:<FaClipboardList/>
    }
  ]
  return (
    <>
      <SubNav links={links}/>
      <h1>Ventas</h1>
      <Routes>
        <Route path="punto-venta" element={<PuntoVenta />} />
        <Route path="emitir-factura" element={<EmitirFactura />} />
        <Route path="emitir-boleta" element={<EmitirBoleta />} />
        <Route path="consultas" element={<Consultas />} />
        <Route path="reportes" element={<Reportes />} />
      </Routes>
    </>
  )
}
