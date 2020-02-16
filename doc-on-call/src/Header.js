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
    <header class='m'>
      <div class="left_image"><img id="blank" src="img/White_Square.jpg" ></img></div>
      <div class="middle_title"><font color="white"><h1><b>Doc on Call</b></h1></font></div>
      <div class="right_image"><img id="logo" src="#"></img></div>
    </header>
  )
}

