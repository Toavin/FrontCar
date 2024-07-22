import React from 'react'
import './Profil.scss'
import Image from '../../assets/46.jpg'
const Profil = () => {
    return (
        <div className='Profil'>
            <div className="headprofil">
                <h1>Salut! bienvenu à nouveau</h1>

                <div className="content-profil">
                    <div className="imagePdc">
                        <img src={Image} alt="" />
                    </div>

                    <div className="prof-cont">
                        <div className="image-text">
                            <img src={Image} alt="" />
                            <div className="cont-span">
                                <h2>Mitchell C.Shay</h2>
                                <p>Concepteur UX / UI</p>
                            </div>
                            <div className="cont-span">
                                <h3>InfoExemple@gmail.com</h3>
                                <p>E-mail</p>
                            </div>
                        </div>
                        <div className="three-point">
                            <p>...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil