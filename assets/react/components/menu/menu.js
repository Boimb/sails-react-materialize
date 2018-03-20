import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'

const Menu = () => {
  return (
  <Navbar brand='logo' right>
    <NavItem href='/'><Icon>home</Icon></NavItem>
    <NavItem href='/about'><Icon>info</Icon></NavItem>
  </Navbar>
  )
}

export default Menu
