import { Link } from "react-router-dom"
import styled from "styled-components"
import { useEffect, useState } from "react"

export default function HostVans() {
    const [hostVans, setHostVans] = useState([])

    function fetchVanDetails() {
        fetch("/api/host/vans")
        .then( res => res.json())
        .then( data => setHostVans(data.vans) )
    }

    useEffect(() => {
        fetchVanDetails()
    }, [])

    return(
        <>
            <h1>Your Listed Vans</h1>
            {hostVans.map((vans, idx) => ( 
                <HostVansContainer key={idx}>
                    <Link to={`${vans.id}`}>
                        <img src={vans.url} alt={vans.name}/>
                        <Details>
                            <div>
                                <p className="name"> {vans.name} </p>
                                <p className="price"> &#8377;{vans.price} </p>
                            </div>
                        </Details>
                    </Link>
                </HostVansContainer>
             ))}
        </>
    )
}

const HostVansContainer = styled.div`
    margin: 1em;
    padding: 0.25em;
    border: 2px solid black;
    border-radius: 0.5em;
    cursor: pointer;

    a {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
    }

    a img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 0.5rem 0 0 0.5rem;
    }
`

const Details = styled.div`
    display: flex;
    margin-left: 1em;
    align-items: center;
    width: 100%;

    p.name {
        color: #000;
        padding: 0.5em;
    }

    p.price {
        color: #000;
        padding: 0.5em;
    }

`

//             <Link to="/host/vans">
//                 <BackButton>
//                     &larr; Back to Vans
//                 </BackButton>
//             </Link>
// const BackButton = styled.span`
//     cursor: pointer;
// `