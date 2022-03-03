import React from 'react'
import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Repos from './pages/repos'

const Houtes = () => (
    <BRouter>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/repos" element={<Repos />}></Route>
    </Routes>
    </BRouter>
)

export default Houtes

//<Route path="/" exact component={Home} />