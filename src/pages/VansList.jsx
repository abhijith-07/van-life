import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function VansList() {
    const [vansImg, setVansImg] = useState([])
    
    useEffect(() => {
        fetch("/api/van-data/vans/")
        .then(res => res.json())
        .then(json => setVansImg(json.images))
    }, [])

    return(
        <VanContainer>
            {
                vansImg.map((img, idx) => (
                    <Link to={`/vans/van/${img.id}`} key={idx} >
                        <Card>
                            <img src={img.url} alt="" />
                            <div>
                                <h6>Van {img.id}</h6>
                                <p className= {`type-${img.type}`} > {img.type} </p>
                            </div>
                        </Card>
                    </Link>
                ))
            }
        </VanContainer>
    )
}


const VanContainer = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    padding: 1rem 0 70px 0;

    a{
        cursor: pointer;
        text-decoration: none;
        color: #000;
    }
`

const Card = styled.div`
    width: 100%;
    
    img {
        border-radius: 1em 1em 0 0;
        width: 100%;
    }

    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    div h6 {
        text-align: center;
        font-size: 1rem;
    }

    div p {
        padding: 0.5em 1em;
        color: #fff;
        border-radius: 0.25em;
    }

    .type-simple {
        background-color: green;
    }

    .type-luxury {
        background-color: #e49400;
    }

    .type-rugged {
        background-color: #c8015b;
    }
`