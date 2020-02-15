import React from 'react'
import './header.css'
export default function Header() {
  return (
    <header style = {headerStyle}>
      <h1>Doc on Call</h1>
    </header>
  )
}

const headerStyle = {
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'Comic-Sans',
    fontSize: "22px",
  }