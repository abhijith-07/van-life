import { NavLink } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
    return(
        <header>
          <Navbar>
            <NavLink to="/" style={({isActive}) => isActive ? activeStyle : null }>Home</NavLink>
            <NavLink to="/vans" style={({isActive}) => isActive ? activeStyle : null }>Vans</NavLink>
            <NavLink to="/host" style={({isActive}) => isActive ? activeStyle : null }>Host</NavLink>
            <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : null }>About</NavLink>
          </Navbar>
        </header>
    )
}

const Navbar = styled.nav`
  display: flex;
  width: 100vw;
  position: sticky;
  justify-content: right;
  align-items: center;
  gap: 1em;
  height: 50px;
  padding: 0.5em 1em;
  background-color: #190d05;
  a {
    text-decoration: none;
    color: #f6f2f0;
  }
  a:hover{
    color: #cd5302;
  }
`

const activeStyle = {
  color: "#cd5302",
  textDecoration: "underline"
}