import React from 'react'
import logo from './image/google-keep.png';

const Header = () => {
  return (
    <>
        <div className='header'>
            <img src={logo} alt='logo' height= '70' width='70'/>
            <h1>Google Keep</h1>
        </div>
    </>
  )
}

export default Header
