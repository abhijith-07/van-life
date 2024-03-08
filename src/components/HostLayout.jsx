import styled from "styled-components"
import { Link, Outlet } from "react-router-dom"

export default function HostLayout() {
    return(
        <>
        <HostNav>
            <Link to="/host">Dashboard</Link>
            <Link to="/host/income">Income</Link>
            <Link to="/host/reviews">Reviews</Link>
            
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