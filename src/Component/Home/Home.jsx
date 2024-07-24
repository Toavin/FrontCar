import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import Login from '../Login/Login'


import '../Page/Dashboard/Dashboard.scss'; // Importation du style pour Dashboard si nécessaire
import '../Profil/Profil.scss'; // Importation du style pour Profil si nécessaire
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../Page/Dashboard/Dashboard';
import Profil from '../Profil/Profil';
import Historique from '../Historique/Historique';

const Home = () => {
    const [activePage, setActivePage] = useState('Dashboard');

    return (
        <div>
            <div className='content-fluid'>
                <div className='head_content'>
                    <SideBar setActivePage={setActivePage} />
                    <Header activepage={activePage} />
                </div>
                <div className="content">
                    <Routes>
                        <Route path='' element={<Dashboard/>}/>
                        <Route path='/Profile' element={<Profil/>}/>
                        <Route path='/Historique' element={<Historique />}/>
                    </Routes>

                    
                </div>
            </div>
        </div>
    );
}

export default Home;
