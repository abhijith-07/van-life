import { useEffect, useState } from "react"
import { Link, useParams, NavLink, Outlet } from "react-router-dom"
import styled from "styled-components";

export default function HostVanDetails() {

    const [vanDetails, setVanDetails] = useState({});
    const {id} = useParams();
    
    useEffect(
        () => {
            fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVanDetails(data.vans))
        }
    ,[]);

    return(
        <>
            <BackButtonContainer>
                <Link to=".." relative="path">
                    &larr; Back to Vans
                </Link>
            </BackButtonContainer>

            <VanContainer>
                <img src={vanDetails.url} alt="" />
                <div>
                    <h2>{vanDetails.name}</h2>
                    <p><span>&#8377;</span>{vanDetails.price}</p>
                </div>
            </VanContainer>
            <VanHostNav>
                <NavLink to="." end style={ ({ isActive }) => isActive ? NavStyle : null }>Details</NavLink>
                <NavLink to="pricing" style={ ({ isActive }) => isActive ? NavStyle : null }>Pricing</NavLink>
                <NavLink to="photos" style={ ({ isActive }) => isActive ? NavStyle : null }>Photos</NavLink>
            </VanHostNav>
            <Outlet context={{vanDetails}} />
        </>
    )
}

const BackButtonContainer = styled.span`
    padding: 1em;
    display: flex;
    
    a {
        text-decoration: none;
        color: #000;
        border: 1px solid #000;
        border-radius: 3px;
        padding: 0 1em;
        cursor: pointer;
    }
`

const VanContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 50%;
    }

    div {
        text-align: center;
    }

    div h2{
        white-space: nowrap;
    }

    div p {
        font-size: 1.25rem;
        font-weight: 600;
    }
`

const VanHostNav = styled.div`
    display: flex;
    width: 60vw;
    margin: 1rem 0;
    justify-content: space-around;

    a {
        text-decoration: none;
        color: #000;
    }
`

const NavStyle = {
    textDecoration: "underline",
}