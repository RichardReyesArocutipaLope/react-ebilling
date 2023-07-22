import './RegistroInfo.css'
export const RegistroInfo = ({ photoRegister, dataRegister }) => {
    let keys = Object.keys(dataRegister)
    return (
        <div className='register__info'>
            <p className='register__info-title'>EPIKO TECHNOLOGY SOCIEDAD ANONIMA CERRADA - EPIKO TECH S.A.C.</p>
            <div className='register__info-img'>
                <img src={photoRegister} alt="foto-cliente" />
            </div>
            {keys.map((keyRegister) => {
                return (
                    <p className='register__info-data'>
                        <span>{keyRegister}</span> :
                        {dataRegister[keyRegister]}
                    </p>)
            })}

        </div>
    )
}
