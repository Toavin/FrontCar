import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
import Profil from '../Profil/Profil'
import AllUser from '../user/AllUser'
import AddUser from '../user/AddUser'
import EditUser from '../user/EditUser'

import Addcar from '../AddCar/Addcar'
import ListCar from '../listCar/listCar'
import DeatilCar from '../DetailCar/DeatilCar'

import { Route, Routes } from 'react-router-dom'
import Reservation from '../Reservation/Reservation'
import Dashboard from '../Page/Dashboard/Dashboard'
const Home = () => {
    const [activePage, setActivePage] = useState('Dashboard');
    return (
        <div>
            <div className='content-fluid'>
                <div className='head_content'>
                    <SideBar setActivePage={setActivePage}  />
                    <Header  activepage={activePage} />
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/listcar" element={<ListCar/>} />
                        <Route path='/addcar' element={<Addcar/>}/>
                        <Route path="/detail/:id" element={<DeatilCar/>} />
                        <Route path="/reservation/:id" element={<Reservation/>} />
                        <Route path='/dashboard' element={<Dashboard/>}/>
                        <Route path='/Profile' element={<Profil/>}/>
                        <Route path='/listUser' element={<AllUser/>}/>
                        <Route path="/AjoutUser" element={<AddUser/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Home