import React from 'react'
import './header.css'


const headerStyle = {
  textAlign: 'center',
  padding: '10px',
  fontFamily: 'Comic-Sans',
  fontSize: "24px",
  display: 'flex',
  flexDirection: 'row', 
} 

export default function Header() {
  return (
    <header className='m'>
      <div className="left_image"><img id="blank" src="./images/White_Square"></img></div>
      <div><font color="white"><h1><b>Doc on Call</b></h1></font></div>
      <div className="right_image"><img id="logo" src="#"></img></div>
    </header>
  )
}

