import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
    return(
        <header>
          <Navbar>
            <Link to="/">Home</Link>
            <Link to="/vans">Vans</Link>
            <Link to="/about">About</Link>
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
