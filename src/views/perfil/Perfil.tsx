import fotoPerfil from '../../assets/usuario.png'
import iconRefresh from '../../assets/icons/rotate-solid.svg'
import './Perfil.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

export const Perfil = () => {

  const dataUser=useSelector((state: RootState) => state.auth)
  const {name, lastName, businessName, ruc} = dataUser
  const user={
    name:name,
    lastName:lastName,
    photo:fotoPerfil,
    businessName:businessName,
    ruc: ruc,
    help:{
      company:'SFACT',
      cel:'980148718',
      web:'sfact.pe',
    }
  }
  return (
    <div className='perfil'>
      <div className="perfil__ruc">
        <img src={iconRefresh} alt="icon refresh" />
        <div>
          <p >{businessName}</p>
          <p>{`RUC: ${user.ruc}`}</p>
        </div>
      </div>
      <div className="perfil__info">
        <img className='perfil__info-photo' src={user.photo} alt="photo user" />
        <div className="perfil__info-name">{user.name}</div>
        <div className="perfil__info-name">{user.lastName}</div>
      </div>
      <div className="perfil__help">
        <a className='perfil__help-company' href='https://www.sfact.pe/' target='__blank'>{user.help.company}</a>
        <a href='https://www.sfact.pe/' target='__blank'>{`Cel: ${user.help.cel}`}</a>
        <a href='https://www.sfact.pe/' target='__blank'>{`Web: ${user.help.web}`}</a>
      </div>
    </div>
  )
}
