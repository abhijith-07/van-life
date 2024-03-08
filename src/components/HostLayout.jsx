import styled from "styled-components"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    return(
        <>
        <HostNav>
            <NavLink to="/host" end style={({isActive}) => isActive ? activeNav : null }>Dashboard</NavLink>
            <NavLink to="/host/vans" end style={({isActive}) => isActive ? activeNav : null }>Vans</NavLink>
            <NavLink to="/host/income" style={({isActive}) => isActive ? activeNav : null }>Income</NavLink>
            <NavLink to="/host/reviews" style={({isActive}) => isActive ? activeNav : null }>Reviews</NavLink>
        </HostNav>
        
        <Outlet />
        </>
    )
}

const HostNav = styled.nav`
    display: flex;
    justify-content: space-around;

    a{
        text-decoration: none;
    }
`

const activeNav = {
    textDecoration: "underline"
}