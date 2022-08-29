import React from 'react'
import Header from './Header/Header'
import Slider from './Header_corusel/Slider'
import Category from './topCategory/Category'
import './UZtovar.css'
export default function UzTovar() {
  return (
   <div className="container">
        <Header/> 
        <Slider/>
        <Category/>
   </div>
  )
}
