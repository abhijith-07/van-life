import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"


export default function Van() {
    const [vanDetails, setVanDetails] = useState({})
    const params = useParams()

    useEffect(() => {
        fetch(`/api/van-data/vid/${params.id}`)
        .then(res => res.json())
        .then(json => setVanDetails(json.vans))
    },[])

    console.log(vanDetails)

    return(
        <DetailsContainer>
            <img src={vanDetails.url} alt={vanDetails.name} />
            <div className="name-price">
                <h1>{vanDetails.name}</h1>
                <div className="price">{vanDetails.price}</div>
            </div>
            <p>{vanDetails.description}</p>
        </DetailsContainer>
    )
}


const DetailsContainer = styled.div`
    width: 100vw;

    img {
        width: 100%;
    }

    .name-price {
        display: flex;
        justify-content: space-around;
        height: 2rem;
        align-items: center;
        margin-top: 1em;
    }

    .price {
        background-color: green;
        color: #fff;
        padding: 0.25rem 1rem;
        border-radius: 5px;
    }

    p {
        font-size: 0.75rem;
        margin-top: 1rem;
        line-height: 1.25rem;
        word-spacing: 0.5rem;
        letter-spacing: 0.15rem;
        display: flex;
        padding: 0 1.5rem;
        text-align: center;
    }
`