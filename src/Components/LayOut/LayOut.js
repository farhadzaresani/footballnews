import React from 'react'
import Navbar from'./Navbar'
import {Outlet} from'react-router-dom'

export default function LayOut() {
  return (
    <>
     <Navbar/> 
     <Outlet/>
    </>
  )
}
