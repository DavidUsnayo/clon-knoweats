import { useState } from 'react'
import './App.css'
import { Home } from './pages/home/home'
import { Menu } from './pages/menu/menu'
import { ComoFunciona } from './pages/como_funciona/funciona'
import { QuienesSomos } from './pages/quienes_somos/somos'
import { FAQs } from './pages/FAQs/faq'
import { InicioSesion } from './pages/inicio_de_sesion/inicioSesion'

import { Navegacion } from './components/navegacion/navegacion'
import {Footer} from './components/footer/footer'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import { VariablesContexto } from './contexto'

function App() {
  
  return (
      <VariablesContexto>
        <Router>
          <Navegacion/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/menu' element={<Menu/>}/>
              <Route path='/como_funciona' element={<ComoFunciona/>}/>
              <Route path='/quienes_somos' element={<QuienesSomos/>}/>
              <Route path='/FAQs' element={<FAQs/>}/>
              <Route path='/sesion' element={<InicioSesion/>}/>
          </Routes>
          <Footer/>
        </Router>
      </VariablesContexto>
  )
}

export default App
