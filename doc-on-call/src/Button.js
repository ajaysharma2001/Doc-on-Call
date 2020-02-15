import React from 'react'

export default function Header() {
  return (
    <header style = {headerStyle}>
      <h1>Doc on Call</h1>
    </header>
  )
}

const headerStyle = {
    background: '#267',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'Hevatica',
    fontSize: "22px",
  }